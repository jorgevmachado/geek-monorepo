import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { Service } from '../../../shared/service';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CredentialsAuthDto } from '../dto/credentials-auth.dto';
import { EStatus } from '@geek/business/dist';

@Injectable()
export class UsersService extends Service<Users>{
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users', []);
  }

  async checkCredentials({email, password}: CredentialsAuthDto): Promise<Users | null> {
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

  private async validatePassword(salt: string, password: string, userPassword: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, salt);
    return hash === userPassword;
  }

  async findOne(id: string, withDeleted?: boolean, mustCleanUser: boolean = true): Promise<Users> {
    const currentUser = await this.findBy({
      by: 'id',
      value: id,
      withThrow: true,
      withDeleted,
    });
    if(mustCleanUser) {
      return this.cleanUser(currentUser);
    }
    return currentUser;
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
}
