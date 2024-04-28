import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/HomePage";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SignInPage from "./pages/signIn/SignInPage";
import SignUpPage from "./pages/signUp/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">TradeVault</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Routes>
        <Route>
          <Route path='/' element={<SignUpPage />} />
          <Route path='/' element={<SignInPage />} />
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
