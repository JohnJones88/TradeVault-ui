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

const hideNavBarPaths = ["/", "/signup"];

function App() {
  const [shouldShowNavBar, setShouldShowNavBar] = useState(hideNavBarPaths.find(x => x == window.location.pathname) == null);

  return (
    <BrowserRouter>
      {
        shouldShowNavBar && <div>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container className="bg-dark">
              <Navbar.Brand href="/home">TradeVault</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Login</Nav.Link>
                  <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      }
      <Routes>
        <Route>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/' element={<LogInPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/view/:id' element={<ViewPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
