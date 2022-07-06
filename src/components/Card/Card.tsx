import React from "react";
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

const Card = ({ avatarSrc = "", productSrc = "", type, rate = 0, rates = 0, productName = "", productDescription = "", productColor = "", skinType = "", lastRelese = "", name = "", title = "", productTitle = "", icon = "", iconFill = "" }: CardProps) => {
  switch (type) {
    case "top-avatar": {
      return (
        <div className="card">
          <div className="card-avatar-box">
            <img src={avatarSrc} width={65} height={65}></img>
            <div className="card-avatar-title-box">
              <p className="card-avatar-title">{name ? name : "-"}</p>
              <p className="card-avatar-role">{title ? title : "-"}</p>
            </div>
          </div>
          <div className="product">
            <img src={productSrc} className="product-image"></img>
          </div>
          <div className="rate-box">
            <p className="rate-count">{rates}</p>
            {Array.from(Array(5), (e, i) => {
              if (i < Math.floor(rate)) return <span key={i}>{iconFill}</span>;
              else return <span key={i}>{icon}</span>;
            })}
            <p className="rate-rates">({rates})</p>
          </div>
          <div className="description-box">
            <p className="product-name">{productName ? productName : "-"}</p>
            <p className="product-description">{productDescription ? productDescription : "-"}</p>
            <p className="product-color">{productColor}</p>
          </div>
        </div>
      );
    }
    case "bottom-avatar": {
      return (
        <div className="bottom-avatar-card">
          <div className="bottom-avatar-product-box">
            <img src={productSrc} className="bottom-avatar-product-img"></img>
            <div className="bottom-avatar-description-box">
              <p className="bottom-avatar-product-name">{productName ? productName : "-"}</p>
              <p className="bottom-avatar-product-title">{productTitle ? productTitle : "-"}</p>
            </div>
          </div>
          <div className="bottom-avatar-rate-box">
            <div className="bottom-avatar-rate-star">
              {Array.from(Array(5), (e, i) => {
                if (i < Math.floor(rate)) return <span key={i}>{iconFill}</span>;
                else return <span key={i}>{icon}</span>;
              })}
            </div>
            <p className="bottom-avatar-rates">{lastRelese ? `${lastRelese} hour ago` : "-"}</p>
          </div>
          <p className="extra-1">{productDescription ? productDescription : "-"}</p>
          <button className="bottom-avatar-button">Read More</button>
          <div className="bottom-avatar-avatar-box">
            <img src={avatarSrc} width={65} height={65}></img>
            <p className="bottom-avatar-avatar-name">{name ? name : "-"}</p>
            <p>{title ? title : "-"}</p>
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className="no-border-card">
          <div className="no-border-product-box">
            <img src={productSrc} className="no-border-product-image"></img>
          </div>
          {skinType && <p className="no-border-skin-type">{skinType}</p>}
          <div className="no-border-rate-box">
            <p className="no-border-rate">{rates}</p>
            {Array.from(Array(5), (e, i) => {
              if (i < Math.floor(rate)) return <span key={i}>{iconFill}</span>;
              else return <span key={i}>{icon}</span>;
            })}
            <p className="no-border-rates">({rates})</p>
          </div>
          <div className="no-border-description-box">
            <p className="no-border-product-name">{productName ? productName : "-"}</p>
            <p className="no-border-description">{productDescription ? productDescription : "-"}</p>
            <p className="no-border-description-color">{productColor}</p>
          </div>
        </div>
      );
    }
  }
};

export default Card;
