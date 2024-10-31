import { BadRequestException, ForbiddenException, UnprocessableEntityException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';


import { ERole, EStatus } from '@geek/business';

import { AuthService } from './auth.service';
import { USER_FIXTURE } from './users/users.fixture';
import { UsersService } from './users/users.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          AuthService,
          {
            provide: UsersService,
            useValue: {
                create: jest.fn(),
                update: jest.fn(),
                remove: jest.fn(),
                promote: jest.fn(),
                findOne: jest.fn(),
                findAll: jest.fn(),
                checkCredentials: jest.fn(),
            }
          },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValueOnce('token'),
            signAsync: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
  });

    it('should signUp user.', async () => {
        expect(
            await service.signUp({
                cpf: USER_FIXTURE.cpf,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                gender: USER_FIXTURE.gender,
                password: USER_FIXTURE.password,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
                passwordConfirmation: USER_FIXTURE.password,
            }),
        ).toEqual({
            message: 'Registration Completed Successfully!',
        });
    });

    it('should signIn user.', async () => {
        jest
            .spyOn(userService, 'checkCredentials')
            .mockResolvedValueOnce(USER_FIXTURE);

        expect(
            await service.signIn({
                email: USER_FIXTURE.email,
                password: USER_FIXTURE.password,
            }),
        ).toEqual({ token: 'token' });
    });

    it('should throw error when signIn.', async () => {
        jest.spyOn(userService, 'checkCredentials').mockResolvedValueOnce(null);

        await expect(
            service.signIn({
                email: USER_FIXTURE.email,
                password: USER_FIXTURE.password,
            }),
        ).rejects.toThrow(UnprocessableEntityException);
    });

    it('should find one user ', async () => {
        jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
            id: USER_FIXTURE.id,
            cpf: USER_FIXTURE.cpf,
            role: USER_FIXTURE.role,
            name: USER_FIXTURE.name,
            email: USER_FIXTURE.email,
            gender: USER_FIXTURE.gender,
            status: USER_FIXTURE.status,
            createdAt: USER_FIXTURE.createdAt,
            updatedAt: USER_FIXTURE.updatedAt,
            deletedAt: new Date('2024-01-01'),
            dateOfBirth: USER_FIXTURE.dateOfBirth,
        });

        expect(
            await service.findOneUser(USER_FIXTURE.id, { ...USER_FIXTURE, role: ERole.ADMIN, }),
        ).toEqual({
            id: USER_FIXTURE.id,
            cpf: USER_FIXTURE.cpf,
            role: USER_FIXTURE.role,
            name: USER_FIXTURE.name,
            email: USER_FIXTURE.email,
            gender: USER_FIXTURE.gender,
            status: USER_FIXTURE.status,
            createdAt: USER_FIXTURE.createdAt,
            updatedAt: USER_FIXTURE.updatedAt,
            deletedAt: new Date('2024-01-01'),
            dateOfBirth: USER_FIXTURE.dateOfBirth,
        });
    });

    it('should throw error when find one user without permission', async () => {
        jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
            id: USER_FIXTURE.id,
            cpf: USER_FIXTURE.cpf,
            role: USER_FIXTURE.role,
            name: USER_FIXTURE.name,
            email: USER_FIXTURE.email,
            gender: USER_FIXTURE.gender,
            status: USER_FIXTURE.status,
            createdAt: USER_FIXTURE.createdAt,
            updatedAt: USER_FIXTURE.updatedAt,
            deletedAt: new Date('2024-01-01'),
            dateOfBirth: USER_FIXTURE.dateOfBirth,
        });

        await expect(
            service.findOneUser(USER_FIXTURE.id, {
                ...USER_FIXTURE,
                id: 'xpto-id',
            }),
        ).rejects.toThrow(UnprocessableEntityException);
    });

    xit('should remove one user', async () => {
        const expected = await service.removeUser(USER_FIXTURE.id, {
            ...USER_FIXTURE,
            id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
        });
        
        const removeResponse = {
            message:
                `User with id ${USER_FIXTURE.id} successfully removed`,
        };
        jest
            .spyOn(userService, 'remove')
            .mockResolvedValueOnce(removeResponse);

        expect(expected).toEqual(removeResponse);
    });

    it('should throw error when remove one user', async () => {
        await expect(
            service.removeUser(USER_FIXTURE.id, { ...USER_FIXTURE, role: ERole.ADMIN }),
        ).rejects.toThrow(BadRequestException);
    });

    it('should promote user only one in database', async () => {
        jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
            {
                id: USER_FIXTURE.id,
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                gender: USER_FIXTURE.gender,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
        ]);

        jest.spyOn(userService, 'promote').mockResolvedValueOnce({
            message: 'User promoted to administrator successfully',
        });

        expect(
            await service.promoteUser(USER_FIXTURE.id, { ...USER_FIXTURE, role: ERole.ADMIN }),
        ).toEqual({
            message: 'User promoted to administrator successfully',
        });
    });

    it('should promote user with then one in database', async () => {
        jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
            {
                id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
            {
                id: USER_FIXTURE.id,
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
        ]);

        jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
            id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
            cpf: USER_FIXTURE.cpf,
            role: USER_FIXTURE.role,
            gender: USER_FIXTURE.gender,
            name: USER_FIXTURE.name,
            email: USER_FIXTURE.email,
            status: USER_FIXTURE.status,
            createdAt: USER_FIXTURE.createdAt,
            updatedAt: USER_FIXTURE.updatedAt,
            deletedAt: undefined,
            dateOfBirth: USER_FIXTURE.dateOfBirth,
        });

        jest.spyOn(userService, 'promote').mockResolvedValueOnce({
            message: 'User promoted to administrator successfully',
        });

        expect(
            await service.promoteUser(USER_FIXTURE.id, { ...USER_FIXTURE, role: ERole.ADMIN }),
        ).toEqual({
            message: 'User promoted to administrator successfully',
        });
    });

    it('should throw error when promote user with auth user role equal user', async () => {
        jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
            {
                id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
            {
                id: USER_FIXTURE.id,
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
        ]);

        await expect(
            service.promoteUser('f3b02d02-b3af-492e-a4e2-5d8a16c1af3f', { ...USER_FIXTURE, id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f' }),
        ).rejects.toThrow(ForbiddenException);
    });

    it('should throw error when try to promote user with role admin', async () => {
        jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
            {
                id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
                cpf: USER_FIXTURE.cpf,
                role: ERole.ADMIN,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
            {
                id: USER_FIXTURE.id,
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
        ]);

        jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
            id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
            cpf: USER_FIXTURE.cpf,
            role: ERole.ADMIN,
            gender: USER_FIXTURE.gender,
            name: USER_FIXTURE.name,
            email: USER_FIXTURE.email,
            status: USER_FIXTURE.status,
            createdAt: USER_FIXTURE.createdAt,
            updatedAt: USER_FIXTURE.updatedAt,
            deletedAt: undefined,
            dateOfBirth: USER_FIXTURE.dateOfBirth,
        },);

        await expect(
            service.promoteUser('f3b02d02-b3af-492e-a4e2-5d8a16c1af3f', { ...USER_FIXTURE, role: ERole.ADMIN }),
        ).rejects.toThrow(BadRequestException);
    });

    it('should throw error when try to promote user with status inactive', async () => {
        jest.spyOn(userService, 'findAll').mockResolvedValueOnce([
            {
                id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: EStatus.INACTIVE,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
            {
                id: USER_FIXTURE.id,
                cpf: USER_FIXTURE.cpf,
                role: USER_FIXTURE.role,
                gender: USER_FIXTURE.gender,
                name: USER_FIXTURE.name,
                email: USER_FIXTURE.email,
                status: USER_FIXTURE.status,
                createdAt: USER_FIXTURE.createdAt,
                updatedAt: USER_FIXTURE.updatedAt,
                deletedAt: undefined,
                dateOfBirth: USER_FIXTURE.dateOfBirth,
            },
        ]);

        jest.spyOn(userService, 'findOne').mockResolvedValueOnce({
            id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
            cpf: USER_FIXTURE.cpf,
            role: USER_FIXTURE.role,
            gender: USER_FIXTURE.gender,
            name: USER_FIXTURE.name,
            email: USER_FIXTURE.email,
            status: EStatus.INACTIVE,
            createdAt: USER_FIXTURE.createdAt,
            updatedAt: USER_FIXTURE.updatedAt,
            deletedAt: undefined,
            dateOfBirth: USER_FIXTURE.dateOfBirth,
        },);

        await expect(
            service.promoteUser('f3b02d02-b3af-492e-a4e2-5d8a16c1af3f', { ...USER_FIXTURE, role: ERole.ADMIN }),
        ).rejects.toThrow(BadRequestException);
    });
});
