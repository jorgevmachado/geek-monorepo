import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FilterAuthDto } from './dto/filter-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { AuthRoleGuards } from './auth-role.guards';
import { ERole } from '@geek/business/dist/user';
import { Role } from './auth-role.decorator';
import { GetUserAuth } from './auth-user.decorator';
import { Users } from './users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post('signIn')
signIn(@Body() credentialsAuthDto: CredentialsAuthDto) {
    return this.authService.signIn(credentialsAuthDto);
}

@Get('users')
@UseGuards(AuthGuard(), AuthRoleGuards)
@Role(ERole.ADMIN)
  findAll(@Query() filter: FilterAuthDto) {
    return this.authService.findAllUsers(filter);
  }

  @Get(':id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  findOne(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.authService.findOneUser(id, user);
  }
}
