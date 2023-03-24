import React from "react";
import {
  ArgentinaHomeShirt,
  ArgentinaAwayShirt,
  CroaciaHomeShirt,
  BrasilHomeShirt02,
  FranceHomeShirt98,
  ArgentinaHomeShirt02,
} from "./ShirtsSvg";

export const ShirtsList = [
  {
    id: 1,
    title: "Argentina 2022 Home",
    price: "80",
    img: <ArgentinaHomeShirt />,
    newArrival: true,
  },
  {
    id: 2,
    title: "Argentina 2022 Away",
    price: "70",
    img: <ArgentinaAwayShirt />,
    newArrival: true,
  },
  {
    id: 3,
    title: "Crocia 2022 Home",
    price: "50",
    img: <CroaciaHomeShirt />,
    newArrival: true,
  },
  {
    id: 4,
    title: "Brasil 2002 Home",
    price: "70",
    img: <BrasilHomeShirt02 />,
    newArrival: false,
  },
  {
    id: 5,
    title: "Argentina 2022 Home",
    price: "70",
    img: <FranceHomeShirt98 />,
    newArrival: false,
  },
  {
    id: 6,
    title: "Argentina 2022 Home",
    price: "70",
    img: <ArgentinaHomeShirt02 />,
    newArrival: false,
  },
];
