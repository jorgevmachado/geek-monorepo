import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/users.module';
import { AuthJwtStrategy } from './auth-jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'super-secret',
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthJwtStrategy],
  exports: [PassportModule, AuthJwtStrategy],
})
export class AuthModule {}
