import React from "react";

const Item = props => {
  // Regex
  const parser = document.createElement("a");
  parser.href = props.href;
  const hostname = parser.hostname;

  return (
    <a href={props.href} className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.title}</h5>
        <small>{hostname}</small>
      </div>
      <p className="mb-1">{props.content}</p>
      <small>{props.href}</small>
    </a>
  );
};

export default Item;
