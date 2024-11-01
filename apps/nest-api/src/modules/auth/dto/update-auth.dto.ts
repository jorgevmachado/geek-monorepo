import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  MaxDate,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

import { EGender, ERole } from '../users/user.interface';
import { CPF } from '../decorators/cpf.decorator';

export class UpdateAuthDto {
  /**
   * The CPF of the User
   * @example 44217458800
   */
  @IsOptional()
  @CPF()
  cpf?: string;

  /**
   * The role of the User
   * @example USER
   */
  @IsOptional()
  @IsEnum(ERole)
  role?: ERole;

  /**
   * The name of the User
   * @example John Doe
   */
  @IsOptional()
  @MaxLength(200)
  name?: string;

  /**
   * The email of the User
   * @example john.doe@mail.com
   */
  @IsOptional()
  @MaxLength(200)
  @IsEmail()
  email?: string;

  /**
   * the gender of the User
   * @example MALE
   */
  @IsOptional()
  @IsEnum(EGender)
  gender?: EGender;

  /**
   * The date of birth of the User
   * @example 1990-01-01
   */
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MaxDate(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), {
    message: 'You must be over 18 years old',
  })
  dateOfBirth?: Date;
}
