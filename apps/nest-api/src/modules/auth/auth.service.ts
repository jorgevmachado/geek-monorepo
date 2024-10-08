import { BadRequestException, ForbiddenException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import type { IIndexParams } from '../../shared/service';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { Users } from './users/users.entity';
import { ERole } from '@geek/business/dist/user';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { EStatus } from '@geek/business/dist/status';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(createAuthDto: CreateAuthDto) {
    await this.userService.create(createAuthDto);
    return { message: 'Registration Completed Successfully!' };
  }

  async signIn({email, password}: CredentialsAuthDto) {
    const credential = await this.userService.checkCredentials({email, password});

    if (!credential) {
      throw new UnprocessableEntityException('Invalid credentials');
    }

    const jwtPayload = { id: credential.id };

    const token = this.jwtService.sign(jwtPayload);

    return { token };
  }

  async updateUser(id: string, updateAuthDto: UpdateAuthDto, authUser?: Users) {
    if (Boolean(authUser)) {
      this.validateCurrentUser(id, authUser);
    }

    if (
      Boolean(authUser) &&
      authUser.role !== ERole.ADMIN &&
      Boolean(updateAuthDto.role)
    ) {
      throw new ForbiddenException(
        'You are not authorized to change the user role',
      );
    }

    return await this.userService.update(id, updateAuthDto);
  }

  async findAllUsers(indexParams: IIndexParams) {
    return await this.userService.findAll(indexParams);
  }

  async findOneUser(id: string, user: Users) {
    this.validateCurrentUser(id, user);
    const withDeleted = user.role === ERole.ADMIN;
    return await this.userService.findOne(id, withDeleted);
  }

  async promoteUser(id: string, authUser: Users) {
    const users = (await this.userService.findAll()) as Array<Users>;

    const onlyUser = users[0];
    if (
      users.length === 1 &&
      onlyUser.id === id &&
      onlyUser.role === ERole.USER &&
      onlyUser.status === EStatus.ACTIVE
    ) {
      return await this.userService.promote(onlyUser.id);
    }

    if (authUser.role !== ERole.ADMIN) {
      throw new ForbiddenException(
        'You are not authorized to access this feature',
      );
    }

    const user = (await this.userService.findOne(id, false, true)) as Users;

    if (user.role !== ERole.USER || user.status !== EStatus.ACTIVE) {
      const message =
        user.role === ERole.ADMIN
          ? 'User is already an administrator'
          : 'User cannot be promoted';
      throw new BadRequestException(message);
    }

    return await this.userService.promote(user.id);
  }

  async removeUser(id: string, authUser: Users) {
    if (authUser.id === id) {
      throw new BadRequestException('You cannot delete yourself');
    }
    return await this.userService.remove(id);
  }

  private validateCurrentUser(id: string, user: Users) {
    if (id !== user.id && user.role !== 'ADMIN') {
      throw new UnprocessableEntityException(
        'You are not authorized to access this feature',
      );
    }
  }


}
