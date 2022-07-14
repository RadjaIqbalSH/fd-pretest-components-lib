export interface IDataReviewCard {
  avatarUrl: string;
  name: string;
  title: string;
  productUrl: string;
  productName: string;
  productBrand: string;
  stars: number;
  publish: string;
  productDescription: string;
}

export interface IReviewCard {
  keyIndex: string;
  className: string;
  starIcon?: JSX.Element;
  starIconFill?: JSX.Element;
  data: IDataReviewCard;
}
