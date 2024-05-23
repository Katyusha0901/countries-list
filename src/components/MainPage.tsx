import React from "react";
import { Country } from "../types";


interface Props {
  countries: Country[];
  visibleCountries: Country[];
  setVisibleCountries: (value: React.SetStateAction<Country[]>) => void;
}

export const MainPage: React.FC<Props> = ({
  countries,
  visibleCountries,
  setVisibleCountries,
}) => {
  return <div></div>;
};
