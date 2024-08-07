import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from "./pages/home/HomePage";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogInPage from "./pages/logIn/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import ViewPage from "./pages/view/ViewPage";
import CreatePage from "./pages/create/CreatePage";
import WithoutNav from "./components/WithoutNav";
import WithNav from "./components/WithNav";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/' element={<LogInPage />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path='/home' element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path='/view' element={<PrivateRoute><ViewPage /></PrivateRoute>} />
          <Route path='/view/:id' element={<PrivateRoute><ViewPage /></PrivateRoute>} />
          <Route path='/create' element={<PrivateRoute><CreatePage /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
