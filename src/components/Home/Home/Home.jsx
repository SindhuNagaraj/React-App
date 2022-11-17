import Departments from "components/Departments/Departments";
import React from "react";
import Banner from "../Banner/Banner";
import Intro from "../Intro/Intro";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <Departments></Departments>
  </div>
  );
};

export default Home;
