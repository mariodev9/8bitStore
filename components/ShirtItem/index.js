import React from "react";
import mexico from "../../public/MEXICO.png";
import Image from "next/image";

export default function ShirtItem({ team }) {
  return (
    <>
      <div className="col-md-4 asd">
        <div className="shirt_container">
          <Image src={mexico} width={154} height={120} />
          <h4>{team}</h4>
        </div>
      </div>
      <style jsx>
        {`
          .col-md-4 {
            display: flex;
            justify-content: center;
            padding: 5px;
          }
          .shirt_container {
          }
          .asd {
            border: 1px solid black;
          }
          h4 {
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
