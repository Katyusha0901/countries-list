import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesObject } from "./RoutesObject";
import { MainPage } from "./components/MainPage";
import { useEffect, useState } from "react";

export function App() {
  const [allComments, setAllComments] = useState<Comment[]>([]);
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setAllComments(data);
        setVisibleComments(data.slice(0, 100));
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);

  return (
    <>
      <Routes>
        <Route path={RoutesObject.mainPage} element={<MainPage />}></Route>
      </Routes>
    </>
  );
}
