import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import type { IIndexParams } from '../../shared/service';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { Users } from './users/users.entity';
import { ERole } from '@geek/business/dist/user';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async findAllUsers(indexParams: IIndexParams) {
    return await this.userService.index(indexParams);
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

  async findOneUser(id: string, user: Users) {
    this.validateCurrentUser(id, user);
    const withDeleted = user.role === ERole.ADMIN;
    return await this.userService.findOne(id, withDeleted);
  }

  private validateCurrentUser(id: string, user: Users) {
    if (id !== user.id && user.role !== 'ADMIN') {
      throw new UnprocessableEntityException(
        'You are not authorized to access this feature',
      );
    }
  }
}
