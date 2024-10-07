import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CredentialsAuthDto {
  /**
   * The email of the User
   * @example john.doe@mail.com
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * The password of the User
   * @example 123456
   */
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
