import { useEffect, useState } from "react";
import ArgSvg from "../../components/Header/ArgSvg";
import BrasilSvg from "../../components/Header/BrasilSvg";
import FranceSvg from "../../components/Header/FranceSvg";
import Nav from "../../components/Layout/Nav";
import { getShirts } from "../../firebase/client";
import Head from "next/head";
import Catalogue from "../../components/Catalogue";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
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
      <Catalogue shirts={data} />

      <style jsx>
        {`
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
