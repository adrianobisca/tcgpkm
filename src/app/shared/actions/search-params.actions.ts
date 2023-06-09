import { searchParams } from '@shared/models/pokemon.model';

export class setSearchParams {
  static readonly type = '[SEARCH] Set search params';
  constructor(public params: searchParams) {}
}

export class setPaginator {
  static readonly type = '[SEARCH] Set paginator';
  constructor(public params: searchParams) {}
}
