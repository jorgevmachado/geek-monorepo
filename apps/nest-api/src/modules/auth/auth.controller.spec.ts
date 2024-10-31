import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';

import { ERole } from '@geek/business';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { USER_FIXTURE } from './users/users.fixture';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  const removeResponse = {
    message:
        `User with id ${USER_FIXTURE.id} successfully removed`,
  };

  const updateResponse = {
    id: USER_FIXTURE.id,
    cpf: USER_FIXTURE.cpf,
    role: USER_FIXTURE.role,
    name: USER_FIXTURE.name,
    email: USER_FIXTURE.email,
    gender: USER_FIXTURE.gender,
    status: USER_FIXTURE.status,
    createdAt: USER_FIXTURE.createdAt,
    updatedAt: USER_FIXTURE.updatedAt,
    dateOfBirth: USER_FIXTURE.dateOfBirth,
  };

  const findOneResponse = {
    id: USER_FIXTURE.id,
    cpf: USER_FIXTURE.cpf,
    role: USER_FIXTURE.role,
    gender: undefined,
    name: USER_FIXTURE.name,
    email: USER_FIXTURE.email,
    status: USER_FIXTURE.status,
    createdAt: USER_FIXTURE.createdAt,
    updatedAt: USER_FIXTURE.updatedAt,
    deletedAt: new Date('2024-01-01'),
    dateOfBirth: undefined,
  };

  const findALLResponse = [findOneResponse];

  const promoteResponse = {
    message: 'User promoted to administrator successfully',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [AuthController],
      providers: [{
        provide: AuthService,
        useValue: {
          signUp: jest.fn(),
          signIn: jest.fn(),
          removeUser: jest.fn().mockResolvedValueOnce(removeResponse),
          updateUser: jest.fn().mockResolvedValueOnce(updateResponse),
          promoteUser: jest.fn().mockResolvedValueOnce(promoteResponse),
          findOneUser: jest.fn().mockResolvedValueOnce(findOneResponse),
          findAllUsers: jest.fn().mockResolvedValueOnce(findALLResponse),
        }
      }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should be post signUp success', async () => {
    jest.spyOn(service, 'signUp').mockResolvedValueOnce({ message: 'Registration Completed Successfully!' });
    expect(
        await controller.signUp({
          cpf: USER_FIXTURE.cpf,
          name: USER_FIXTURE.name,
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
          dateOfBirth: USER_FIXTURE.dateOfBirth,
          passwordConfirmation: USER_FIXTURE.password,
        }),
    ).toEqual({ message: 'Registration Completed Successfully!' });
  });

  it('should be post signUp error empty body', async () => {
    expect(
        await controller.signUp({
          cpf: '',
          name: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          dateOfBirth: undefined,
        }),
    ).toEqual(undefined);
  });

  it('should be post signIn success', async () => {
    const response = { token: 'token' };
    jest.spyOn(service, 'signIn').mockResolvedValueOnce(response);
    expect(
        await controller.signIn({
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
        }),
    ).toEqual(response);
  });

  it('should be post signIn error', async () => {
    jest.spyOn(service, 'signIn').mockResolvedValueOnce(null);
    expect(
        await controller.signIn({
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
        }),
    ).toBeNull();
  });

  it('should be get findAll success', async () => {
    expect(await controller.findAll({})).toEqual(findALLResponse);
  });

  it('should be get findOne success', async () => {
    expect(
        await controller.findOne({ ...USER_FIXTURE, role: ERole.ADMIN }, USER_FIXTURE.id),
    ).toEqual(findOneResponse);
  });

  it('should be patch update success', async () => {
    expect(
        await controller.update({ ...USER_FIXTURE, role: ERole.ADMIN }, USER_FIXTURE.id, {
          cpf: USER_FIXTURE.cpf,
          name: USER_FIXTURE.name,
          role: ERole.ADMIN,
          email: USER_FIXTURE.email,
          gender: USER_FIXTURE.gender,
          dateOfBirth: USER_FIXTURE.dateOfBirth,
        }),
    ).toEqual(updateResponse);
  });

  it('should be delete remove success', async () => {
    expect(
        await controller.remove({ ...USER_FIXTURE, role: ERole.ADMIN }, USER_FIXTURE.id),
    ).toEqual(removeResponse);
  });

  it('should be patch promote success', async () => {
    expect(
        await controller.promote({ ...USER_FIXTURE, role: ERole.ADMIN }, USER_FIXTURE.id),
    ).toEqual(promoteResponse);
  });
});
