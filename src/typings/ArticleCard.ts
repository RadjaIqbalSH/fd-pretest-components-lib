export interface IArticleCardData {
  articleUrl: string;
  title: string;
  userName: string;
  publish: string;
}

export interface IArticleCard {
  keyIndex: string;
  className: string;
  data: IArticleCardData;
}
