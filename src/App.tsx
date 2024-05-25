import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { MainPage } from "./components/MainPage";
import { useEffect, useState } from "react";
import { Country } from "./types";
import { CountryPage } from "./components/CountryPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";

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
          path={routes.home}
          element={
            <MainPage
              countries={allCountries}
              visibleCountries={visibleCountries}
              setVisibleCountries={setVisibleCountries}
            />
          }
        ></Route>
        <Route
          path={routes.country()}
          element={<CountryPage countries={allCountries} />}
        ></Route>
        <Route
          path={"*"}
          element={<Navigate to={routes.home} replace />}
        ></Route>
      </Routes>
    </>
  );
}
