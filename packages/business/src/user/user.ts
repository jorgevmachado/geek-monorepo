import { EStatus } from "@/status";

export enum ERole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum EGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface IUser {
  id: string;
  cpf: string;
  role: ERole;
  salt: string;
  name: string;
  email: string;
  gender?: EGender;
  status: EStatus;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  dateOfBirth?: Date;
  recoverToken?: string;
  confirmationToken?: string;
}
