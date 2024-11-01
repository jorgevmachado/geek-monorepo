import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { EStatus } from '../../../interfaces/status.interface';

import { ERole } from './user.interface';
import { USER_FIXTURE } from './users.fixture';
import { Users } from './users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<Users>;

  const createQueryBuilder = (
      type: 'getOne' | 'getMany' | 'getManyAndCount',
      resolve: any,
  ) => {
    jest.spyOn(repository, 'createQueryBuilder').mockReturnValueOnce({
      where: jest.fn(),
      orderBy: jest.fn(),
      andWhere: jest.fn(),
      withDeleted: jest.fn(),
      leftJoinAndSelect: jest.fn(),
      [type]: jest.fn().mockReturnValueOnce(resolve),
    } as any);
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(Users), useClass: Repository },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<Users>>(getRepositoryToken(Users));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should create a user', async () => {
    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    jest
        .spyOn(repository, 'save')
        .mockResolvedValueOnce(USER_FIXTURE);

    expect(await service.create({
      cpf: USER_FIXTURE.cpf,
      name: USER_FIXTURE.name,
      email: USER_FIXTURE.email,
      gender: USER_FIXTURE.gender,
      password: USER_FIXTURE.password,
      dateOfBirth: USER_FIXTURE.dateOfBirth,
      passwordConfirmation: USER_FIXTURE.password,
    })).toEqual({
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
    });
  });

  it('should throw error when create user with a deleted user has already been created with cpf', async () => {
    // find user by cpf
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by email
    createQueryBuilder('getOne', null);

    await expect(
        service.create({
          cpf: USER_FIXTURE.cpf,
          name: USER_FIXTURE.name,
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
          dateOfBirth: USER_FIXTURE.dateOfBirth,
          passwordConfirmation: USER_FIXTURE.password,
        }),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when create user with a deleted user has already been created with email', async () => {
    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', USER_FIXTURE);

    await expect(
        service.create({
          cpf: USER_FIXTURE.cpf,
          name: USER_FIXTURE.name,
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
          dateOfBirth: USER_FIXTURE.dateOfBirth,
          passwordConfirmation: USER_FIXTURE.password,
        }),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when create user', async () => {
    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.create({
      cpf: USER_FIXTURE.cpf,
      name: USER_FIXTURE.name,
      email: USER_FIXTURE.email,
      password: USER_FIXTURE.password,
      dateOfBirth: USER_FIXTURE.dateOfBirth,
      passwordConfirmation: USER_FIXTURE.password,
    });

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should find one user by id', async () => {
    // find user by id
    createQueryBuilder('getOne', {
      ...USER_FIXTURE,
      deletedAt: new Date('2024-01-01'),
    });

    expect(await service.findOne(USER_FIXTURE.id)).toEqual({
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

  it('should find one user by id with must clean user false', async () => {
    // find user by id
    createQueryBuilder('getOne', USER_FIXTURE);

    expect(
        await service.findOne(USER_FIXTURE.id, false, false),
    ).toEqual(USER_FIXTURE);
  });

  it('should check credentials', async () => {
    const user: Users = {
      ...USER_FIXTURE,
      status: EStatus.ACTIVE,
      salt: '$2b$10$o3nYsQECy/ZKwFQSssiyMO',
      password: '$2b$10$o3nYsQECy/ZKwFQSssiyMOzN5dKjhcP9iEi5DcCeLLuYcpyKJEUJ2',
    };
    // find user by email
    createQueryBuilder('getOne', user);

    expect(
        await service.checkCredentials({
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
        }),
    ).toEqual(user);
  });

  it('should check credentials with status incomplete', async () => {
    // find user by email
    createQueryBuilder('getOne', {
      ...USER_FIXTURE,
      status: EStatus.INCOMPLETE,
      salt: '$2b$10$o3nYsQECy/ZKwFQSssiyMO',
    });

    expect(
        await service.checkCredentials({
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
        }),
    ).toEqual(null);
  });

  it('should check credentials with credentials invalid', async () => {
    // find user by email
    createQueryBuilder('getOne', {
      ...USER_FIXTURE,
      status: EStatus.INCOMPLETE,
      salt: '$2b$10$o3nYsQECy/ZKwFQSssiyMO',
    });

    expect(
        await service.checkCredentials({
          email: USER_FIXTURE.email,
          password: USER_FIXTURE.password,
        }),
    ).toBeNull();
  });

  it('should promote user', async () => {
    // find user by id
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...USER_FIXTURE,
      role: ERole.ADMIN,
    });

    expect(await service.promote(USER_FIXTURE.id)).toEqual({
      message: 'User promoted to administrator successfully',
    });
  });

  it('should throw error when promote user', async () => {
    // find user by id
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    await expect(service.promote(USER_FIXTURE.id)).rejects.toThrow(
        InternalServerErrorException,
    );
  });

  it('should find all users with filters', async () => {
    // find all users by filter
    createQueryBuilder('getManyAndCount', [[USER_FIXTURE], 1]);

    expect(
        await service.findAll({
          cpf: USER_FIXTURE.cpf,
          email: USER_FIXTURE.email,
          asc: 'name',
          page: 1,
          name: USER_FIXTURE.name,
          role: ERole.USER,
          limit: 10,
          status: EStatus.INCOMPLETE,
          withDeleted: true,
        }),
    ).toEqual({
      next: null,
      prev: null,
      total: 1,
      pages: 1,
      per_page: 10,
      current_page: 1,
      skip: 0,
      data: [
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
          dateOfBirth: USER_FIXTURE.dateOfBirth,
        },
      ],
    });
  });

  it('should find all users without filters', async () => {
    // find all users
    createQueryBuilder('getMany', [USER_FIXTURE]);

    expect(await service.findAll()).toEqual([
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
        dateOfBirth: USER_FIXTURE.dateOfBirth,
      },
    ]);
  });

  it('should update a user', async () => {
    // find user by id
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    jest.spyOn(repository, 'save').mockResolvedValueOnce(USER_FIXTURE);

    const result = await service.update(
        USER_FIXTURE.id,
        {
          cpf: USER_FIXTURE.cpf,
          name: USER_FIXTURE.name,
          email: USER_FIXTURE.email,
          gender: USER_FIXTURE.gender,
          dateOfBirth: USER_FIXTURE.dateOfBirth,
        },
    );

    expect(result).toEqual({
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
    });
  });

  it('should throw error when update user', async () => {
    // find user by id
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.update(USER_FIXTURE.id, {
      cpf: USER_FIXTURE.cpf,
    });

    await expect(result).rejects.toThrow(InternalServerErrorException);
  });

  it('should throw error when update user with cpf already exists', async () => {
    // find user by id
    createQueryBuilder('getOne', {
      ...USER_FIXTURE,
      id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
    });

    // find user by cpf
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by email
    createQueryBuilder('getOne', null);

    jest.spyOn(repository, 'save').mockRejectedValueOnce(new Error());

    const result = service.update(USER_FIXTURE.id, {
      cpf: USER_FIXTURE.cpf,
    });

    await expect(result).rejects.toThrow(BadRequestException);
  });

  it('should throw error when update user with email already exists', async () => {
    // find user by id
    createQueryBuilder('getOne', {
      ...USER_FIXTURE,
      id: 'f3b02d02-b3af-492e-a4e2-5d8a16c1af3f',
    });

    // find user by cpf
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by email
    createQueryBuilder('getOne', USER_FIXTURE);

    await expect(
        service.update(USER_FIXTURE.id, {
          email: USER_FIXTURE.email,
        }),
    ).rejects.toThrow(BadRequestException);
  });

  it('should throw error when update user role with status incomplete', async () => {
    // find user by id
    createQueryBuilder('getOne', USER_FIXTURE);

    // find user by cpf
    createQueryBuilder('getOne', null);

    // find user by email
    createQueryBuilder('getOne', null);

    await expect(
        service.update(USER_FIXTURE.id, {
          role: ERole.ADMIN,
        }),
    ).rejects.toThrow(InternalServerErrorException);
  });

  it('should remove user by id', async () => {
    createQueryBuilder('getOne', USER_FIXTURE);

    jest.spyOn(repository, 'save').mockResolvedValueOnce({
      ...USER_FIXTURE,
      status: EStatus.INACTIVE,
      deletedAt: new Date(),
    });

    expect(await service.remove(USER_FIXTURE.id)).toEqual({
      message: `User with id ${USER_FIXTURE.id} successfully removed`,
    });
  });
});
