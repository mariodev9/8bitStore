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
    title: "Argentina 2022 Home Shirt",
    price: "80",
    type: "Home",
    colors: "White / Light Blue",
    img: <ArgentinaHomeShirt />,
    newArrival: true,
  },
  {
    id: 2,
    title: "Argentina 2022 Away Shirt",
    price: "70",
    type: "Away",
    colors: "Violet",
    img: <ArgentinaAwayShirt />,
    newArrival: true,
  },
  {
    id: 3,
    title: "Croacia 2022",
    price: "50",
    type: "Home",

    colors: "White / Red",
    img: <CroaciaHomeShirt />,

    newArrival: true,
  },
  {
    id: 4,
    title: "Brasil 2002",
    price: "70",
    type: "Home",
    colors: "White / Yellow",
    img: <BrasilHomeShirt02 />,
    newArrival: false,
  },
  {
    id: 5,
    title: "France 1998",
    type: "Home",
    price: "70",
    colors: "Blue / Red / White",
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
