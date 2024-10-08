import {
  IsDate,
  IsEmail, IsEnum,
  IsNotEmpty, IsOptional,
  MaxDate,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { CPF } from '../decorators/cpf.decorator';
import { Match } from '../../../shared/decorators/match.decorator';
import { EGender } from '@geek/business/dist/user';

export class CreateAuthDto {
  /**
   * The CPF of the User
   * @example 44217458800
   */
  @IsNotEmpty()
  @CPF()
  cpf: string;

  /**
   * The NAME of the User
   * @example 44217458800
   */
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  /**
   * The email of the User
   * @example john.doe@mail.com
   */
  @IsNotEmpty()
  @MaxLength(200)
  @IsEmail()
  email: string;

  /**
   * the gender of the User
   * @example MALE
   */
  @IsOptional()
  @IsEnum(EGender)
  gender?: EGender;

  /**
   * The password of the User
   * @example 123456
   */
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  /**
   * The password confirmation of the User
   * @example 123456
   */
  @IsNotEmpty()
  @MinLength(6)
  @Match('password')
  passwordConfirmation: string;

  /**
   * The date of birth of the User
   * @example 1990-01-01
   */
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MaxDate(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), {
    message: 'You must be over 18 years old',
  })
  dateOfBirth: Date;
}
