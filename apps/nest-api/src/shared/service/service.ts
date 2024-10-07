import { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm';
import type { IFilterParams, IIndexParams, IPaginate, IQueryParameters } from './interface';
import { ConflictException } from '@nestjs/common';

export abstract class Service<T extends ObjectLiteral> {
  protected constructor(
    protected readonly repository: Repository<T>,
    protected readonly alias: string,
    protected readonly relations: Array<string>,
  ) {}

  async index(indexParams: IIndexParams): Promise<Array<T> | IPaginate<T>> {
    const query = this.repository.createQueryBuilder(this.alias);

    this.queryOrderBy(query, indexParams.parameters?.asc, indexParams.parameters?.desc);

    if(indexParams.withDeleted) {
      query.withDeleted();
    }

    if (indexParams.withRelations) {
      this.queryRelations(query, this.relations, this.alias);
    }

    if (!indexParams.parameters?.limit || !indexParams.parameters?.page) {
      return await query.getMany();
    }

    return await this.paginate(query, indexParams.parameters, indexParams.filters);
  }

  private queryOrderBy(
    query: SelectQueryBuilder<T>,
    asc?: string,
    desc?: string
  ) {
    if(asc && desc) {
      throw new ConflictException('Cannot use asc and desc at the same time');
    }

    if (asc) {
      query.orderBy(`${this.alias}.${asc}`, 'ASC');
    }

    if (desc) {
      query.orderBy(`${this.alias}.${desc}`, 'DESC');
    }
  }

  private queryRelations(query: SelectQueryBuilder<T>, relations: Array<string>, alias: string) {
    if (relations.length) {
      relations.forEach((relation) => {
        query.leftJoinAndSelect(`${alias}.${relation}`, relation);
      });
    }
  }

  private async paginate(query: SelectQueryBuilder<T>, queryParameters: IQueryParameters, filters: Array<IFilterParams>) {
    const page = queryParameters.page < 1 ? 1 : queryParameters.page;
    const limit = queryParameters.limit > 100 ? 100 : queryParameters.limit;

    this.queryFilters(query, filters, queryParameters);

    const [data, total] = await query.getManyAndCount();

    const currentPage = page === 0 ? 1 : Number(page);
    const skip = this.paginateSkip(currentPage, limit);
    const pages = Math.ceil(total / Number(limit));

    return {
      next: currentPage === pages ? null : currentPage + 1,
      prev: currentPage === 1 ? null : currentPage - 1,
      total,
      pages,
      per_page: limit === 0 ? total : limit,
      current_page: currentPage,
      skip,
      data,
    };
  }

  private queryFilters(query: SelectQueryBuilder<T>, filters: Array<IFilterParams>, queryParameters: IQueryParameters) {
    filters = this.transformFilters(queryParameters, filters);

    if (filters.length) {
      filters.forEach((filter) => {
        query.andWhere(
          `${this.alias}.${filter.param} ${filter.condition} :${filter.param}`,
          {
            [filter.param]: filter.value,
          },
        );
      });
    }
  }

  private transformFilters(queryParameters: IQueryParameters, customFilters: Array<IFilterParams>) {
    const filters: Array<IFilterParams> = [];

    if (!queryParameters) {
      return customFilters;
    }

    if (queryParameters?.role) {
      filters.push({
        param: 'role',
        condition: '=',
        value: queryParameters.role.toUpperCase(),
      });
    }

    if (queryParameters?.name) {
      filters.push({
        param: 'name',
        condition: 'LIKE',
        value: `%${queryParameters.name}%`,
      });
    }

    if (queryParameters?.status) {
      filters.push({
        param: 'status',
        condition: '=',
        value: queryParameters.status.toUpperCase(),
      });
    }

    return filters.concat(
      customFilters.filter((filter) => !filters.includes(filter)),
    );
  }

  private paginateSkip(currentPage: number, perPage: number) {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === 2) {
      return perPage;
    }
    return currentPage * perPage - perPage;
  }
}