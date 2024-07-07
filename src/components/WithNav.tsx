import React from "react";
//import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


export default () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};