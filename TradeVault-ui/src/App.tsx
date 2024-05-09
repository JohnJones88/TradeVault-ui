import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/HomePage";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogInPage from "./pages/logIn/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import ViewPage from "./pages/view/ViewPage";

const hideNavBarPaths = ["/", "/signup"];

function App() {
  const [shouldShowNavBar, setShouldShowNavBar] = useState(hideNavBarPaths.find(x => x == window.location.pathname) == null);

  return (
    <BrowserRouter>
      {
        shouldShowNavBar && <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <div>
              <Navbar.Brand href="#">TradeVault</Navbar.Brand>
            </div>
          </Navbar>
        </div>
      }
      <Routes>
        <Route>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/' element={<LogInPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/view' element={<ViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
