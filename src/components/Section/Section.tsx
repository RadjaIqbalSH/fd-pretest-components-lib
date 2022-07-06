import React from "react";
import "./Section.css";

export interface ISection {
  title: string;
  subTitle: string;
  children: any;
  showMore: boolean;
  icon: any;
}

const Section = (props: ISection) => {
  return (
    <div className="section">
      <div className="section-head">
        <div className="section-title-box">
          <p className="section-title">{props.title}</p>
          <p className="section-sub-title">{props.subTitle}</p>
        </div>
        {props.showMore && (
          <button className="section-button">
            <p className="section-button-text ">See more</p>
            {props.icon}
          </button>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default Section;
