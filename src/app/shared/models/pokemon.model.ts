export interface PokemonList {
  data: Pokemon[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface PokemonDetail{
  data: Pokemon;
}

export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo?: string[];
  evolvesFrom?: string[];
  rules: string[];
  abilities?: [
    {
      name?: string;
      text?: string;
      type?: string;
    }
  ];
  attacks: [
    {
      name: string;
      cost: string[];
      convertedEnergyCost: number;
      damage: string;
      text: string;
    }
  ];
  weaknesses: [
    {
      type: string;
      value: string;
    }
  ];
  resistances?: [
    {
      type?: string;
      value?: string;
    }
  ];
  retreatCost: string[];
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
  cost: string[];
  convertedEnergyCost?: number;
  damage: string;
  text: string;
}
