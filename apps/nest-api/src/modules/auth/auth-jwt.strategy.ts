import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Users)
    private repository: Repository<Users>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret',
    });
  }

  async validate(payload: { id: string }) {
    const user = await this.repository.findOne({ where: { id: payload.id } });

    if (!user) {
      throw new UnauthorizedException('User not found!');
    }

    return user;
  }
}
