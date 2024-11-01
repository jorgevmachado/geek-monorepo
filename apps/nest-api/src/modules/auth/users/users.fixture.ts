import { EGender, ERole } from './user.interface';
import { EStatus } from '../../../interfaces/status.interface';
import { Users } from './users.entity';

export const USER_FIXTURE: Users = {
    id: 'eaca4c08-e62d-495a-ae1c-918199da8d52',
    cpf: '49892120450',
    role: ERole.USER,
    salt: 'xpto-salt',
    name: 'Clark Kent',
    email: 'clark.kent@dailyplanet.com',
    gender: EGender.MALE,
    status: EStatus.ACTIVE,
    picture: undefined,
    password: '123456',
    createdAt: new Date('2024-09-09'),
    updatedAt: new Date('2024-09-09'),
    deletedAt: undefined,
    dateOfBirth: new Date('1990-01-01'),
    recoverToken: 'xpto-recoverToken',
    confirmationToken: 'xpto-confirmationToken',
};