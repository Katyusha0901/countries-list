import React from "react";
import { Country } from "../types";
import List from "rc-virtual-list";


interface Props {
  countries: Country[];
  visibleCountries: Country[];
  setVisibleCountries: (value: React.SetStateAction<Country[]>) => void;
}

const windowHeight: number = window.innerHeight - 25;
let isChangedVisibleComments: boolean = false;

export const MainPage: React.FC<Props> = ({
  countries,
  visibleCountries,
  setVisibleCountries,
}) => {
  function onScroll(virtualScroll: { x: number; y: number }) {
    if (visibleCountries.length === countries.length) {
      return;
    }

    const additionalComments = countries.slice(
      visibleCountries.length,
      visibleCountries.length + 50
    );
    const lengthOfRemainingList: number =
    visibleCountries.length * 141 - virtualScroll.y - windowHeight;

    if (lengthOfRemainingList < 1000) {
      if (!isChangedVisibleComments) {
        setVisibleCountries([...visibleCountries, ...additionalComments]);
      }
    }
  }

  return <div></div>;
};
