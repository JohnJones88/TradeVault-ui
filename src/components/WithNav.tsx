import React from "react";
import { NavBar } from './Navbar'
import { Outlet } from "react-router-dom";
//import Navbar from 'react-bootstrap/Navbar';


export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};