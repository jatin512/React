import React from "react";
import web from "../src/images/rocket.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
        <Common 
        name='Grow your business with Jatin' 
        imgsrc={web} 
        visit="/service" 
        btnname="Get Strated"
        />      
    </>
  );
};

export default Home;
