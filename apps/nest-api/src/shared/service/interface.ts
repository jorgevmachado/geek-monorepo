import { ERole, EStatus } from '@geek/business';

export interface IFilterParams {
  value: string;
  param: string;
  condition: string;
}

export interface IQueryParameters {
  all?: boolean;
  asc?: string;
  desc?: string;
  page?: number;
  name?: string;
  role?: ERole;
  limit?: number;
  status?: EStatus;
  withDeleted?: boolean;
}

export interface IIndexParams {
  filters?: Array<IFilterParams>;
  parameters?: IQueryParameters;
  withDeleted?: boolean;
  withRelations?: boolean;
}

export interface IPaginate<T> {
  next: number | null;
  prev: number | null;
  total: number;
  pages: number;
  per_page: number;
  current_page: number;
  skip: number;
  data: Array<T>;
}

export type TBy = 'id' | 'cpf' | 'name' | 'email' | 'accountId';

export interface IFindByParams {
  by: TBy;
  value: string;
  withThrow?: boolean;
  withDeleted?: boolean;
}
