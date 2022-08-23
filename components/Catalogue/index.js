import React from "react";
import ShirtItem from "../ShirtItem";

export default function Catalogue({ shirts }) {
  return (
    <>
      <div className="container">
        <h1>Shop</h1>
        <div className="row">
          {shirts &&
            shirts.map((shirt, i) => <ShirtItem key={i} team={shirt.team} />)}
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            text-align: center;
            margin: 100px 0px;
          }
        `}
      </style>
    </>
  );
}
