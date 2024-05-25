import React from "react";
import { Country } from "../types";
import List from "rc-virtual-list";
import { Post } from "./Post";
import ListGroup from "react-bootstrap/ListGroup";
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
      return;
    }

    const additionalCountries = countries.slice(
      visibleCountries.length,
      visibleCountries.length + 50
    );

    const lengthOfRemainingList: number =
      visibleCountries.length * 55.2 - virtualScroll.y - windowHeight;

    if (lengthOfRemainingList < 1000) {
      setVisibleCountries([...visibleCountries, ...additionalCountries]);
    }
  }

  return (
    <ListGroup>
      <List
        data={visibleCountries}
        height={windowHeight}
        itemHeight={55.2}
        itemKey={(item) => item.name.common}
        onVirtualScroll={onScroll}
      >
        {(country) => (
          <ListGroup.Item>
            <Post countryInformation={country} />
          </ListGroup.Item>
        )}
      </List>
    </ListGroup>
  );
};
