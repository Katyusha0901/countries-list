import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesObject } from "./RoutesObject";
import { MainPage } from "./components/MainPage";
import { useEffect, useState } from "react";
import { Country } from "./types";

export function App() {
  const [allCounties, setAllCountries] = useState<Country[]>([]);
  const [visibleCounties, setVisibleCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("./data/all.json")
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
        setVisibleCountries(data.slice(0, 150));
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path={RoutesObject.mainPage}
          element={
            <MainPage
              countries={allCounties}
              visibleCountries={visibleCounties}
              setVisibleCountries={setVisibleCountries}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
