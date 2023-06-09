export interface PokemonList extends Pagination {
  data: Pokemon[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface PokemonDetail {
  data: Pokemon;
}

export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: cardType[];
  evolvesTo?: string[];
  evolvesFrom?: string[];
  rules: string[];
  abilities?: [
    {
      name?: string;
      text?: string;
      type?: cardType;
    }
  ];
  attacks: Attack[];
  weaknesses: [
    {
      type: cardType;
      value: string;
    }
  ];
  resistances?: [
    {
      type?: cardType;
      value?: string;
    }
  ];
  retreatCost: cardType[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited?: string;
      expanded?: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited?: string;
    expanded?: string;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
      reverseHolofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
      };
    };
  };
  cardmarket?: {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice: number;
      lowPrice: number;
      trendPrice: number;
      reverseHoloSell: number;
      reverseHoloLow: number;
      reverseHoloTrend: number;
      lowPriceExPlus: number;
      avg1: number;
      avg7: number;
      avg30: number;
      reverseHoloAvg1: number;
      reverseHoloAvg7: number;
      reverseHoloAvg30: number;
    };
  };
}

export interface Attack {
  name: string;
  cost: cardType[];
  convertedEnergyCost?: number;
  damage: string;
  text: string;
}

export interface searchParams {
  page?: string;
  pageSize: string;
  orderType?: 'name' | 'number';
  name?: string | null;
  query?: string;
}

export type cardType =
  | 'Colorless'
  | 'Darkness'
  | 'Dragon'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Grass'
  | 'Lightning'
  | 'Metal'
  | 'Psychic'
  | 'Water'
  | ''
  | undefined;
