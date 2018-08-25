import React from "react";
import "./Card.css"

const Card = (props) => (
    <div className = "uk-container-large">
        <div className="uk-child-width-expand@s uk-text-center uk-container-large">
                <div className={`uk-card uk-card-default uk-width-1-4`} id={`card`}>
                    <h3 className="uk-card-title uk-position-top-center uk-height-medium uk-height-max-medium">{props.maker} {props.name}</h3><br></br><br></br>
                    <img src={props.img} height="200" width="200" alt="Knife" id="img"></img>
                    <p className="uk-card-body" id="info">
                        ${props.price}<br></br>
                        Handle Length: {props.handlelength} inches<br></br>
                        Blade Length: {props.bladelength} inches<br></br>
                        Total Weight: {props.weight} ounces<br></br>
                        Pivot System: {props.pivot}<br></br>
                    </p>
                </div>
        </div>
    </div>
);

export default Card;