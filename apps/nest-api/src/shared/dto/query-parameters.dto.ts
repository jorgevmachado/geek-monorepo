import { IQueryParameters } from '../service';
import { ERole } from '@geek/business/dist/user';
import { EStatus } from '@geek/business/dist/status';

export class QueryParametersDto implements IQueryParameters {
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