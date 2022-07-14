export interface IDataCard {
  skinType?: string;
  rate: number;
  stars: number;
  reviews: number;
  productUrl: string;
  productName: string;
  productDescription: string;
  productColor: string;
}

export interface ICard {
  keyIndex: string;
  className: string;
  starIcon?: JSX.Element;
  starIconFill?: JSX.Element;
  data: IDataCard;
}
