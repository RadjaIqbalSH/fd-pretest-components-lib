/// <reference types="react" />
export interface IDataTopAvatarCard {
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
export interface ITopAvatarCard {
    keyIndex: string;
    className?: string;
    starIcon?: JSX.Element;
    starIconFill?: JSX.Element;
    data: IDataTopAvatarCard;
}
