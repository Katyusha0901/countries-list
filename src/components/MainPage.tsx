import React from "react";
import { Country } from "../types";
import List from "rc-virtual-list";
import { Post } from "./Post";

interface Props {
  countries: Country[];
  visibleCountries: Country[];
  setVisibleCountries: (value: React.SetStateAction<Country[]>) => void;
}

const windowHeight: number = window.innerHeight - 15;

export const MainPage: React.FC<Props> = ({
  countries,
  visibleCountries,
  setVisibleCountries,
}) => {
  function onScroll(virtualScroll: { x: number; y: number }) {
    if (visibleCountries.length === countries.length) {
      console.log(visibleCountries);

      return;
    }

    const additionalCountries = countries.slice(
      visibleCountries.length,
      visibleCountries.length + 50
    );

    const lengthOfRemainingList: number =
      visibleCountries.length * 18.4 - virtualScroll.y - windowHeight;

    if (lengthOfRemainingList < 1000) {
      setVisibleCountries([...visibleCountries, ...additionalCountries]);
    }
    console.log(visibleCountries[visibleCountries.length - 1]);
  }

  return (
    <List
      data={visibleCountries}
      height={windowHeight}
      itemHeight={18.4}
      itemKey="country.name.common"
      onVirtualScroll={onScroll}
    >
      {(country) => (
        <Post key={country.name.common} countryInformation={country} />
      )}
    </List>
  );
};
