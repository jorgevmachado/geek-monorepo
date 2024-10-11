import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isArray } from 'class-validator';

import { EGender, ERole, EStatus } from '@geek/business';

import { IFilterParams, Service } from '../../../shared/service';

import { CreateAuthDto } from '../dto/create-auth.dto';
import { CredentialsAuthDto } from '../dto/credentials-auth.dto';
import { FilterAuthDto } from '../dto/filter-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';

import { Users } from './users.entity';

@Injectable()
export class UsersService extends Service<Users>{
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users', []);
  }

  async findAll(filterAuthDto?: FilterAuthDto) {
    const results = await this.index({
      filters: this.generateFilters(filterAuthDto),
      parameters: filterAuthDto,
      withDeleted: filterAuthDto?.withDeleted,
    });

    if (isArray(results)) {
      return results.map((user) => this.cleanUser(user));
    }

    return {
      ...results,
      data: results.data.map((user) => this.cleanUser(user)),
    };
  }

  async create(createAuthDto: CreateAuthDto) {
    const userCpf = await this.findBy({
      by: 'cpf',
      value: createAuthDto.cpf,
      withDeleted: true,
    });

    const userEmail = await this.findBy({
      by: 'email',
      value: createAuthDto.email,
      withDeleted: true,
    });

    if (
      (userCpf && userCpf.deletedAt !== null) ||
      (userEmail && userEmail.deletedAt !== null)
    ) {
      throw new InternalServerErrorException(
        'Inactive user, please contact administrator.',
      );
    }

    const user = new Users();
    user.cpf = createAuthDto.cpf;
    user.salt = await bcrypt.genSalt();
    user.role = ERole.USER;
    user.name = createAuthDto.name;
    user.email = createAuthDto.email;
    user.status = EStatus.INCOMPLETE;
    user.password = await bcrypt.hash(createAuthDto.password, user.salt);
    user.dateOfBirth = createAuthDto.dateOfBirth;
    user.confirmationToken = crypto.randomBytes(32).toString('hex');
    if (createAuthDto?.gender) {
      user.gender = createAuthDto.gender.toUpperCase() as EGender;
    }

    user.status = this.validateStatus(
      user.status,
      user.gender,
    );

    try {
      const result = await this.repository.save(user);
      return this.cleanUser(result);
    } catch (error) {
      if (Number(error.code) === 23505) {
        throw new ConflictException('User already exists');
      }

      throw new InternalServerErrorException('Error saving user to database');
    }
  }

  async checkCredentials({ email, password }: CredentialsAuthDto): Promise<Users | null> {
    const user = await this.findBy({
      by: 'email',
      value: email,
    });

    if (!user || user?.status === EStatus.INACTIVE) {
      return null;
    }

    if (await this.validatePassword(user.salt, password, user.password)) {
      return user;
    }

    return null;
  }

  async update(id: string, updateAuthDto: UpdateAuthDto) {
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
    });

    currentUser.cpf = await this.validateCpf(
      currentUser.id,
      currentUser.cpf,
      updateAuthDto.cpf,
    );

    currentUser.role = this.validateRole(
      currentUser.status,
      currentUser.role,
      updateAuthDto.role,
    );

    currentUser.email = await this.validateEmail(
      currentUser.id,
      currentUser.email,
      updateAuthDto.email,
    );

    currentUser.name = !updateAuthDto.name ? currentUser.name : updateAuthDto.name;
    currentUser.gender = !updateAuthDto.gender ? currentUser.gender : updateAuthDto.gender;
    currentUser.dateOfBirth = !updateAuthDto.dateOfBirth
      ? currentUser.dateOfBirth
      : updateAuthDto.dateOfBirth;

    currentUser.status = this.validateStatus(
      currentUser.status,
      currentUser.gender,
    );

    try {
      const result = await this.repository.save(currentUser);
      return this.cleanUser(result);
    } catch (_) {
      throw new InternalServerErrorException(
        `Error updating user with ${id} in database`,
      );
    }
  }

  async findOne(id: string, withDeleted?: boolean, mustCleanUser: boolean = true): Promise<Users> {
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
      withDeleted,
    });
    if (mustCleanUser) {
      return this.cleanUser(currentUser);
    }
    return currentUser;
  }

  async promote(userId: string) {
    try {
      await this.update(userId, { role: ERole.ADMIN });
      return { message: 'User promoted to administrator successfully' };
    } catch (_) {
      throw new InternalServerErrorException('Error promoting user');
    }
  }

  async remove(id: string) {
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
    });
    currentUser.deletedAt = new Date();
    currentUser.status = EStatus.INACTIVE;
    await this.repository.save(currentUser);
    return {
      message: `User with id ${id} successfully removed`,
    };
  }

  private async validatePassword(salt: string, password: string, userPassword: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, salt);
    return hash === userPassword;
  }

  private cleanUser(user: Users) {
    return {
      id: user.id,
      cpf: user.cpf,
      role: user.role,
      name: user.name,
      email: user.email,
      status: user.status,
      ...(user.status !== EStatus.INCOMPLETE && {
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
      }),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      ...(user.deletedAt && { deletedAt: user.deletedAt }),
    };
  }

  private async validateCpf(id: string, userCpf: string, cpf: string) {
    if (!cpf) {
      return userCpf;
    }
    const entityCpf = await this.findBy({
      by: 'cpf',
      value: cpf,
    });

    if (Boolean(entityCpf) && entityCpf.id !== id) {
      throw new BadRequestException('CPF already exists');
    }

    return cpf;
  }

  private validateRole(userStatus: EStatus, userRole: ERole, role: ERole) {
    if (!role) {
      return userRole;
    }
    if (userStatus !== EStatus.ACTIVE) {
      throw new BadRequestException(
        'the user cannot be an administrator because it is not active',
      );
    }

    return role;
  }

  private async validateEmail(id: string, userEmail: string, email?: string) {
    if (!email) {
      return userEmail;
    }
    const entityEmail = await this.findBy({
      by: 'email',
      value: email,
    });

    if (Boolean(entityEmail) && entityEmail.id !== id) {
      throw new BadRequestException('Email already exists');
    }

    return email;
  }

  private validateStatus(userStatus: EStatus = EStatus.INCOMPLETE, userGender?: EGender) {
    if (userStatus === EStatus.ACTIVE) {
      return userStatus;
    }

    return userStatus === EStatus.INCOMPLETE && Boolean(userGender)
      ? EStatus.ACTIVE
      : EStatus.INCOMPLETE;
  }

  private generateFilters(filterDto: FilterAuthDto): Array<IFilterParams> {
    const filters: Array<IFilterParams> = [];
    if (!filterDto) {
      return filters;
    }
    if (filterDto?.role) {
      filters.push({
        param: 'role',
        condition: '=',
        value: filterDto.role.toUpperCase(),
      });
    }

    if (filterDto?.status) {
      filters.push({
        param: 'status',
        condition: '=',
        value: filterDto.status.toUpperCase(),
      });
    }

    if (filterDto?.name) {
      filters.push({
        param: 'name',
        condition: 'LIKE',
        value: `%${filterDto.name}%`,
      });
    }

    if (filterDto?.email) {
      filters.push({
        param: 'email',
        condition: 'LIKE',
        value: `%${filterDto.email}%`,
      });
    }

    if (filterDto?.cpf) {
      filters.push({
        param: 'cpf',
        condition: 'LIKE',
        value: `%${filterDto.cpf}%`,
      });
    }

    return filters;
  }


}
