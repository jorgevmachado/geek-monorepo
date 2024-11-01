import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthRoleGuards } from './auth-role.guards';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CredentialsAuthDto } from './dto/credentials-auth.dto';
import { ERole } from './users/user.interface';
import { FilterAuthDto } from './dto/filter-auth.dto';
import { GetUserAuth } from './auth-user.decorator';
import { Role } from './auth-role.decorator';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Users } from './users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUp(createAuthDto);
  }

  @Post('signIn')
  signIn(@Body() credentialsAuthDto: CredentialsAuthDto) {
    return this.authService.signIn(credentialsAuthDto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  update(
    @GetUserAuth() user: Users,
    @Param('id') id: string,
    @Body() updateAuthDto: UpdateAuthDto,
  ) {
    return this.authService.updateUser(id, updateAuthDto, user);
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

  @Patch('promote/:id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  promote(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.authService.promoteUser(id, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), AuthRoleGuards)
  @Role(ERole.ADMIN)
  remove(@GetUserAuth() user: Users, @Param('id') id: string) {
    return this.authService.removeUser(id, user);
  }
}
