import { Routes, Route } from "react-router-dom";
import { RoutesObject } from "./RoutesObject";
import { MainPage } from "./components/MainPage";
import { useEffect, useState } from "react";
import { Country } from "./types";
import { CountryPage } from "./components/CountryPage";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [visibleCountries, setVisibleCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
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
              countries={allCountries}
              visibleCountries={visibleCountries}
              setVisibleCountries={setVisibleCountries}
            />
          }
        ></Route>
        <Route
          path={RoutesObject.countryPage}
          element={<CountryPage countries={allCountries} />}
        ></Route>
      </Routes>
    </>
  );
}
