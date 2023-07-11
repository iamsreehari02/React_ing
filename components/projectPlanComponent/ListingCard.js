import React from "react";
import arrow from '../../assets/Vector (2).svg';
import "./ListingCard.css";

export default function ListingCard({title,description}) {

  return (
        <div className="project_plan">
            <div className="para_and_head">
            <div className="head_only">{title}</div>
            <div className="para_only">{description}</div>
            </div>
            <div className="read_more">
                <div className="non-arrow">Read More</div>
                <div className="arrow">
                <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    

  );
}
