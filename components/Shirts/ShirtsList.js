import React from "react";
import {
  ArgentinaHomeShirt,
  ArgentinaAwayShirt,
  CroaciaHomeShirt,
  BrasilHomeShirt02,
  FranceHomeShirt98,
  ArgentinaHomeShirt02,
  MexicoHomeShirt98,
  JuventusAwayShirt96,
  EnglandHomeShirt98,
  AlemaniaHomeShirt90,
  CroaciaHomeShirt98,
  ChelseaHomeShirt23,
  TottenhamHomeShirt23,
  ArsenalHomeShirt23,
  UnitedHomeShirt23,
  CityHomeShirt23,
  BrightonHomeShirt23,
  ChelseaAwayShirt23,
  TottenhamAwayShirt23,
  NewcastleHomeShirt23,
  GermanyHomeShirt22,
  UruguayHomeShirt22,
  MarruecosHomeShirt22,
  SpainHomeShirt22,
  EnglandHomeShirt22,
  FranceHomeShirt22,
  BrasilHomeShirt22,
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
    retro: false,
    premier: false,
    popular: true,
  },
  {
    id: 2,
    title: "Argentina 2022 Away Shirt",
    price: "70",
    type: "Away",
    colors: "Violet",
    img: <ArgentinaAwayShirt />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: true,
  },
  {
    id: 3,
    title: "Croatia 2022",
    price: "50",
    type: "Home",
    colors: "White / Red",
    img: <CroaciaHomeShirt />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: true,
  },
  {
    id: 4,
    title: "Brazil Home 2002",
    price: "70",
    type: "Home",
    colors: "White / Yellow",
    img: <BrasilHomeShirt02 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 5,
    title: "France Home 1998",
    price: "70",
    type: "Home",
    colors: "Blue / Red / White",
    img: <FranceHomeShirt98 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 6,
    title: "Argentina 1998 Away",
    price: "100",
    type: "Away",
    colors: "Navy Blue / White",
    img: <ArgentinaHomeShirt02 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 7,
    title: "Mexico 1998 Home",
    price: "120",
    type: "Home",
    colors: "Green / Red",
    img: <MexicoHomeShirt98 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 8,
    title: "Juventus 1996 Away",
    price: "120",
    type: "Away",
    colors: "Blue / Yellow",
    img: <JuventusAwayShirt96 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 9,
    title: "England 1998 Home",
    price: "120",
    type: "Home",
    colors: "White / Red",
    img: <EnglandHomeShirt98 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 10,
    title: "Germany 1990 Home",
    price: "120",
    type: "Home",
    colors: "White / Red / Yellow / Black",
    img: <AlemaniaHomeShirt90 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 11,
    title: "Croatia 1998 Home",
    price: "120",
    type: "Home",
    colors: "Blue / White / Red",

    img: <CroaciaHomeShirt98 />,
    newArrival: false,
    retro: true,
    premier: false,
    popular: false,
  },
  {
    id: 12,
    title: "Chelsea 2023 Home",
    price: "120",
    type: "Home",
    colors: "Blue ",

    img: <ChelseaHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: false,
  },
  {
    id: 13,
    title: "Tottenham 2023 Home",
    price: "120",
    type: "Home",
    colors: "White / Dark Blue / Yellow ",
    img: <TottenhamHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: true,
  },

  {
    id: 15,
    title: "Manchester United 2023 Home",
    price: "120",
    type: "Home",
    colors: "Red",

    img: <UnitedHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: false,
  },
  {
    id: 16,
    title: "Manchester City 2023 Home",
    price: "120",
    type: "Home",
    colors: "Sky Blue",

    img: <CityHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: true,
  },
  {
    id: 14,
    title: "Arsenal 2023 Home",
    price: "120",
    type: "Home",
    colors: "Red / White",

    img: <ArsenalHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: false,
  },
  {
    id: 17,
    title: "Brighton City 2023 Home",
    price: "120",
    type: "Home",
    colors: "Blue / Yellow / White",

    img: <BrightonHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: true,
  },
  {
    id: 18,
    title: "Chelsea  2023 Away",
    price: "120",
    type: "Away",
    colors: "White / Sky Blue",

    img: <ChelseaAwayShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: true,
  },
  {
    id: 19,
    title: "Tottenham  2023 Away",
    price: "120",
    type: "Away",
    colors: "Violet / Black ",

    img: <TottenhamAwayShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: false,
  },
  {
    id: 20,
    title: "Newcastle  2023 Home",
    price: "120",
    type: "Home",
    colors: "Black / White ",

    img: <NewcastleHomeShirt23 />,
    newArrival: false,
    retro: false,
    premier: true,
    popular: false,
  },
  {
    id: 21,
    title: "Germany  2022 Home",
    price: "120",
    type: "Home",
    colors: "Black / White ",

    img: <GermanyHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: false,
  },
  {
    id: 22,
    title: "Uruguay 2022 Home",
    price: "120",
    type: "Home",
    colors: "White / Sky Blue",

    img: <UruguayHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: true,
  },
  {
    id: 23,
    title: "Morocco 2022 Home",
    price: "120",
    type: "Home",
    colors: "Red / Green ",

    img: <MarruecosHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: false,
  },
  {
    id: 24,
    title: "Spain 2022 Home",
    price: "120",
    type: "Home",
    colors: "Red",

    img: <SpainHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: false,
  },
  {
    id: 25,
    title: "England 2022 Home",
    price: "120",
    type: "Home",
    colors: "White / Blue / Sky Blue",

    img: <EnglandHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: true,
  },
  {
    id: 26,
    title: "France 2022 Home",
    price: "120",
    type: "Home",
    colors: "Navy Blue",
    img: <FranceHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: false,
  },
  {
    id: 27,
    title: "Brazil 2022 Home",
    price: "120",
    type: "Home",
    colors: "Yellow / Green / Violet",
    img: <BrasilHomeShirt22 />,
    newArrival: true,
    retro: false,
    premier: false,
    popular: false,
  },
];
