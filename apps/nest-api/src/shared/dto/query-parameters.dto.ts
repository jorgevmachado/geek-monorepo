import { ERole, EStatus } from '@geek/business';

import { type IQueryParameters } from '../service';

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