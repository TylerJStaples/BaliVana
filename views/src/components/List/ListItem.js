import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    {/* {props.children} */}
    <h1>{props.title}</h1>
    <p>{props.name}</p>
  </li>
);
