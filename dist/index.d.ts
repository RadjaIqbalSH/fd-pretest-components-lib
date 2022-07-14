/// <reference types="react" />
interface IDataCard {
    skinType?: string;
    rate: number;
    stars: number;
    reviews: number;
    productUrl: string;
    productName: string;
    productDescription: string;
    productColor: string;
}
interface ICard {
    keyIndex: string;
    className: string;
    starIcon?: JSX.Element;
    starIconFill?: JSX.Element;
    data: IDataCard;
}

declare const Card: ({ keyIndex, className, starIcon, starIconFill, data }: ICard) => JSX.Element;

interface IAds {
    label: string;
    label2?: string;
    className?: string;
}

declare const Ads: ({ label, label2, className }: IAds) => JSX.Element;

interface IArticleCardData {
    articleUrl: string;
    title: string;
    userName: string;
    publish: string;
}
interface IArticleCard {
    keyIndex: string;
    className: string;
    data: IArticleCardData;
}

declare const ArticleCard: ({ keyIndex, className, data }: IArticleCard) => JSX.Element;

interface IBrands {
    brandSrc: string;
}

declare const Brands: ({ brandSrc }: IBrands) => JSX.Element;

interface IDataGroupCard {
    avatarUrl: string;
    title: string;
    description: string;
}
interface IGroupCard {
    keyIndex: string;
    className: string;
    icon1?: JSX.Element;
    icon2?: JSX.Element;
    icon3?: JSX.Element;
    data: IDataGroupCard;
}

declare const GroupCard: ({ keyIndex, className, icon1, icon2, icon3, data }: IGroupCard) => JSX.Element;

interface IDataReviewCard {
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
interface IReviewCard {
    keyIndex: string;
    className: string;
    starIcon?: JSX.Element;
    starIconFill?: JSX.Element;
    data: IDataReviewCard;
}

declare const ReviewCard: ({ keyIndex, className, starIcon, starIconFill, data }: IReviewCard) => JSX.Element;

interface IDataTopAvatarCard {
    avatarUrl: string;
    name: string;
    title: string;
    rate: number;
    stars: number;
    reviews: number;
    productUrl: string;
    productName: string;
    productDescription: string;
    productColor: string;
}
interface ITopAvatarCard {
    keyIndex: string;
    className?: string;
    starIcon?: JSX.Element;
    starIconFill?: JSX.Element;
    data: IDataTopAvatarCard;
}

declare const TopAvatarCard: ({ keyIndex, className, starIcon, starIconFill, data }: ITopAvatarCard) => JSX.Element;

export { Ads, ArticleCard, Brands, Card, GroupCard, ReviewCard, TopAvatarCard };
