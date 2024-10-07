import { QueryParametersDto } from '../../../shared/dto/query-parameters.dto';

export class FilterAuthDto extends QueryParametersDto {
  cpf?: string;
  email?: string;
}
