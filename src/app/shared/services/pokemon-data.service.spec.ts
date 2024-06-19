import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PokemonDataService } from './pokemon-data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PokemonDataService', () => {
  let service: PokemonDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [PokemonDataService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(PokemonDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get given pokemon', () => {
    const pokemonId = 'xy4-117';
    const mockPokemon = {
      id: 'xy4-117',
      name: 'AZ',
      supertype: 'Trainer',
      subtypes: ['Supporter'],
      rules: [
        'Put 1 Pokémon into your hand. (Discard all cards attached to that Pokémon.)',
        'You may play only 1 Supporter card during your turn (before your attack).',
      ],
      set: {
        id: 'xy4',
        name: 'Phantom Forces',
        series: 'XY',
        printedTotal: 119,
        total: 124,
        legalities: {
          unlimited: 'Legal',
          expanded: 'Legal',
        },
        ptcgoCode: 'PHF',
        releaseDate: '2014/11/05',
        updatedAt: '2020/08/14 09:35:00',
        images: {
          symbol: 'https://images.pokemontcg.io/xy4/symbol.png',
          logo: 'https://images.pokemontcg.io/xy4/logo.png',
        },
      },
      number: '117',
      artist: 'Naoki Saito',
      rarity: 'Rare Ultra',
      legalities: {
        unlimited: 'Legal',
        expanded: 'Legal',
      },
      images: {
        small: 'https://images.pokemontcg.io/xy4/117.png',
        large: 'https://images.pokemontcg.io/xy4/117_hires.png',
      },
      tcgplayer: {
        url: 'https://prices.pokemontcg.io/tcgplayer/xy4-117',
        updatedAt: '2022/05/20',
        prices: {
          holofoil: {
            low: 4,
            mid: 9.65,
            high: 50,
            market: 9.65,
            directLow: 9.65,
          },
        },
      },
      cardmarket: {
        url: 'https://prices.pokemontcg.io/cardmarket/xy4-117',
        updatedAt: '2022/05/20',
        prices: {
          averageSellPrice: 8.99,
          lowPrice: 4.5,
          trendPrice: 9.04,
          reverseHoloTrend: 8.14,
          lowPriceExPlus: 7.5,
          avg1: 6.99,
          avg7: 9.89,
          avg30: 9.43,
          reverseHoloAvg1: 7.75,
          reverseHoloAvg7: 6.3,
          reverseHoloAvg30: 7.7,
        },
      },
    };

    service.getPokemon(pokemonId);
    service.pokemonDetail$.subscribe((pokemonDetail) => {
      console.log(pokemonDetail)
      expect(pokemonDetail.id).toEqual('xy4-117');
      expect(pokemonDetail.name).toEqual('AZ');
    });

    const req = httpTestingController.expectOne(
      'https://api.pokemontcg.io/v2/cards/xy4-117'
    );

    req.flush(mockPokemon);
  });

  it('should get pokemon list', () => {
    const mockPokemonList = {
      "data": [
          {
              "id": "xy4-117",
              "name": "AZ",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Put 1 Pokémon into your hand. (Discard all cards attached to that Pokémon.)",
                  "You may play only 1 Supporter card during your turn (before your attack)."
              ],
              "set": {
                  "id": "xy4",
                  "name": "Phantom Forces",
                  "series": "XY",
                  "printedTotal": 119,
                  "total": 124,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PHF",
                  "releaseDate": "2014/11/05",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xy4/symbol.png",
                      "logo": "https://images.pokemontcg.io/xy4/logo.png"
                  }
              },
              "number": "117",
              "artist": "Naoki Saito",
              "rarity": "Rare Ultra",
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xy4/117.png",
                  "large": "https://images.pokemontcg.io/xy4/117_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xy4-117",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 4,
                          "mid": 9.65,
                          "high": 50,
                          "market": 9.65,
                          "directLow": 9.65
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xy4-117",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 8.99,
                      "lowPrice": 4.5,
                      "trendPrice": 9.04,
                      "reverseHoloTrend": 8.14,
                      "lowPriceExPlus": 7.5,
                      "avg1": 6.99,
                      "avg7": 9.89,
                      "avg30": 9.43,
                      "reverseHoloAvg1": 7.75,
                      "reverseHoloAvg7": 6.3,
                      "reverseHoloAvg30": 7.7
                  }
              }
          },
          {
              "id": "xy4-91",
              "name": "AZ",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Put 1 Pokémon into your hand. (Discard all cards attached to that Pokémon.)",
                  "You may play only 1 Supporter card during your turn (before your attack)."
              ],
              "set": {
                  "id": "xy4",
                  "name": "Phantom Forces",
                  "series": "XY",
                  "printedTotal": 119,
                  "total": 124,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PHF",
                  "releaseDate": "2014/11/05",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xy4/symbol.png",
                      "logo": "https://images.pokemontcg.io/xy4/logo.png"
                  }
              },
              "number": "91",
              "artist": "Ken Sugimori",
              "rarity": "Uncommon",
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xy4/91.png",
                  "large": "https://images.pokemontcg.io/xy4/91_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xy4-91",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.25,
                          "high": 1.05,
                          "market": 0.23,
                          "directLow": 0.2
                      },
                      "reverseHolofoil": {
                          "low": 0.26,
                          "mid": 0.5,
                          "high": 2.8,
                          "market": 0.46,
                          "directLow": 0.35
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xy4-91",
                  "updatedAt": "2022/05/20"
              }
          },
          {
              "id": "pl2-88",
              "name": "Aaron's Collection",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card.",
                  "Search your discard pile for up to 2 in any combination of Pokémon SP and basic Energy cards, show them to your opponent, and put them into your hand."
              ],
              "set": {
                  "id": "pl2",
                  "name": "Rising Rivals",
                  "series": "Platinum",
                  "printedTotal": 111,
                  "total": 120,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "RR",
                  "releaseDate": "2009/05/16",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/pl2/symbol.png",
                      "logo": "https://images.pokemontcg.io/pl2/logo.png"
                  }
              },
              "number": "88",
              "artist": "Ken Sugimori",
              "rarity": "Uncommon",
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/pl2/88.png",
                  "large": "https://images.pokemontcg.io/pl2/88_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/pl2-88",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.16,
                          "mid": 0.43,
                          "high": 1.7,
                          "market": 0.48,
                          "directLow": 0.16
                      },
                      "reverseHolofoil": {
                          "low": 3.03,
                          "mid": 3.38,
                          "high": 4.23,
                          "market": 2.58,
                          "directLow": 2.11
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/pl2-88",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.26,
                      "lowPrice": 0.02,
                      "trendPrice": 0.29,
                      "reverseHoloSell": 1,
                      "reverseHoloLow": 0.3,
                      "reverseHoloTrend": 0.74,
                      "lowPriceExPlus": 0.04,
                      "avg1": 0.2,
                      "avg7": 0.26,
                      "avg30": 0.19,
                      "reverseHoloAvg1": 1,
                      "reverseHoloAvg7": 0.38,
                      "reverseHoloAvg30": 0.69
                  }
              }
          },
          {
              "id": "dp7-12",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "level": "42",
              "hp": "100",
              "types": [
                  "Water"
              ],
              "evolvesFrom": "Snover",
              "abilities": [
                  {
                      "name": "Snow Veil",
                      "text": "As long as Abomasnow is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 20 (after applying Weakness and Resistance).",
                      "type": "Poké-Body"
                  }
              ],
              "attacks": [
                  {
                      "name": "Snow Play",
                      "cost": [
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "20",
                      "text": "Does 20 damage to each of your opponent's Benched Pokémon, excluding Grass Pokémon and Water Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
                  },
                  {
                      "name": "Below Zero",
                      "cost": [
                          "Water",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "60",
                      "text": "If Abomasnow evolved from Snover during this turn, the Defending Pokémon is now Paralyzed."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "+30"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 3,
              "set": {
                  "id": "dp7",
                  "name": "Stormfront",
                  "series": "Diamond & Pearl",
                  "printedTotal": 100,
                  "total": 106,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "SF",
                  "releaseDate": "2008/11/01",
                  "updatedAt": "2020/05/01 16:06:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/dp7/symbol.png",
                      "logo": "https://images.pokemontcg.io/dp7/logo.png"
                  }
              },
              "number": "12",
              "artist": "Mitsuhiro Arita",
              "rarity": "Rare",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/dp7/12.png",
                  "large": "https://images.pokemontcg.io/dp7/12_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/dp7-12",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.4,
                          "mid": 0.68,
                          "high": 2.49,
                          "market": 0.81,
                          "directLow": 0.4
                      },
                      "reverseHolofoil": {
                          "low": 0.49,
                          "mid": 1.57,
                          "high": 4.99,
                          "market": 2.74,
                          "directLow": 1.16
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/dp7-12",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.47,
                      "lowPrice": 0.02,
                      "trendPrice": 0.57,
                      "reverseHoloSell": 0.89,
                      "reverseHoloLow": 0.29,
                      "reverseHoloTrend": 0.98,
                      "lowPriceExPlus": 0.16,
                      "avg1": 0.21,
                      "avg7": 0.52,
                      "avg30": 0.45,
                      "reverseHoloAvg1": 0.89,
                      "reverseHoloAvg7": 0.7,
                      "reverseHoloAvg30": 0.76
                  }
              }
          },
          {
              "id": "sm5-38",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "130",
              "types": [
                  "Water"
              ],
              "evolvesFrom": "Snover",
              "abilities": [
                  {
                      "name": "Blessings of the Frost",
                      "text": "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon.",
                      "type": "Ability"
                  }
              ],
              "attacks": [
                  {
                      "name": "Hypno Hammer",
                      "cost": [
                          "Water",
                          "Colorless",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 4,
                      "damage": "80",
                      "text": "Your opponent's Active Pokémon is now Asleep."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Metal",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 3,
              "set": {
                  "id": "sm5",
                  "name": "Ultra Prism",
                  "series": "Sun & Moon",
                  "printedTotal": 156,
                  "total": 178,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "UPR",
                  "releaseDate": "2018/02/02",
                  "updatedAt": "2019/02/19 23:25:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm5/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm5/logo.png"
                  }
              },
              "number": "38",
              "artist": "Masakazu Fukuda",
              "rarity": "Rare",
              "flavorText": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm5/38.png",
                  "large": "https://images.pokemontcg.io/sm5/38_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm5-38",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.11,
                          "mid": 0.25,
                          "high": 4.95,
                          "market": 0.21,
                          "directLow": 0.25
                      },
                      "reverseHolofoil": {
                          "low": 0.2,
                          "mid": 0.43,
                          "high": 19.95,
                          "market": 0.3,
                          "directLow": 0.26
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm5-38",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.16,
                      "lowPrice": 0.02,
                      "trendPrice": 0.23,
                      "reverseHoloSell": 0.53,
                      "reverseHoloLow": 0.15,
                      "reverseHoloTrend": 0.32,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.1,
                      "avg7": 0.18,
                      "avg30": 0.18,
                      "reverseHoloAvg1": 0.55,
                      "reverseHoloAvg7": 0.41,
                      "reverseHoloAvg30": 0.46
                  }
              }
          },
          {
              "id": "swsh6-10",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1",
                  "Single Strike"
              ],
              "hp": "140",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Snover",
              "abilities": [
                  {
                      "name": "Toughness Boost",
                      "text": "Your Single Strike Pokémon in play, except any Abomasnow, get +50 HP. You can't apply more than 1 Toughness Boost Ability at a time.",
                      "type": "Ability"
                  }
              ],
              "attacks": [
                  {
                      "name": "Mega Punch",
                      "cost": [
                          "Grass",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "90",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 3,
              "set": {
                  "id": "swsh6",
                  "name": "Chilling Reign",
                  "series": "Sword & Shield",
                  "printedTotal": 198,
                  "total": 233,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "CRE",
                  "releaseDate": "2021/06/18",
                  "updatedAt": "2021/06/18 12:12:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh6/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh6/logo.png"
                  }
              },
              "number": "10",
              "artist": "Akira Komayama",
              "rarity": "Rare",
              "flavorText": "This Pokémon is known to bring blizzards. A shake of its massive body is enough to cause whiteout conditions.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "E",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh6/10.png",
                  "large": "https://images.pokemontcg.io/swsh6/10_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh6-10",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "reverseHolofoil": {
                          "low": 0.1,
                          "mid": 0.29,
                          "high": 5,
                          "market": 0.25
                      },
                      "normal": {
                          "low": 0.08,
                          "mid": 0.2,
                          "high": 3,
                          "market": 0.12,
                          "directLow": 0.09
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh6-10",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.11,
                      "lowPrice": 0.02,
                      "trendPrice": 0.12,
                      "reverseHoloSell": 0.37,
                      "reverseHoloLow": 0.03,
                      "reverseHoloTrend": 0.36,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.21,
                      "avg7": 0.1,
                      "avg30": 0.1,
                      "reverseHoloAvg1": 0.27,
                      "reverseHoloAvg7": 0.35,
                      "reverseHoloAvg30": 0.36
                  }
              }
          },
          {
              "id": "bw10-26",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "120",
              "types": [
                  "Water"
              ],
              "evolvesFrom": "Snover",
              "attacks": [
                  {
                      "name": "Razor Leaf",
                      "cost": [
                          "Grass",
                          "Grass"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "40",
                      "text": ""
                  },
                  {
                      "name": "Bang Heads",
                      "cost": [
                          "Grass",
                          "Grass",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "80",
                      "text": "Both this Pokémon and the Defending Pokémon are now Confused."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Metal",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 2,
              "set": {
                  "id": "bw10",
                  "name": "Plasma Blast",
                  "series": "Black & White",
                  "printedTotal": 101,
                  "total": 105,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PLB",
                  "releaseDate": "2013/08/14",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/bw10/symbol.png",
                      "logo": "https://images.pokemontcg.io/bw10/logo.png"
                  }
              },
              "number": "26",
              "artist": "kawayoo",
              "rarity": "Uncommon",
              "flavorText": "They appear when the snow flowers bloom. When the petals fall, they retreat to places unknown again.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/bw10/26.png",
                  "large": "https://images.pokemontcg.io/bw10/26_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/bw10-26",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.19,
                          "mid": 0.25,
                          "high": 1,
                          "market": 0.28
                      },
                      "reverseHolofoil": {
                          "low": 0.2,
                          "mid": 0.45,
                          "high": 1.25,
                          "market": 0.52,
                          "directLow": 0.39
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/bw10-26",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.28,
                      "lowPrice": 0.02,
                      "trendPrice": 0.21,
                      "reverseHoloLow": 0.23,
                      "reverseHoloTrend": 0.31,
                      "lowPriceExPlus": 0.05,
                      "avg1": 0.39,
                      "avg7": 0.21,
                      "avg30": 0.19,
                      "reverseHoloAvg1": 0.49,
                      "reverseHoloAvg7": 0.35,
                      "reverseHoloAvg30": 0.33
                  }
              }
          },
          {
              "id": "xy8-40",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "130",
              "types": [
                  "Water"
              ],
              "evolvesFrom": "Snover",
              "attacks": [
                  {
                      "name": "Ice Age",
                      "cost": [
                          "Water",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "80",
                      "text": "If your opponent's Active Pokémon is a Dragon Pokémon, it is now Paralyzed."
                  },
                  {
                      "name": "Frost Breath",
                      "cost": [
                          "Water",
                          "Water",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 4,
                      "damage": "110",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Metal",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 4,
              "set": {
                  "id": "xy8",
                  "name": "BREAKthrough",
                  "series": "XY",
                  "printedTotal": 162,
                  "total": 165,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "BKT",
                  "releaseDate": "2015/11/04",
                  "updatedAt": "2019/04/10 19:59:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xy8/symbol.png",
                      "logo": "https://images.pokemontcg.io/xy8/logo.png"
                  }
              },
              "number": "40",
              "artist": "Naoyo Kimura",
              "rarity": "Rare",
              "flavorText": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xy8/40.png",
                  "large": "https://images.pokemontcg.io/xy8/40_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xy8-40",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.3,
                          "high": 49.92,
                          "market": 0.24,
                          "directLow": 0.25
                      },
                      "reverseHolofoil": {
                          "low": 0.27,
                          "mid": 0.48,
                          "high": 1.95,
                          "market": 0.46,
                          "directLow": 0.45
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xy8-40",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.24,
                      "lowPrice": 0.07,
                      "trendPrice": 0.25,
                      "reverseHoloSell": 2,
                      "reverseHoloLow": 0.65,
                      "reverseHoloTrend": 0.87,
                      "lowPriceExPlus": 0.07,
                      "avg1": 0.49,
                      "avg7": 0.23,
                      "avg30": 0.18,
                      "reverseHoloAvg1": 2,
                      "reverseHoloAvg7": 0.88,
                      "reverseHoloAvg30": 0.63
                  }
              }
          },
          {
              "id": "swsh2-13",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "140",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Snover",
              "attacks": [
                  {
                      "name": "Soothing Scent",
                      "cost": [
                          "Grass",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "80",
                      "text": "Your opponent's Active Pokémon is now Asleep."
                  },
                  {
                      "name": "Megaton Lariat",
                      "cost": [
                          "Grass",
                          "Grass",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 4,
                      "damage": "140",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 3,
              "set": {
                  "id": "swsh2",
                  "name": "Rebel Clash",
                  "series": "Sword & Shield",
                  "printedTotal": 192,
                  "total": 209,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "RCL",
                  "releaseDate": "2020/05/01",
                  "updatedAt": "2020/09/25 10:09:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh2/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh2/logo.png"
                  }
              },
              "number": "13",
              "artist": "Kazuma Koda",
              "rarity": "Rare",
              "flavorText": "If it sees any packs of Darumaka going after Snover, it chases them off, swinging its sizable arms like hammers.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "D",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh2/13.png",
                  "large": "https://images.pokemontcg.io/swsh2/13_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh2-13",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.25,
                          "high": 10.18,
                          "market": 0.21,
                          "directLow": 0.2
                      },
                      "reverseHolofoil": {
                          "low": 0.15,
                          "mid": 0.41,
                          "high": 1.95,
                          "market": 0.36,
                          "directLow": 0.37
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh2-13",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.17,
                      "lowPrice": 0.02,
                      "trendPrice": 0.17,
                      "reverseHoloSell": 0.58,
                      "reverseHoloLow": 0.15,
                      "reverseHoloTrend": 0.45,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.13,
                      "avg7": 0.15,
                      "avg30": 0.18,
                      "reverseHoloAvg1": 0.79,
                      "reverseHoloAvg7": 0.72,
                      "reverseHoloAvg30": 0.45
                  }
              }
          },
          {
              "id": "sm6-4",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "130",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Snover",
              "abilities": [
                  {
                      "name": "Blessings of the Frost",
                      "text": "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Grass Energy card from your discard pile to 1 of your Pokémon.",
                      "type": "Ability"
                  }
              ],
              "attacks": [
                  {
                      "name": "Hypno Hammer",
                      "cost": [
                          "Grass",
                          "Colorless",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 4,
                      "damage": "80",
                      "text": "Your opponent's Active Pokémon is now Asleep."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 3,
              "set": {
                  "id": "sm6",
                  "name": "Forbidden Light",
                  "series": "Sun & Moon",
                  "printedTotal": 131,
                  "total": 150,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "FLI",
                  "releaseDate": "2018/05/04",
                  "updatedAt": "2019/02/19 23:25:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm6/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm6/logo.png"
                  }
              },
              "number": "4",
              "artist": "Masakazu Fukuda",
              "rarity": "Rare",
              "flavorText": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm6/4.png",
                  "large": "https://images.pokemontcg.io/sm6/4_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm6-4",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "reverseHolofoil": {
                          "low": 0.23,
                          "mid": 0.4,
                          "high": 2.29,
                          "market": 0.29,
                          "directLow": 0.25
                      },
                      "normal": {
                          "low": 0.15,
                          "mid": 0.27,
                          "high": 1.06,
                          "market": 0.23,
                          "directLow": 0.25
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm6-4",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.26,
                      "lowPrice": 0.05,
                      "trendPrice": 0.36,
                      "reverseHoloLow": 0.25,
                      "reverseHoloTrend": 0.38,
                      "lowPriceExPlus": 0.05,
                      "avg1": 0.38,
                      "avg7": 0.37,
                      "avg30": 0.29,
                      "reverseHoloAvg1": 0.79,
                      "reverseHoloAvg7": 0.38,
                      "reverseHoloAvg30": 0.41
                  }
              }
          },
          {
              "id": "sm11-42",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "140",
              "types": [
                  "Water"
              ],
              "evolvesFrom": "Snover",
              "attacks": [
                  {
                      "name": "Quick Freeze",
                      "cost": [
                          "Water",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "70",
                      "text": "If your opponent's Active Pokémon has any Water Energy attached to it, it is now Paralyzed."
                  },
                  {
                      "name": "Wild Tackle",
                      "cost": [
                          "Water",
                          "Water",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 4,
                      "damage": "140",
                      "text": "This Pokémon does 20 damage to itself."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Metal",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 4,
              "set": {
                  "id": "sm11",
                  "name": "Unified Minds",
                  "series": "Sun & Moon",
                  "printedTotal": 236,
                  "total": 260,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "UNM",
                  "releaseDate": "2019/08/02",
                  "updatedAt": "2021/09/01 05:37:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm11/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm11/logo.png"
                  }
              },
              "number": "42",
              "artist": "Shin Nagasawa",
              "rarity": "Rare",
              "flavorText": "It blankets wide areas in snow by whipping up blizzards. It is also known as \"The Ice Monster.\"",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm11/42.png",
                  "large": "https://images.pokemontcg.io/sm11/42_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm11-42",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.29,
                          "high": 4.99,
                          "market": 0.22,
                          "directLow": 0.25
                      },
                      "reverseHolofoil": {
                          "low": 0.2,
                          "mid": 0.4,
                          "high": 4.99,
                          "market": 0.33,
                          "directLow": 0.29
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm11-42",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.15,
                      "lowPrice": 0.03,
                      "trendPrice": 0.14,
                      "reverseHoloSell": 0.42,
                      "reverseHoloLow": 0.25,
                      "reverseHoloTrend": 0.54,
                      "lowPriceExPlus": 0.03,
                      "avg1": 0.18,
                      "avg7": 0.15,
                      "avg30": 0.21,
                      "reverseHoloAvg1": 0.29,
                      "reverseHoloAvg7": 0.55,
                      "reverseHoloAvg30": 0.44
                  }
              }
          },
          {
              "id": "dp2-19",
              "name": "Abomasnow",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "level": "40",
              "hp": "100",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Snover",
              "abilities": [
                  {
                      "name": "Glacier Snow",
                      "text": "If Abomasnow is your Active Pokémon and is damaged by an opponent's attack (even if Abomasnow is Knocked Out), the Attacking Pokémon is now Asleep.",
                      "type": "Poké-Body"
                  }
              ],
              "attacks": [
                  {
                      "name": "Heavy Blizzard",
                      "cost": [
                          "Water",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "60",
                      "text": "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "+30"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 3,
              "set": {
                  "id": "dp2",
                  "name": "Mysterious Treasures",
                  "series": "Diamond & Pearl",
                  "printedTotal": 123,
                  "total": 124,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "MT",
                  "releaseDate": "2007/08/01",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/dp2/symbol.png",
                      "logo": "https://images.pokemontcg.io/dp2/logo.png"
                  }
              },
              "number": "19",
              "artist": "Kazuyuki Kano",
              "rarity": "Rare",
              "flavorText": "It whips up blizzards in mountains that are always buried in snow. It is the abominable snowman.",
              "nationalPokedexNumbers": [
                  460
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/dp2/19.png",
                  "large": "https://images.pokemontcg.io/dp2/19_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/dp2-19",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.44,
                          "mid": 0.88,
                          "high": 3.99,
                          "market": 0.8,
                          "directLow": 0.65
                      },
                      "reverseHolofoil": {
                          "low": 0.92,
                          "mid": 1.5,
                          "high": 4.99,
                          "market": 0.88,
                          "directLow": 1.05
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/dp2-19",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.2,
                      "lowPrice": 0.05,
                      "trendPrice": 0.25,
                      "reverseHoloSell": 1.73,
                      "reverseHoloLow": 0.25,
                      "reverseHoloTrend": 1.36,
                      "lowPriceExPlus": 0.05,
                      "avg1": 0.2,
                      "avg7": 0.39,
                      "avg30": 0.46,
                      "reverseHoloAvg1": 1.95,
                      "reverseHoloAvg7": 1.46,
                      "reverseHoloAvg30": 0.7
                  }
              }
          },
          {
              "id": "base1-43",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "10",
              "hp": "30",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "attacks": [
                  {
                      "name": "Psyshock",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "10",
                      "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "base1",
                  "name": "Base",
                  "series": "Base",
                  "printedTotal": 102,
                  "total": 102,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "BS",
                  "releaseDate": "1999/01/09",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/base1/symbol.png",
                      "logo": "https://images.pokemontcg.io/base1/logo.png"
                  }
              },
              "number": "43",
              "artist": "Mitsuhiro Arita",
              "rarity": "Common",
              "flavorText": "Using its ability to read minds, it will identify impending danger and teleport to safety.",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/base1/43.png",
                  "large": "https://images.pokemontcg.io/base1/43_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/base1-43",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.47,
                          "high": 5.99,
                          "market": 0.5,
                          "directLow": 0.15
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/base1-43",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 1.02,
                      "lowPrice": 0.02,
                      "trendPrice": 0.75,
                      "reverseHoloTrend": 0.04,
                      "lowPriceExPlus": 0.05,
                      "avg1": 1.63,
                      "avg7": 0.7,
                      "avg30": 0.68,
                      "reverseHoloAvg1": 0.1,
                      "reverseHoloAvg7": 0.12,
                      "reverseHoloAvg30": 0.12
                  }
              }
          },
          {
              "id": "dp2-69",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "8",
              "hp": "50",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "attacks": [
                  {
                      "name": "Play Search",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Put the other 4 cards back on top of your deck. Shuffle your deck afterward."
                  },
                  {
                      "name": "Ultra Evolution",
                      "cost": [
                          "Psychic",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "",
                      "text": "Search your deck for Alakazam and put it on Abra (this counts as evolving Abra). Shuffle your deck afterward."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "+10"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "dp2",
                  "name": "Mysterious Treasures",
                  "series": "Diamond & Pearl",
                  "printedTotal": 123,
                  "total": 124,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "MT",
                  "releaseDate": "2007/08/01",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/dp2/symbol.png",
                      "logo": "https://images.pokemontcg.io/dp2/logo.png"
                  }
              },
              "number": "69",
              "artist": "Ken Sugimori",
              "rarity": "Common",
              "flavorText": "It sleeps for 18 hours a day. Even when awake, it teleports itself while remaining seated.",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/dp2/69.png",
                  "large": "https://images.pokemontcg.io/dp2/69_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/dp2-69",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.69,
                          "mid": 0.96,
                          "high": 9.25,
                          "market": 1.31
                      },
                      "reverseHolofoil": {
                          "low": 2.25,
                          "mid": 3.6,
                          "high": 19.99,
                          "market": 5.3
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/dp2-69",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.29,
                      "lowPrice": 0.02,
                      "trendPrice": 0.33,
                      "reverseHoloSell": 1.5,
                      "reverseHoloLow": 0.2,
                      "reverseHoloTrend": 1.51,
                      "lowPriceExPlus": 0.05,
                      "avg1": 0.07,
                      "avg7": 0.31,
                      "avg30": 0.27,
                      "reverseHoloAvg1": 0.99,
                      "reverseHoloAvg7": 1.66,
                      "reverseHoloAvg30": 1.04
                  }
              }
          },
          {
              "id": "ecard1-93",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "40",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "attacks": [
                  {
                      "name": "Scratch",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "10",
                      "text": ""
                  },
                  {
                      "name": "Confuse Ray",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ecard1",
                  "name": "Expedition Base Set",
                  "series": "E-Card",
                  "printedTotal": 165,
                  "total": 165,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "EX",
                  "releaseDate": "2002/09/15",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ecard1/symbol.png",
                      "logo": "https://images.pokemontcg.io/ecard1/logo.png"
                  }
              },
              "number": "93",
              "artist": "Hajime Kusajima",
              "rarity": "Common",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ecard1/93.png",
                  "large": "https://images.pokemontcg.io/ecard1/93_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ecard1-93",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.25,
                          "mid": 0.76,
                          "high": 4.11,
                          "market": 0.8,
                          "directLow": 0.67
                      },
                      "reverseHolofoil": {
                          "low": 7.99,
                          "mid": 10,
                          "high": 80,
                          "market": 13.82,
                          "directLow": 4.99
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ecard1-93",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.75,
                      "lowPrice": 0.04,
                      "trendPrice": 0.92,
                      "reverseHoloSell": 5.07,
                      "reverseHoloLow": 0.25,
                      "reverseHoloTrend": 4.42,
                      "lowPriceExPlus": 0.1,
                      "avg1": 3.9,
                      "avg7": 0.76,
                      "avg30": 0.9,
                      "reverseHoloAvg1": 6.5,
                      "reverseHoloAvg7": 5.47,
                      "reverseHoloAvg30": 4.1
                  }
              }
          },
          {
              "id": "base5-49",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "14",
              "hp": "40",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "attacks": [
                  {
                      "name": "Vanish",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Shuffle Abra into your deck. (Discard all cards attached to Abra.)"
                  },
                  {
                      "name": "Psyshock",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "10",
                      "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "base5",
                  "name": "Team Rocket",
                  "series": "Base",
                  "printedTotal": 82,
                  "total": 83,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "TR",
                  "releaseDate": "2000/04/24",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/base5/symbol.png",
                      "logo": "https://images.pokemontcg.io/base5/logo.png"
                  }
              },
              "number": "49",
              "artist": "Sumiyoshi Kizuki",
              "rarity": "Common",
              "flavorText": "It teleports itself away from danger, making it difficult to capture.",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/base5/49.png",
                  "large": "https://images.pokemontcg.io/base5/49_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/base5-49",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "1stEdition": {
                          "low": 0.13,
                          "mid": 1.05,
                          "high": 5.25,
                          "market": 0.95,
                          "directLow": 0.34
                      },
                      "unlimited": {
                          "low": 0.19,
                          "mid": 0.43,
                          "high": 2.49,
                          "market": 0.42,
                          "directLow": 0.19
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/base5-49",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.67,
                      "lowPrice": 0.02,
                      "trendPrice": 0.78,
                      "reverseHoloTrend": 0.31,
                      "lowPriceExPlus": 0.04,
                      "avg1": 0.39,
                      "avg7": 0.56,
                      "avg30": 0.66,
                      "reverseHoloAvg1": 0.5,
                      "reverseHoloAvg7": 0.29,
                      "reverseHoloAvg30": 0.29
                  }
              }
          },
          {
              "id": "base4-65",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "10",
              "hp": "30",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "attacks": [
                  {
                      "name": "Psyshock",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "10",
                      "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "base4",
                  "name": "Base Set 2",
                  "series": "Base",
                  "printedTotal": 130,
                  "total": 130,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "B2",
                  "releaseDate": "2000/02/24",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/base4/symbol.png",
                      "logo": "https://images.pokemontcg.io/base4/logo.png"
                  }
              },
              "number": "65",
              "artist": "Mitsuhiro Arita",
              "rarity": "Common",
              "flavorText": "Using its ability to read minds, it will identify impending danger and teleport to safety.",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/base4/65.png",
                  "large": "https://images.pokemontcg.io/base4/65_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/base4-65",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.15,
                          "mid": 0.47,
                          "high": 3.99,
                          "market": 0.36,
                          "directLow": 0.2
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/base4-65",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.32,
                      "lowPrice": 0.02,
                      "trendPrice": 0.37,
                      "reverseHoloTrend": 0.1,
                      "lowPriceExPlus": 0.1,
                      "avg1": 0.26,
                      "avg7": 0.36,
                      "avg30": 0.31,
                      "reverseHoloAvg1": 0.1,
                      "reverseHoloAvg7": 0.1,
                      "reverseHoloAvg30": 0.1
                  }
              }
          },
          {
              "id": "ecard3-46",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "40",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "abilities": [
                  {
                      "name": "Psychoflow",
                      "text": "As long as there is a Psychic Energy card attached to Abra, its Retreat Cost is 0.",
                      "type": "Poké-Body"
                  }
              ],
              "attacks": [
                  {
                      "name": "Headbutt",
                      "cost": [
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "20",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ecard3",
                  "name": "Skyridge",
                  "series": "E-Card",
                  "printedTotal": 182,
                  "total": 182,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "SK",
                  "releaseDate": "2003/05/12",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ecard3/symbol.png",
                      "logo": "https://images.pokemontcg.io/ecard3/logo.png"
                  }
              },
              "number": "46",
              "artist": "Keiko Fukuyama",
              "rarity": "Common",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ecard3/46.png",
                  "large": "https://images.pokemontcg.io/ecard3/46_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ecard3-46",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 6.5,
                          "mid": 10.62,
                          "high": 12.99,
                          "market": 8.87
                      },
                      "reverseHolofoil": {
                          "low": 54.99,
                          "mid": 59.99,
                          "high": 64.99,
                          "market": 56.22
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ecard3-46",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 1.75,
                      "lowPrice": 0.2,
                      "trendPrice": 1.8,
                      "reverseHoloLow": 5,
                      "reverseHoloTrend": 9.39,
                      "lowPriceExPlus": 0.5,
                      "avg1": 1,
                      "avg7": 1.9,
                      "avg30": 1.83,
                      "reverseHoloAvg1": 17.9,
                      "reverseHoloAvg7": 12.45,
                      "reverseHoloAvg30": 5.51
                  }
              }
          },
          {
              "id": "base6-67",
              "name": "Abra",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "10",
              "hp": "30",
              "types": [
                  "Psychic"
              ],
              "evolvesTo": [
                  "Kadabra"
              ],
              "attacks": [
                  {
                      "name": "Psyshock",
                      "cost": [
                          "Psychic"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "10",
                      "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Psychic",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "base6",
                  "name": "Legendary Collection",
                  "series": "Other",
                  "printedTotal": 110,
                  "total": 110,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "LC",
                  "releaseDate": "2002/05/24",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/base6/symbol.png",
                      "logo": "https://images.pokemontcg.io/base6/logo.png"
                  }
              },
              "number": "67",
              "artist": "Mitsuhiro Arita",
              "rarity": "Common",
              "flavorText": "Using its ability to read minds, it will identify impending danger and teleport to safety.",
              "nationalPokedexNumbers": [
                  63
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/base6/67.png",
                  "large": "https://images.pokemontcg.io/base6/67_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/base6-67",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.45,
                          "mid": 1.34,
                          "high": 3.99,
                          "market": 1.11,
                          "directLow": 0.39
                      },
                      "reverseHolofoil": {
                          "low": 54.96,
                          "mid": 68.01,
                          "high": 72.19,
                          "market": 69
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/base6-67",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.25,
                      "lowPrice": 0.02,
                      "trendPrice": 0.2,
                      "reverseHoloLow": 10,
                      "reverseHoloTrend": 35.72,
                      "lowPriceExPlus": 0.1,
                      "avg1": 0.02,
                      "avg7": 0.26,
                      "avg30": 0.41,
                      "reverseHoloAvg1": 45.99,
                      "reverseHoloAvg7": 35.62,
                      "reverseHoloAvg30": 24.28
                  }
              }
          },
          {
              "id": "ex3-1",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "70",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Bad News",
                      "cost": [
                          "Darkness"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose."
                  },
                  {
                      "name": "Prize Count",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "20+",
                      "text": "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-30"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ex3",
                  "name": "Dragon",
                  "series": "EX",
                  "printedTotal": 97,
                  "total": 100,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "DR",
                  "releaseDate": "2003/09/18",
                  "updatedAt": "2019/01/28 16:44:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ex3/symbol.png",
                      "logo": "https://images.pokemontcg.io/ex3/logo.png"
                  }
              },
              "number": "1",
              "artist": "Naoyo Kimura",
              "rarity": "Rare Holo",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ex3/1.png",
                  "large": "https://images.pokemontcg.io/ex3/1_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ex3-1",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 22.98,
                          "mid": 30.12,
                          "high": 39.99,
                          "market": 38.34
                      },
                      "reverseHolofoil": {
                          "low": 22.7,
                          "mid": 23.67,
                          "high": 84.19,
                          "market": 24.82,
                          "directLow": 22.99
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ex3-1",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 11.5,
                      "lowPrice": 2,
                      "trendPrice": 8.74,
                      "reverseHoloSell": 15.98,
                      "reverseHoloLow": 3.5,
                      "reverseHoloTrend": 10.05,
                      "lowPriceExPlus": 5,
                      "avg1": 14.99,
                      "avg7": 7.12,
                      "avg30": 9.68,
                      "reverseHoloAvg1": 11.95,
                      "reverseHoloAvg7": 6.96,
                      "reverseHoloAvg30": 7.84
                  }
              }
          },
          {
              "id": "dp3-21",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "31",
              "hp": "70",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Baleful Wind",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Choose a card from your opponent's hand without looking and discard it. If you discarded a Trainer, Supporter, or Stadium card, choose 1 more card from your opponent's hand without looking and discard it."
                  },
                  {
                      "name": "Raid",
                      "cost": [
                          "Darkness"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "10",
                      "text": "If you played Absol from your hand during this turn, this attack's base damage is 40 instead of 10."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "+20"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "dp3",
                  "name": "Secret Wonders",
                  "series": "Diamond & Pearl",
                  "printedTotal": 132,
                  "total": 132,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "SW",
                  "releaseDate": "2007/11/01",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/dp3/symbol.png",
                      "logo": "https://images.pokemontcg.io/dp3/logo.png"
                  }
              },
              "number": "21",
              "artist": "Ken Sugimori",
              "rarity": "Rare",
              "flavorText": "It senses disasters coming and appears before people only to warn them of impending danger.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/dp3/21.png",
                  "large": "https://images.pokemontcg.io/dp3/21_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/dp3-21",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 1.14,
                          "mid": 1.55,
                          "high": 3.97,
                          "market": 2.15,
                          "directLow": 1.33
                      },
                      "reverseHolofoil": {
                          "low": 1.48,
                          "mid": 2.18,
                          "high": 7.49,
                          "market": 2.67,
                          "directLow": 1.48
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/dp3-21",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 1.03,
                      "lowPrice": 0.05,
                      "trendPrice": 0.8,
                      "reverseHoloSell": 1.03,
                      "reverseHoloLow": 0.29,
                      "reverseHoloTrend": 1.65,
                      "lowPriceExPlus": 0.5,
                      "avg1": 1,
                      "avg7": 0.9,
                      "avg30": 0.72,
                      "reverseHoloAvg1": 1.95,
                      "reverseHoloAvg7": 1.34,
                      "reverseHoloAvg30": 1.39
                  }
              }
          },
          {
              "id": "hgss4-91",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "80",
              "types": [
                  "Darkness"
              ],
              "abilities": [
                  {
                      "name": "Eye of Disaster",
                      "text": "As long as Absol is your Active Pokémon, whenever your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
                      "type": "Poké-Body"
                  }
              ],
              "attacks": [
                  {
                      "name": "Vicious Claw",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "70",
                      "text": "Choose 1 Pokémon from your hand and put it in the Lost Zone. (If you can't put a Pokémon in the Lost Zone, this attack does nothing.)"
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "hgss4",
                  "name": "HS—Triumphant",
                  "series": "HeartGold & SoulSilver",
                  "printedTotal": 102,
                  "total": 103,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "TM",
                  "releaseDate": "2010/11/03",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
                      "logo": "https://images.pokemontcg.io/hgss4/logo.png"
                  }
              },
              "number": "91",
              "artist": "Hideaki Hakozaki",
              "rarity": "Rare Prime",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/hgss4/91.png",
                  "large": "https://images.pokemontcg.io/hgss4/91_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-91",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 12.01,
                          "mid": 25.42,
                          "high": 45.99,
                          "market": 21.12,
                          "directLow": 20
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/hgss4-91",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 12.5,
                      "lowPrice": 1.99,
                      "trendPrice": 10.24,
                      "reverseHoloTrend": 8.73,
                      "lowPriceExPlus": 5.9,
                      "avg1": 13,
                      "avg7": 10.99,
                      "avg30": 10.4,
                      "reverseHoloAvg1": 10,
                      "reverseHoloAvg7": 10.87,
                      "reverseHoloAvg30": 10.12
                  }
              }
          },
          {
              "id": "sm2-81",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Future Sight",
                      "cost": [
                          "Darkness"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Look at the top 4 cards of either player's deck and put them back in any order."
                  },
                  {
                      "name": "Doom News",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "",
                      "text": "Put all Energy attached to this Pokémon into your hand. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "sm2",
                  "name": "Guardians Rising",
                  "series": "Sun & Moon",
                  "printedTotal": 145,
                  "total": 180,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "GRI",
                  "releaseDate": "2017/05/05",
                  "updatedAt": "2021/07/15 11:30:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm2/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm2/logo.png"
                  }
              },
              "number": "81",
              "artist": "Anesaki Dynamic",
              "rarity": "Rare Holo",
              "flavorText": "Long ago, superstitions were spread about it, saying it brought disaster. This fed a hatred of it, and it was driven deep into the mountains.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm2/81.png",
                  "large": "https://images.pokemontcg.io/sm2/81_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm2-81",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 0.25,
                          "mid": 0.59,
                          "high": 3.09,
                          "market": 0.6,
                          "directLow": 0.49
                      },
                      "reverseHolofoil": {
                          "low": 0.25,
                          "mid": 0.66,
                          "high": 2,
                          "market": 0.51,
                          "directLow": 0.47
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm2-81",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.8,
                      "lowPrice": 0.05,
                      "trendPrice": 0.72,
                      "reverseHoloSell": 0.73,
                      "reverseHoloLow": 0.09,
                      "reverseHoloTrend": 0.53,
                      "lowPriceExPlus": 0.05,
                      "avg1": 0.8,
                      "avg7": 0.8,
                      "avg30": 0.58,
                      "reverseHoloAvg1": 1.25,
                      "reverseHoloAvg7": 0.45,
                      "reverseHoloAvg30": 0.7
                  }
              }
          },
          {
              "id": "ex13-18",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "70",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Foresight",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order."
                  },
                  {
                      "name": "Overrun",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "10",
                      "text": "Choose 1 of your opponent's Benched Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-30"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ex13",
                  "name": "Holon Phantoms",
                  "series": "EX",
                  "printedTotal": 110,
                  "total": 111,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "HP",
                  "releaseDate": "2006/05/01",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ex13/symbol.png",
                      "logo": "https://images.pokemontcg.io/ex13/logo.png"
                  }
              },
              "number": "18",
              "artist": "Masakazu Fukuda",
              "rarity": "Rare",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ex13/18.png",
                  "large": "https://images.pokemontcg.io/ex13/18_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ex13-18",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 1.03,
                          "mid": 2.08,
                          "high": 3.97,
                          "market": 1.74,
                          "directLow": 2.07
                      },
                      "reverseHolofoil": {
                          "low": 9,
                          "mid": 17,
                          "high": 20,
                          "market": 14.18
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ex13-18",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 1,
                      "lowPrice": 0.25,
                      "trendPrice": 1.64,
                      "reverseHoloSell": 6.99,
                      "reverseHoloLow": 1.99,
                      "reverseHoloTrend": 4.5,
                      "lowPriceExPlus": 0.45,
                      "avg1": 1.5,
                      "avg7": 0.83,
                      "avg30": 1.43,
                      "reverseHoloAvg1": 6.99,
                      "reverseHoloAvg7": 4.56,
                      "reverseHoloAvg30": 2.68
                  }
              }
          },
          {
              "id": "sm12-133",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Ominous News",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Discard a Special Energy from 1 of your opponent's Pokémon."
                  },
                  {
                      "name": "Dirty Throw",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "70",
                      "text": "Discard a card from your hand. If you can't discard a card, this attack does nothing."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "sm12",
                  "name": "Cosmic Eclipse",
                  "series": "Sun & Moon",
                  "printedTotal": 236,
                  "total": 272,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "CEC",
                  "releaseDate": "2019/11/01",
                  "updatedAt": "2021/09/01 05:37:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm12/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm12/logo.png"
                  }
              },
              "number": "133",
              "artist": "Mizue",
              "rarity": "Uncommon",
              "flavorText": "The only thing unlucky about Absol is its appearance. It protects fields and warns people of disaster, so one ought to be grateful for it.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm12/133.png",
                  "large": "https://images.pokemontcg.io/sm12/133_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm12-133",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.09,
                          "mid": 0.23,
                          "high": 1,
                          "market": 0.2,
                          "directLow": 0.19
                      },
                      "reverseHolofoil": {
                          "low": 0.2,
                          "mid": 0.4,
                          "high": 1.25,
                          "market": 0.39,
                          "directLow": 0.48
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm12-133",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.08,
                      "lowPrice": 0.02,
                      "trendPrice": 0.09,
                      "reverseHoloSell": 0.44,
                      "reverseHoloLow": 0.09,
                      "reverseHoloTrend": 0.35,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.1,
                      "avg7": 0.11,
                      "avg30": 0.11,
                      "reverseHoloAvg1": 0.45,
                      "reverseHoloAvg7": 0.36,
                      "reverseHoloAvg30": 0.33
                  }
              }
          },
          {
              "id": "xy6-40",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "abilities": [
                  {
                      "name": "Cursed Eyes",
                      "text": "When you play this Pokémon from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's Pokémon to another of his or her Pokémon.",
                      "type": "Ability"
                  }
              ],
              "attacks": [
                  {
                      "name": "Mach Claw",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "30",
                      "text": "This attack's damage isn't affected by Resistance."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "xy6",
                  "name": "Roaring Skies",
                  "series": "XY",
                  "printedTotal": 108,
                  "total": 112,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "ROS",
                  "releaseDate": "2015/05/06",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xy6/symbol.png",
                      "logo": "https://images.pokemontcg.io/xy6/logo.png"
                  }
              },
              "number": "40",
              "artist": "Kagemaru Himeno",
              "rarity": "Rare Holo",
              "flavorText": "It appears when it senses an impending natural disaster. As a result, it was mistaken as a doom bringer.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xy6/40.png",
                  "large": "https://images.pokemontcg.io/xy6/40_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xy6-40",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 0.25,
                          "mid": 0.72,
                          "high": 4.39,
                          "market": 0.72,
                          "directLow": 0.42
                      },
                      "reverseHolofoil": {
                          "low": 0.35,
                          "mid": 0.71,
                          "high": 3.5,
                          "market": 0.61,
                          "directLow": 0.35
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xy6-40",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 2.4,
                      "lowPrice": 0.1,
                      "trendPrice": 1.84,
                      "reverseHoloSell": 1.54,
                      "reverseHoloLow": 0.4,
                      "reverseHoloTrend": 1.37,
                      "lowPriceExPlus": 0.4,
                      "avg1": 3.5,
                      "avg7": 1.56,
                      "avg30": 1.18,
                      "reverseHoloAvg1": 0.98,
                      "reverseHoloAvg7": 1.23,
                      "reverseHoloAvg30": 1.48
                  }
              }
          },
          {
              "id": "bw9-67",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Mind Jack",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "20+",
                      "text": "Does 20 more damage for each of your opponent's Benched Pokémon."
                  },
                  {
                      "name": "Fearsome Shadow",
                      "cost": [
                          "Darkness",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "60",
                      "text": "Your opponent reveals his or her hand."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "bw9",
                  "name": "Plasma Freeze",
                  "series": "Black & White",
                  "printedTotal": 116,
                  "total": 122,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PLF",
                  "releaseDate": "2013/05/08",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/bw9/symbol.png",
                      "logo": "https://images.pokemontcg.io/bw9/logo.png"
                  }
              },
              "number": "67",
              "artist": "5ban Graphics",
              "rarity": "Rare Holo",
              "flavorText": "It appears from deep in the mountains to warn people about upcoming disasters it has sensed with its horn.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/bw9/67.png",
                  "large": "https://images.pokemontcg.io/bw9/67_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/bw9-67",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 1.99,
                          "mid": 3.61,
                          "high": 10,
                          "market": 4.96,
                          "directLow": 3.99
                      },
                      "reverseHolofoil": {
                          "low": 2.9,
                          "mid": 4.25,
                          "high": 15.19,
                          "market": 4.78,
                          "directLow": 2.45
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/bw9-67",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 3.46,
                      "lowPrice": 0.86,
                      "trendPrice": 4.02,
                      "reverseHoloSell": 7.95,
                      "reverseHoloLow": 0.86,
                      "reverseHoloTrend": 3.9,
                      "lowPriceExPlus": 1.25,
                      "avg1": 4.5,
                      "avg7": 3.41,
                      "avg30": 2.66,
                      "reverseHoloAvg1": 7.95,
                      "reverseHoloAvg7": 3.24,
                      "reverseHoloAvg30": 2.72
                  }
              }
          },
          {
              "id": "ex4-96",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "70",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Quick Attack",
                      "cost": [
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "10+",
                      "text": "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
                  },
                  {
                      "name": "Feint Attack",
                      "cost": [
                          "Darkness",
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "",
                      "text": "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ex4",
                  "name": "Team Magma vs Team Aqua",
                  "series": "EX",
                  "printedTotal": 95,
                  "total": 97,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "MA",
                  "releaseDate": "2004/03/01",
                  "updatedAt": "2019/01/28 16:44:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ex4/symbol.png",
                      "logo": "https://images.pokemontcg.io/ex4/logo.png"
                  }
              },
              "number": "96",
              "artist": "Mitsuhiro Arita",
              "rarity": "Rare Secret",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ex4/96.png",
                  "large": "https://images.pokemontcg.io/ex4/96_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ex4-96",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 98.01,
                          "mid": 99,
                          "high": 150,
                          "market": 134.98
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ex4-96",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 17,
                      "lowPrice": 9.99,
                      "trendPrice": 26.89,
                      "reverseHoloTrend": 23.21,
                      "lowPriceExPlus": 32.99,
                      "avg1": 9,
                      "avg7": 28.75,
                      "avg30": 45.55,
                      "reverseHoloAvg1": 5,
                      "reverseHoloAvg7": 27.13,
                      "reverseHoloAvg30": 18.28
                  }
              }
          },
          {
              "id": "ex12-15",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "70",
              "types": [
                  "Darkness"
              ],
              "abilities": [
                  {
                      "name": "Shining Horn",
                      "text": "As long as Absol is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
                      "type": "Poké-Body"
                  }
              ],
              "attacks": [
                  {
                      "name": "Extra Call",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Search your deck for a Pokémon-ex, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
                  },
                  {
                      "name": "Feint Attack",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "",
                      "text": "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-30"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ex12",
                  "name": "Legend Maker",
                  "series": "EX",
                  "printedTotal": 92,
                  "total": 93,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "LM",
                  "releaseDate": "2006/02/01",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ex12/symbol.png",
                      "logo": "https://images.pokemontcg.io/ex12/logo.png"
                  }
              },
              "number": "15",
              "artist": "Midori Harada",
              "rarity": "Rare",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ex12/15.png",
                  "large": "https://images.pokemontcg.io/ex12/15_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ex12-15",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 1,
                          "mid": 1.33,
                          "high": 3.71,
                          "market": 2.41,
                          "directLow": 1.33
                      },
                      "reverseHolofoil": {
                          "low": 19.88,
                          "mid": 21.96,
                          "high": 28,
                          "market": 25.41
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ex12-15",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.51,
                      "lowPrice": 0.2,
                      "trendPrice": 3.81,
                      "reverseHoloSell": 1,
                      "reverseHoloLow": 1.99,
                      "reverseHoloTrend": 8.31,
                      "lowPriceExPlus": 0.39,
                      "avg1": 0.2,
                      "avg7": 0.89,
                      "avg30": 2.96,
                      "reverseHoloAvg1": 1,
                      "reverseHoloAvg7": 8.16,
                      "reverseHoloAvg30": 5.4
                  }
              }
          },
          {
              "id": "swsh8-164",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Drag Off",
                      "cost": [
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "",
                      "text": "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon."
                  },
                  {
                      "name": "Slash",
                      "cost": [
                          "Darkness",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "80",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Grass",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "swsh8",
                  "name": "Fusion Strike",
                  "series": "Sword & Shield",
                  "printedTotal": 264,
                  "total": 284,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "FST",
                  "releaseDate": "2021/11/12",
                  "updatedAt": "2021/11/12 07:32:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh8/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh8/logo.png"
                  }
              },
              "number": "164",
              "artist": "Eri Yamaki",
              "rarity": "Rare",
              "flavorText": "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "E",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh8/164.png",
                  "large": "https://images.pokemontcg.io/swsh8/164_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh8-164",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.05,
                          "mid": 0.25,
                          "high": 10.15,
                          "market": 0.15,
                          "directLow": 0.16
                      },
                      "reverseHolofoil": {
                          "low": 0.08,
                          "mid": 0.29,
                          "high": 2,
                          "market": 0.29,
                          "directLow": 0.2
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh8-164",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.12,
                      "lowPrice": 0.03,
                      "trendPrice": 0.13,
                      "reverseHoloSell": 0.46,
                      "reverseHoloLow": 0.1,
                      "reverseHoloTrend": 0.51,
                      "lowPriceExPlus": 0.03,
                      "avg1": 0.11,
                      "avg7": 0.11,
                      "avg30": 0.12,
                      "reverseHoloAvg1": 0.18,
                      "reverseHoloAvg7": 0.4,
                      "reverseHoloAvg30": 0.4
                  }
              }
          },
          {
              "id": "xyp-XY178",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "abilities": [
                  {
                      "name": "Lamentation",
                      "text": "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), discard a random card from your opponent's hand.",
                      "type": "Ability"
                  }
              ],
              "attacks": [
                  {
                      "name": "Shadow Cage",
                      "cost": [
                          "Darkness",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "60",
                      "text": "The Defending Pokémon can't retreat during your opponent's next turn."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "xyp",
                  "name": "XY Black Star Promos",
                  "series": "XY",
                  "printedTotal": 211,
                  "total": 216,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PR-XY",
                  "releaseDate": "2013/10/12",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xyp/symbol.png",
                      "logo": "https://images.pokemontcg.io/xyp/logo.png"
                  }
              },
              "number": "XY178",
              "artist": "Hasuno",
              "rarity": "Promo",
              "flavorText": "It appears when it senses an impending natural disaster. As a result, it was mistaken as a doom bringer.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xyp/XY178.png",
                  "large": "https://images.pokemontcg.io/xyp/XY178_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xyp-XY178",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 5.95,
                          "mid": 9.75,
                          "high": 18.99,
                          "market": 12.66
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xyp-XY178",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 24.74,
                      "lowPrice": 16.99,
                      "trendPrice": 34.85,
                      "reverseHoloTrend": 32.49,
                      "lowPriceExPlus": 24.74,
                      "avg1": 24.74,
                      "avg7": 24.6,
                      "avg30": 24.57,
                      "reverseHoloAvg1": 49,
                      "reverseHoloAvg7": 22.37,
                      "reverseHoloAvg30": 22.37
                  }
              }
          },
          {
              "id": "swsh35-38",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Dark Cutter",
                      "cost": [
                          "Darkness",
                          "Darkness"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "70",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Grass",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "swsh35",
                  "name": "Champion's Path",
                  "series": "Sword & Shield",
                  "printedTotal": 73,
                  "total": 80,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "CPA",
                  "releaseDate": "2020/09/25",
                  "updatedAt": "2020/10/25 13:45:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh35/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh35/logo.png"
                  }
              },
              "number": "38",
              "artist": "kodama",
              "rarity": "Uncommon",
              "flavorText": "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "D",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh35/38.png",
                  "large": "https://images.pokemontcg.io/swsh35/38_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh35-38",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "reverseHolofoil": {
                          "low": 0.1,
                          "mid": 0.25,
                          "high": 1.25,
                          "market": 0.2,
                          "directLow": 0.19
                      },
                      "normal": {
                          "low": 0.02,
                          "mid": 0.15,
                          "high": 2.97,
                          "market": 0.06,
                          "directLow": 0.03
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh35-38",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.06,
                      "lowPrice": 0.02,
                      "trendPrice": 0.09,
                      "reverseHoloSell": 0.18,
                      "reverseHoloLow": 0.02,
                      "reverseHoloTrend": 0.18,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.07,
                      "avg7": 0.11,
                      "avg30": 0.06,
                      "reverseHoloAvg1": 0.2,
                      "reverseHoloAvg7": 0.21,
                      "reverseHoloAvg30": 0.24
                  }
              }
          },
          {
              "id": "sm9-88",
              "name": "Absol",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "abilities": [
                  {
                      "name": "Dark Ambition",
                      "text": "If your opponent's Active Pokémon is a Basic Pokémon, its Retreat Cost is Colorless more.",
                      "type": "Ability"
                  }
              ],
              "attacks": [
                  {
                      "name": "Shadow Seeker",
                      "cost": [
                          "Darkness",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "30+",
                      "text": "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "sm9",
                  "name": "Team Up",
                  "series": "Sun & Moon",
                  "printedTotal": 181,
                  "total": 198,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "TEU",
                  "releaseDate": "2019/02/01",
                  "updatedAt": "2021/09/01 05:37:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm9/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm9/logo.png"
                  }
              },
              "number": "88",
              "artist": "nagimiso",
              "rarity": "Rare Holo",
              "flavorText": "Although it's said to bring disaster, in actuality, this Pokémon possesses a calm disposition and warns people of any crises that loom.",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm9/88.png",
                  "large": "https://images.pokemontcg.io/sm9/88_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm9-88",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 0.4,
                          "mid": 1.62,
                          "high": 6.99,
                          "market": 1.02,
                          "directLow": 1.42
                      },
                      "reverseHolofoil": {
                          "low": 1.09,
                          "mid": 1.37,
                          "high": 6.99,
                          "market": 1.27,
                          "directLow": 1.13
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm9-88",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 1.23,
                      "lowPrice": 0.4,
                      "trendPrice": 1.32,
                      "reverseHoloSell": 1.46,
                      "reverseHoloLow": 0.75,
                      "reverseHoloTrend": 1.65,
                      "lowPriceExPlus": 0.4,
                      "avg1": 1.4,
                      "avg7": 1.29,
                      "avg30": 1.48,
                      "reverseHoloAvg1": 0.4,
                      "reverseHoloAvg7": 1.7,
                      "reverseHoloAvg30": 1.79
                  }
              }
          },
          {
              "id": "pl3-1",
              "name": "Absol G",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic"
              ],
              "level": "59",
              "hp": "70",
              "types": [
                  "Darkness"
              ],
              "attacks": [
                  {
                      "name": "Feint Attack",
                      "cost": [
                          "Darkness"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon."
                  },
                  {
                      "name": "Doom News",
                      "cost": [
                          "Darkness",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "",
                      "text": "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "pl3",
                  "name": "Supreme Victors",
                  "series": "Platinum",
                  "printedTotal": 147,
                  "total": 153,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "SV",
                  "releaseDate": "2009/08/19",
                  "updatedAt": "2018/03/07 22:40:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/pl3/symbol.png",
                      "logo": "https://images.pokemontcg.io/pl3/logo.png"
                  }
              },
              "number": "1",
              "artist": "Yusuke Ishikawa",
              "rarity": "Rare Holo",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/pl3/1.png",
                  "large": "https://images.pokemontcg.io/pl3/1_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/pl3-1",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 2.76,
                          "mid": 3.39,
                          "high": 6,
                          "market": 5.32
                      },
                      "reverseHolofoil": {
                          "low": 1.99,
                          "mid": 2.86,
                          "high": 4.98,
                          "market": 4.98
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/pl3-1",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 5.13,
                      "lowPrice": 0.99,
                      "trendPrice": 4.36,
                      "reverseHoloSell": 3.18,
                      "reverseHoloLow": 0.99,
                      "reverseHoloTrend": 3.64,
                      "lowPriceExPlus": 2.19,
                      "avg1": 3,
                      "avg7": 4.61,
                      "avg30": 4.37,
                      "reverseHoloAvg1": 2.99,
                      "reverseHoloAvg7": 3.17,
                      "reverseHoloAvg30": 2.62
                  }
              }
          },
          {
              "id": "pl3-141",
              "name": "Absol G LV.X",
              "supertype": "Pokémon",
              "subtypes": [
                  "Level-Up"
              ],
              "level": "X",
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "evolvesFrom": "Absol G",
              "rules": [
                  "Put this card onto your Active Absol G. Absol G LV.X can use any attack, Poké-Power, or Poké-Body from its previous level."
              ],
              "abilities": [
                  {
                      "name": "Darkness Send",
                      "text": "Once during your turn (before your attack), when you put Absol G LV.X from your hand onto your Active Absol G, you may flip 3 coins. For each heads, put the top card from your opponent's deck in the Lost Zone.",
                      "type": "Poké-Power"
                  }
              ],
              "attacks": [
                  {
                      "name": "Darkness Slugger",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "30+",
                      "text": "You may discard a card from your hand. If you do, this attack does 30 damage plus 30 more damage."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "pl3",
                  "name": "Supreme Victors",
                  "series": "Platinum",
                  "printedTotal": 147,
                  "total": 153,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "SV",
                  "releaseDate": "2009/08/19",
                  "updatedAt": "2018/03/07 22:40:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/pl3/symbol.png",
                      "logo": "https://images.pokemontcg.io/pl3/logo.png"
                  }
              },
              "number": "141",
              "artist": "Yusuke Ishikawa",
              "rarity": "Rare Holo LV.X",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/pl3/141.png",
                  "large": "https://images.pokemontcg.io/pl3/141_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/pl3-141",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 11,
                          "mid": 20,
                          "high": 65,
                          "market": 22.32,
                          "directLow": 49.99
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/pl3-141",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 11.15,
                      "lowPrice": 4,
                      "trendPrice": 15.72,
                      "reverseHoloTrend": 14.38,
                      "lowPriceExPlus": 13,
                      "avg1": 18.5,
                      "avg7": 15.48,
                      "avg30": 14.3,
                      "reverseHoloAvg1": 9,
                      "reverseHoloAvg7": 14.05,
                      "reverseHoloAvg30": 9.26
                  }
              }
          },
          {
              "id": "ex16-92",
              "name": "Absol ex",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic",
                  "EX"
              ],
              "level": "ex",
              "hp": "100",
              "types": [
                  "Darkness"
              ],
              "rules": [
                  "When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards."
              ],
              "abilities": [
                  {
                      "name": "Cursed Eyes",
                      "text": "Once during your turn, when you put Absol ex from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's Pokémon to another of his or her Pokémon.",
                      "type": "Poké-Power"
                  }
              ],
              "attacks": [
                  {
                      "name": "Psychic Pulse",
                      "cost": [
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "30",
                      "text": "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-30"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "ex16",
                  "name": "Power Keepers",
                  "series": "EX",
                  "printedTotal": 108,
                  "total": 108,
                  "legalities": {
                      "unlimited": "Legal"
                  },
                  "ptcgoCode": "PK",
                  "releaseDate": "2007/02/02",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/ex16/symbol.png",
                      "logo": "https://images.pokemontcg.io/ex16/logo.png"
                  }
              },
              "number": "92",
              "artist": "Ryo Ueda",
              "rarity": "Rare Holo EX",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/ex16/92.png",
                  "large": "https://images.pokemontcg.io/ex16/92_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/ex16-92",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 20.48,
                          "mid": 27.97,
                          "high": 145,
                          "market": 37.32
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/ex16-92",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 12.29,
                      "lowPrice": 3,
                      "trendPrice": 14.5,
                      "reverseHoloTrend": 28.14,
                      "lowPriceExPlus": 15,
                      "avg1": 7.17,
                      "avg7": 16.02,
                      "avg30": 16.88,
                      "reverseHoloAvg1": 18.99,
                      "reverseHoloAvg7": 20.95,
                      "reverseHoloAvg30": 21.13
                  }
              }
          },
          {
              "id": "xyp-XY62",
              "name": "Absol-EX",
              "supertype": "Pokémon",
              "subtypes": [
                  "Basic",
                  "EX"
              ],
              "hp": "170",
              "types": [
                  "Darkness"
              ],
              "evolvesTo": [
                  "M Absol-EX"
              ],
              "rules": [
                  "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
              ],
              "attacks": [
                  {
                      "name": "Dark Fang",
                      "cost": [
                          "Darkness"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "20",
                      "text": "Flip a coin. If heads, discard a random card from your opponent's hand."
                  },
                  {
                      "name": "Dark Edge",
                      "cost": [
                          "Darkness",
                          "Darkness",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "100",
                      "text": "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance)."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fighting",
                      "value": "×2"
                  }
              ],
              "resistances": [
                  {
                      "type": "Psychic",
                      "value": "-20"
                  }
              ],
              "retreatCost": [
                  "Colorless",
                  "Colorless"
              ],
              "convertedRetreatCost": 2,
              "set": {
                  "id": "xyp",
                  "name": "XY Black Star Promos",
                  "series": "XY",
                  "printedTotal": 211,
                  "total": 216,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PR-XY",
                  "releaseDate": "2013/10/12",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xyp/symbol.png",
                      "logo": "https://images.pokemontcg.io/xyp/logo.png"
                  }
              },
              "number": "XY62",
              "artist": "PLANETA",
              "rarity": "Promo",
              "nationalPokedexNumbers": [
                  359
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xyp/XY62.png",
                  "large": "https://images.pokemontcg.io/xyp/XY62_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xyp-XY62",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 2,
                          "mid": 3.47,
                          "high": 7.99,
                          "market": 3.48,
                          "directLow": 3.48
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xyp-XY62",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 4.8,
                      "lowPrice": 4,
                      "trendPrice": 4.8,
                      "reverseHoloTrend": 3.75,
                      "lowPriceExPlus": 4.5,
                      "avg1": 6.5,
                      "avg7": 4.45,
                      "avg30": 4.91,
                      "reverseHoloAvg1": 4.99,
                      "reverseHoloAvg7": 3.69,
                      "reverseHoloAvg30": 3.54
                  }
              }
          },
          {
              "id": "bw5-11",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "90",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Hammer In",
                      "cost": [
                          "Grass"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "20",
                      "text": ""
                  },
                  {
                      "name": "Deck and Cover",
                      "cost": [
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "50",
                      "text": "The Defending Pokémon is now Paralyzed and Poisined. Shuffle this Pokémon and all cards attached to it into your deck."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "bw5",
                  "name": "Dark Explorers",
                  "series": "Black & White",
                  "printedTotal": 108,
                  "total": 111,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "DEX",
                  "releaseDate": "2012/05/09",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/bw5/symbol.png",
                      "logo": "https://images.pokemontcg.io/bw5/logo.png"
                  }
              },
              "number": "11",
              "artist": "Kouki Saitou",
              "rarity": "Rare",
              "flavorText": "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/bw5/11.png",
                  "large": "https://images.pokemontcg.io/bw5/11_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/bw5-11",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.49,
                          "mid": 0.99,
                          "high": 2.97,
                          "market": 0.99,
                          "directLow": 0.89
                      },
                      "reverseHolofoil": {
                          "low": 0.99,
                          "mid": 1.9,
                          "high": 4.94,
                          "market": 1.44
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/bw5-11",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.25,
                      "lowPrice": 0.1,
                      "trendPrice": 0.58,
                      "reverseHoloLow": 0.99,
                      "reverseHoloTrend": 0.12,
                      "lowPriceExPlus": 0.28,
                      "avg1": 0.18,
                      "avg7": 0.62,
                      "avg30": 0.68,
                      "reverseHoloAvg1": 0.99,
                      "reverseHoloAvg7": 1.19,
                      "reverseHoloAvg30": 2.18
                  }
              }
          },
          {
              "id": "swsh3-10",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "90",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Jet Headbutt",
                      "cost": [
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "70",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "swsh3",
                  "name": "Darkness Ablaze",
                  "series": "Sword & Shield",
                  "printedTotal": 189,
                  "total": 201,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "DAA",
                  "releaseDate": "2020/08/14",
                  "updatedAt": "2020/10/25 13:45:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh3/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh3/logo.png"
                  }
              },
              "number": "10",
              "artist": "Shigenori Negishi",
              "rarity": "Rare",
              "flavorText": "It moves with blinding speed and lobs poison at foes. Featuring Accelgor as a main character is a surefire way to make a movie or comic popular.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "D",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh3/10.png",
                  "large": "https://images.pokemontcg.io/swsh3/10_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh3-10",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.05,
                          "mid": 0.2,
                          "high": 1.5,
                          "market": 0.13,
                          "directLow": 0.12
                      },
                      "reverseHolofoil": {
                          "low": 0.18,
                          "mid": 0.38,
                          "high": 2.88,
                          "market": 0.37,
                          "directLow": 0.18
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh3-10",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.15,
                      "lowPrice": 0.02,
                      "trendPrice": 0.1,
                      "reverseHoloSell": 0.47,
                      "reverseHoloLow": 0.1,
                      "reverseHoloTrend": 0.49,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.08,
                      "avg7": 0.08,
                      "avg30": 0.12,
                      "reverseHoloAvg1": 0.3,
                      "reverseHoloAvg7": 0.5,
                      "reverseHoloAvg30": 0.5
                  }
              }
          },
          {
              "id": "bw3-12",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "90",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Acid Spray",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "20",
                      "text": "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon."
                  },
                  {
                      "name": "Slashing Strike",
                      "cost": [
                          "Grass"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "60",
                      "text": "This Pokémon can't use Slashing Strike during your next turn."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "bw3",
                  "name": "Noble Victories",
                  "series": "Black & White",
                  "printedTotal": 101,
                  "total": 102,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "NVI",
                  "releaseDate": "2011/11/16",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/bw3/symbol.png",
                      "logo": "https://images.pokemontcg.io/bw3/logo.png"
                  }
              },
              "number": "12",
              "artist": "Kagemaru Himeno",
              "rarity": "Rare",
              "flavorText": "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/bw3/12.png",
                  "large": "https://images.pokemontcg.io/bw3/12_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/bw3-12",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.4,
                          "mid": 0.5,
                          "high": 2.7,
                          "market": 0.45
                      },
                      "reverseHolofoil": {
                          "low": 0.65,
                          "mid": 1,
                          "high": 1.49,
                          "market": 0.65,
                          "directLow": 1
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/bw3-12",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 1.75,
                      "lowPrice": 0.6,
                      "trendPrice": 0.02,
                      "reverseHoloTrend": 3.22,
                      "lowPriceExPlus": 0.75,
                      "avg1": 1,
                      "avg7": 1.38,
                      "avg30": 1.99,
                      "reverseHoloAvg1": 0.99,
                      "reverseHoloAvg7": 1.91,
                      "reverseHoloAvg30": 2.18
                  }
              }
          },
          {
              "id": "swsh8-14",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1",
                  "Fusion Strike"
              ],
              "hp": "90",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Ninja Tornado",
                      "cost": [
                          "Grass",
                          "Colorless",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 3,
                      "damage": "120",
                      "text": "If this Pokémon moved from your Bench to the Active Spot this turn, this attack can be used for Grass."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "swsh8",
                  "name": "Fusion Strike",
                  "series": "Sword & Shield",
                  "printedTotal": 264,
                  "total": 284,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "FST",
                  "releaseDate": "2021/11/12",
                  "updatedAt": "2021/11/12 07:32:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh8/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh8/logo.png"
                  }
              },
              "number": "14",
              "artist": "nagimiso",
              "rarity": "Rare",
              "flavorText": "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "E",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh8/14.png",
                  "large": "https://images.pokemontcg.io/swsh8/14_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh8-14",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "reverseHolofoil": {
                          "low": 0.12,
                          "mid": 0.25,
                          "high": 9999,
                          "market": 0.22,
                          "directLow": 0.19
                      },
                      "normal": {
                          "low": 0.05,
                          "mid": 0.15,
                          "high": 1.99,
                          "market": 0.06,
                          "directLow": 0.06
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh8-14",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.09,
                      "lowPrice": 0.02,
                      "trendPrice": 0.09,
                      "reverseHoloSell": 0.28,
                      "reverseHoloLow": 0.09,
                      "reverseHoloTrend": 0.27,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.05,
                      "avg7": 0.08,
                      "avg30": 0.08,
                      "reverseHoloAvg1": 0.32,
                      "reverseHoloAvg7": 0.24,
                      "reverseHoloAvg30": 0.32
                  }
              }
          },
          {
              "id": "sm4-9",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "90",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Recover",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "",
                      "text": "Discard an Energy from this Pokémon and heal all damage from it."
                  },
                  {
                      "name": "Speed Attack",
                      "cost": [
                          "Grass",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "70",
                      "text": ""
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "retreatCost": [
                  "Colorless"
              ],
              "convertedRetreatCost": 1,
              "set": {
                  "id": "sm4",
                  "name": "Crimson Invasion",
                  "series": "Sun & Moon",
                  "printedTotal": 111,
                  "total": 126,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "CIN",
                  "releaseDate": "2017/11/03",
                  "updatedAt": "2019/02/19 23:25:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm4/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm4/logo.png"
                  }
              },
              "number": "9",
              "artist": "tetsuya koizumi",
              "rarity": "Uncommon",
              "flavorText": "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm4/9.png",
                  "large": "https://images.pokemontcg.io/sm4/9_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm4-9",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.05,
                          "mid": 0.18,
                          "high": 2.97,
                          "market": 0.11,
                          "directLow": 0.09
                      },
                      "reverseHolofoil": {
                          "low": 0.1,
                          "mid": 0.3,
                          "high": 6.95,
                          "market": 0.28,
                          "directLow": 0.21
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm4-9",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.07,
                      "lowPrice": 0.02,
                      "trendPrice": 0.08,
                      "reverseHoloSell": 0.45,
                      "reverseHoloLow": 0.02,
                      "reverseHoloTrend": 0.34,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.09,
                      "avg7": 0.04,
                      "avg30": 0.08,
                      "reverseHoloAvg1": 0.94,
                      "reverseHoloAvg7": 0.32,
                      "reverseHoloAvg30": 0.25
                  }
              }
          },
          {
              "id": "bw10-8",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "80",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Retribution",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "20",
                      "text": "If an Escavalier you had in play was Knocked Out by damage from an opponent's attack during his or her last turn, put all Energy attached to the Defending Pokémon into your opponent's hand."
                  },
                  {
                      "name": "Signal Beam",
                      "cost": [
                          "Grass",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "30",
                      "text": "The Defending Pokémon is now Confused."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "bw10",
                  "name": "Plasma Blast",
                  "series": "Black & White",
                  "printedTotal": 101,
                  "total": 105,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "PLB",
                  "releaseDate": "2013/08/14",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/bw10/symbol.png",
                      "logo": "https://images.pokemontcg.io/bw10/logo.png"
                  }
              },
              "number": "8",
              "artist": "5ban Graphics",
              "rarity": "Rare",
              "flavorText": "When its body dries out, it weakens. So it wraps a membrane around itself for protection while it spits poison.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/bw10/8.png",
                  "large": "https://images.pokemontcg.io/bw10/8_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/bw10-8",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.2,
                          "mid": 0.43,
                          "high": 1.23,
                          "market": 0.44,
                          "directLow": 0.3
                      },
                      "reverseHolofoil": {
                          "low": 0.32,
                          "mid": 0.55,
                          "high": 2.99,
                          "market": 0.5,
                          "directLow": 0.36
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/bw10-8",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.29,
                      "lowPrice": 0.1,
                      "trendPrice": 0.3,
                      "reverseHoloSell": 0.69,
                      "reverseHoloLow": 0.39,
                      "reverseHoloTrend": 0.75,
                      "lowPriceExPlus": 0.15,
                      "avg1": 0.45,
                      "avg7": 0.29,
                      "avg30": 0.31,
                      "reverseHoloAvg1": 0.69,
                      "reverseHoloAvg7": 0.53,
                      "reverseHoloAvg30": 0.68
                  }
              }
          },
          {
              "id": "xy3-9",
              "name": "Accelgor",
              "supertype": "Pokémon",
              "subtypes": [
                  "Stage 1"
              ],
              "hp": "90",
              "types": [
                  "Grass"
              ],
              "evolvesFrom": "Shelmet",
              "attacks": [
                  {
                      "name": "Raid",
                      "cost": [
                          "Colorless"
                      ],
                      "convertedEnergyCost": 1,
                      "damage": "20+",
                      "text": "If this Pokémon evolved from Shelmet during this turn, this attack does 40 more damage."
                  },
                  {
                      "name": "Afterimage Strike",
                      "cost": [
                          "Grass",
                          "Colorless"
                      ],
                      "convertedEnergyCost": 2,
                      "damage": "40",
                      "text": "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage."
                  }
              ],
              "weaknesses": [
                  {
                      "type": "Fire",
                      "value": "×2"
                  }
              ],
              "set": {
                  "id": "xy3",
                  "name": "Furious Fists",
                  "series": "XY",
                  "printedTotal": 111,
                  "total": 114,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "FFI",
                  "releaseDate": "2014/08/13",
                  "updatedAt": "2018/03/04 10:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xy3/symbol.png",
                      "logo": "https://images.pokemontcg.io/xy3/logo.png"
                  }
              },
              "number": "9",
              "artist": "Shin Nagasawa",
              "rarity": "Uncommon",
              "flavorText": "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
              "nationalPokedexNumbers": [
                  617
              ],
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xy3/9.png",
                  "large": "https://images.pokemontcg.io/xy3/9_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xy3-9",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.25,
                          "high": 1.85,
                          "market": 0.22,
                          "directLow": 0.21
                      },
                      "reverseHolofoil": {
                          "low": 0.24,
                          "mid": 0.46,
                          "high": 1.95,
                          "market": 0.28,
                          "directLow": 0.25
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xy3-9",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.18,
                      "lowPrice": 0.02,
                      "trendPrice": 0.11,
                      "reverseHoloLow": 0.25,
                      "reverseHoloTrend": 0.42,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.27,
                      "avg7": 0.13,
                      "avg30": 0.11,
                      "reverseHoloAvg1": 0.59,
                      "reverseHoloAvg7": 0.49,
                      "reverseHoloAvg30": 0.34
                  }
              }
          },
          {
              "id": "xy7-69",
              "name": "Ace Trainer",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "You can play this card only if you have more Prize cards left than your opponent.",
                  "Each player shuffles his or her hand into his or her deck. Then, draw 6 cards. Your opponent draws 3 cards.",
                  "You may play only 1 Supporter card during your turn (before your attack)."
              ],
              "set": {
                  "id": "xy7",
                  "name": "Ancient Origins",
                  "series": "XY",
                  "printedTotal": 98,
                  "total": 100,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "AOR",
                  "releaseDate": "2015/08/12",
                  "updatedAt": "2020/08/14 09:35:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/xy7/symbol.png",
                      "logo": "https://images.pokemontcg.io/xy7/logo.png"
                  }
              },
              "number": "69",
              "artist": "Ken Sugimori",
              "rarity": "Uncommon",
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/xy7/69.png",
                  "large": "https://images.pokemontcg.io/xy7/69_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/xy7-69",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.06,
                          "mid": 0.25,
                          "high": 1,
                          "market": 0.2,
                          "directLow": 0.18
                      },
                      "reverseHolofoil": {
                          "low": 0.15,
                          "mid": 0.44,
                          "high": 1,
                          "market": 0.28,
                          "directLow": 0.29
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/xy7-69",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "lowPrice": 0.99,
                      "lowPriceExPlus": 0.99
                  }
              }
          },
          {
              "id": "sm3-142",
              "name": "Acerola",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Put 1 of your Pokémon that has any damage counters on it and all cards attached to it into your hand.",
                  "You may play only 1 Supporter card during your turn (before your attack)."
              ],
              "set": {
                  "id": "sm3",
                  "name": "Burning Shadows",
                  "series": "Sun & Moon",
                  "printedTotal": 147,
                  "total": 177,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "BUS",
                  "releaseDate": "2017/08/05",
                  "updatedAt": "2019/02/19 23:25:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm3/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm3/logo.png"
                  }
              },
              "number": "142",
              "artist": "Megumi Mizutani",
              "rarity": "Rare Ultra",
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm3/142.png",
                  "large": "https://images.pokemontcg.io/sm3/142_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm3-142",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 19.86,
                          "mid": 26.29,
                          "high": 75.94,
                          "market": 29.34,
                          "directLow": 19.88
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm3-142",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 19.2,
                      "lowPrice": 14,
                      "trendPrice": 23.19,
                      "reverseHoloTrend": 34.32,
                      "lowPriceExPlus": 16,
                      "avg1": 12.99,
                      "avg7": 22.28,
                      "avg30": 25.31,
                      "reverseHoloAvg1": 49.5,
                      "reverseHoloAvg7": 34.33,
                      "reverseHoloAvg30": 23.92
                  }
              }
          },
          {
              "id": "sm3-112a",
              "name": "Acerola",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Put 1 of your Pokémon that has any damage counters on it and all cards attached to it into your hand.",
                  "You may play only 1 Supporter card during your turn (before your attack)."
              ],
              "set": {
                  "id": "sm3",
                  "name": "Burning Shadows",
                  "series": "Sun & Moon",
                  "printedTotal": 147,
                  "total": 177,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "BUS",
                  "releaseDate": "2017/08/05",
                  "updatedAt": "2019/02/19 23:25:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm3/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm3/logo.png"
                  }
              },
              "number": "112a",
              "artist": "Hideki Ishikawa",
              "rarity": "Uncommon",
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm3/112a.png",
                  "large": "https://images.pokemontcg.io/sm3/112a_hires.png"
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm3-112a",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 2.95,
                      "lowPrice": 2.95,
                      "trendPrice": 8.97,
                      "reverseHoloTrend": 2.44,
                      "lowPriceExPlus": 2.95,
                      "avg1": 2.95,
                      "avg7": 4.28,
                      "avg30": 6.3,
                      "reverseHoloAvg1": 2.95,
                      "reverseHoloAvg7": 3.98,
                      "reverseHoloAvg30": 3.02
                  }
              }
          },
          {
              "id": "sm3-112",
              "name": "Acerola",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Put 1 of your Pokémon that has any damage counters on it and all cards attached to it into your hand.",
                  "You may play only 1 Supporter card during your turn (before your attack)."
              ],
              "set": {
                  "id": "sm3",
                  "name": "Burning Shadows",
                  "series": "Sun & Moon",
                  "printedTotal": 147,
                  "total": 177,
                  "legalities": {
                      "unlimited": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "BUS",
                  "releaseDate": "2017/08/05",
                  "updatedAt": "2019/02/19 23:25:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/sm3/symbol.png",
                      "logo": "https://images.pokemontcg.io/sm3/logo.png"
                  }
              },
              "number": "112",
              "artist": "Ken Sugimori",
              "rarity": "Uncommon",
              "legalities": {
                  "unlimited": "Legal",
                  "expanded": "Legal"
              },
              "images": {
                  "small": "https://images.pokemontcg.io/sm3/112.png",
                  "large": "https://images.pokemontcg.io/sm3/112_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/sm3-112",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "normal": {
                          "low": 0.1,
                          "mid": 0.25,
                          "high": 2.39,
                          "market": 0.14,
                          "directLow": 0.11
                      },
                      "reverseHolofoil": {
                          "low": 0.15,
                          "mid": 0.46,
                          "high": 1.99,
                          "market": 0.26,
                          "directLow": 0.26
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/sm3-112",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "lowPrice": 0.49,
                      "trendPrice": 0.29,
                      "reverseHoloTrend": 0,
                      "lowPriceExPlus": 0.49,
                      "avg1": 0.2,
                      "avg7": 0.39,
                      "avg30": 0.31
                  }
              }
          },
          {
              "id": "swsh9tg-TG24",
              "name": "Acerola's Premonition",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Your opponent reveals their hand, and you draw a card for each Trainer card you find there.",
                  "Supporter rule: You may play only 1 Supporter card during your turn."
              ],
              "set": {
                  "id": "swsh9tg",
                  "name": "Brilliant Stars Trainer Gallery",
                  "series": "Sword & Shield",
                  "printedTotal": 30,
                  "total": 30,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "BRS",
                  "releaseDate": "2022/02/25",
                  "updatedAt": "2022/02/23 09:45:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh9tg/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh9tg/logo.png"
                  }
              },
              "number": "TG24",
              "artist": "yuu",
              "rarity": "Rare Ultra",
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "E",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh9tg/TG24.png",
                  "large": "https://images.pokemontcg.io/swsh9tg/TG24_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh9tg-TG24",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "holofoil": {
                          "low": 8.99,
                          "mid": 11.95,
                          "high": 32.4,
                          "market": 10.53,
                          "directLow": 11.35
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh9tg-TG24",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 10.07,
                      "lowPrice": 7.33,
                      "trendPrice": 9.9,
                      "reverseHoloTrend": 0,
                      "lowPriceExPlus": 7.33,
                      "avg1": 8.72,
                      "avg7": 9.54,
                      "avg30": 10.07
                  }
              }
          },
          {
              "id": "swsh9-129",
              "name": "Acerola's Premonition",
              "supertype": "Trainer",
              "subtypes": [
                  "Supporter"
              ],
              "rules": [
                  "Your opponent reveals their hand, and you draw a card for each Trainer card you find there.",
                  "Supporter rule: You may play only 1 Supporter card during your turn."
              ],
              "set": {
                  "id": "swsh9",
                  "name": "Brilliant Stars",
                  "series": "Sword & Shield",
                  "printedTotal": 172,
                  "total": 186,
                  "legalities": {
                      "unlimited": "Legal",
                      "standard": "Legal",
                      "expanded": "Legal"
                  },
                  "ptcgoCode": "BRS",
                  "releaseDate": "2022/02/25",
                  "updatedAt": "2022/02/23 09:45:00",
                  "images": {
                      "symbol": "https://images.pokemontcg.io/swsh9/symbol.png",
                      "logo": "https://images.pokemontcg.io/swsh9/logo.png"
                  }
              },
              "number": "129",
              "artist": "Shiburingaru",
              "rarity": "Uncommon",
              "legalities": {
                  "unlimited": "Legal",
                  "standard": "Legal",
                  "expanded": "Legal"
              },
              "regulationMark": "E",
              "images": {
                  "small": "https://images.pokemontcg.io/swsh9/129.png",
                  "large": "https://images.pokemontcg.io/swsh9/129_hires.png"
              },
              "tcgplayer": {
                  "url": "https://prices.pokemontcg.io/tcgplayer/swsh9-129",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "reverseHolofoil": {
                          "low": 0.05,
                          "mid": 0.24,
                          "high": 69,
                          "market": 0.14,
                          "directLow": 0.12
                      },
                      "normal": {
                          "low": 0.01,
                          "mid": 0.1,
                          "high": 9999,
                          "market": 0.04,
                          "directLow": 0.02
                      }
                  }
              },
              "cardmarket": {
                  "url": "https://prices.pokemontcg.io/cardmarket/swsh9-129",
                  "updatedAt": "2022/05/20",
                  "prices": {
                      "averageSellPrice": 0.04,
                      "lowPrice": 0.02,
                      "trendPrice": 0.04,
                      "reverseHoloSell": 0.18,
                      "reverseHoloLow": 0.03,
                      "reverseHoloTrend": 0.17,
                      "lowPriceExPlus": 0.02,
                      "avg1": 0.03,
                      "avg7": 0.05,
                      "avg30": 0.04,
                      "reverseHoloAvg1": 0.18,
                      "reverseHoloAvg7": 0.17,
                      "reverseHoloAvg30": 0.18
                  }
              }
          }
      ],
      "page": 1,
      "pageSize": 50,
      "count": 50,
      "totalCount": 14705
  }

    service.getPokemonList('50', 'name');
    service.pokemons$.subscribe((pokemons) => {
    expect(pokemons.data[0].id).toEqual('xy4-117');
    expect(pokemons.data[0].name).toEqual('AZ');
    expect(pokemons.data[49].id).toEqual('swsh9-129');
    expect(pokemons.data[49].name).toEqual(`Acerola's Premonition`);
    })

    const req = httpTestingController.expectOne(
      'https://api.pokemontcg.io/v2/cards?pageSize=50&orderBy=name'
    );

    req.flush(mockPokemonList);
  });
});
