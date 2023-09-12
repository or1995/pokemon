export interface ICardSummaryRecord {
  id: string;
  localId: string;
  name: string;
  image: string;
}

export interface ICardDetailsRecord {
  category: string;
  id: string;
  illustrator: string;
  image: string;
  localId: string;
  name: string;
  rarity: string;
  set: {
    cardCount: {
      official: number;
      total: number;
    };
    id: string;
    logo: string;
    name: string;
    symbol: string;
  };
  variants: {
    firstEdition: boolean;
    holo: boolean;
    normal: boolean;
    reverse: boolean;
    wPromo: boolean;
  };
  dexId: number[];
  hp: number;
  types: string[];
  stage: string;
  abilities: [
    {
      type: string;
      name: string;
      effect: string;
    },
  ];
  attacks: [
    {
      cost: string[];
      name: string;
      damage: number;
    },
  ];
  weaknesses: [
    {
      type: string;
      value: string;
    },
  ];
  resistances: [
    {
      type: string;
      value: string;
    },
  ];
  legal: {
    standard: boolean;
    expanded: boolean;
  };
}
