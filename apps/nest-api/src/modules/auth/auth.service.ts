import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import type { IIndexParams } from '../../shared/service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async findAllUsers(indexParams: IIndexParams) {
    return await this.userService.index(indexParams);
  }
}
