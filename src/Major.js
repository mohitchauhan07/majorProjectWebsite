import React from "react";
import Navbar from "./modules/navbar";
import Approach from "./modules/approach";
import Code from './modules/code';
import Banner from './modules/banner'
import FutureScope from "./modules/futureScope";
import Footer from "./modules/footer";
import "./index.css";

const Major = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Approach />
      <Code/>
      <FutureScope/>
      <Footer/>
    </>
  );
};
export default Major;
