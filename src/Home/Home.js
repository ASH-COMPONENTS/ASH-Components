import React from "react";
import { Error } from "../components/Error/Error";
import NavgationBar from "../components/navgation_bar/NavgationBar";

export const Home = () => {
  return (
    <div>
      <NavgationBar />
      <Error />
    </div>
  );
};
