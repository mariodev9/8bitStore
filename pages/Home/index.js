import { useEffect, useState } from "react";
import ArgSvg from "../../components/Header/ArgSvg";
import BrasilSvg from "../../components/Header/BrasilSvg";
import FranceSvg from "../../components/Header/FranceSvg";
import Nav from "../../components/Layout/Nav";
import { getShirts } from "../../firebase/client";

export default function Home({ data }) {
  return (
    <>
      <Nav />
      <header className="">
        <div className="container header-title">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="title">8bitStore</h1>
              <h3>The store what you need</h3>
              <button className="btn btn-primary mt-5">More shirts!</button>
            </div>
            <div className="col-md-6 header-illustration  ">
              <BrasilSvg />
              <ArgSvg />
              <FranceSvg />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <h2>Shop</h2>
        <ol>
          {data.map((shirt, i) => (
            <li key={i}>{shirt.team}</li>
          ))}
        </ol>
      </div>

      <style jsx>
        {`
          .asd {
            border: solid 2px #222;
          }

          header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 80px 0px;
          }
          .header-illustration {
            margin-top: 50px;
            display: flex;
          }

          h1 {
            text-shadow: 0.2rem 0.1rem #999;
          }
          h3 {
            letter-spacing: 0.1em;
            color: #777;
            margin-left: 8px;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getShirts();
  return { props: { data } };
}
