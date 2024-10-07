import { Injectable } from '@nestjs/common';
import { Service } from '../../../shared/service';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends Service<Users>{
  constructor(
    @InjectRepository(Users) protected repository: Repository<Users>,
  ) {
    super(repository, 'users', []);
  }
}
