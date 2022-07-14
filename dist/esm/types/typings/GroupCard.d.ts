/// <reference types="react" />
export interface IDataGroupCard {
    avatarUrl: string;
    title: string;
    description: string;
}
export interface IGroupCard {
    keyIndex: string;
    className: string;
    icon1?: JSX.Element;
    icon2?: JSX.Element;
    icon3?: JSX.Element;
    data: IDataGroupCard;
}
