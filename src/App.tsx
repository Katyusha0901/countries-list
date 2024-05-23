import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesObject } from "./RoutesObject";
import { MainPage } from "./components/MainPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path={RoutesObject.mainPage} element={<MainPage />}></Route>
      </Routes>
    </>
  );
}
