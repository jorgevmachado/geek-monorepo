import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { EGender, ERole, type IUser } from './user.interface';
import { EStatus } from '../../../interfaces/status.interface';

@Entity({ name: 'users' })
export class Users implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true, length: 11 })
  cpf: string;

  @Column({ nullable: false, length: 20 })
  role: ERole;

  @Column({ nullable: false })
  salt?: string;

  @Column({ nullable: false, length: 200 })
  name: string;

  @Column({ nullable: false, unique: true, length: 200 })
  email: string;

  @Column({ nullable: true })
  gender?: EGender;

  @Column({ nullable: false, default: EStatus.INCOMPLETE })
  status: EStatus;

  @Column({ nullable: true })
  picture?: string;

  @Column({ nullable: false })
  password?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ nullable: false })
  dateOfBirth?: Date;

  @Column({ nullable: true, length: 64 })
  recoverToken?: string;

  @Column({ nullable: true, length: 64 })
  confirmationToken?: string;
}