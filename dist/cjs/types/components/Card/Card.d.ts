/// <reference types="react" />
import "./Card.css";
export interface CardProps {
    type: "top-avatar" | "bottom-avatar" | "no-avatar";
    avatarSrc?: string;
    name?: string;
    title?: string;
    productSrc?: string;
    rate?: number;
    rates?: number;
    icon?: any;
    iconFill?: any;
    productName?: string;
    productTitle?: string;
    productDescription?: string;
    productColor?: string;
    skinType?: string;
    lastRelese?: string;
}
declare const Card: ({ avatarSrc, productSrc, type, rate, rates, productName, productDescription, productColor, skinType, lastRelese, name, title, productTitle, icon, iconFill }: CardProps) => JSX.Element;
export default Card;
