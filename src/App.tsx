import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from "./pages/home/HomePage";
import LogInPage from "./pages/logIn/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import ViewPage from "./pages/view/ViewPage";
import CreatePage from "./pages/create/CreatePage";
import SearchPage from "./pages/search/SearchPage";
import MyCollectionPage from "./pages/myCollection/MyCollectionPage";
import WithoutNav from "./components/navbar/WithoutNav";
import WithNav from "./components/navbar/WithNav";
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
          <Route path='/search' element={<PrivateRoute><SearchPage /></PrivateRoute>} />
          <Route path='/userCollection/:id' element={<PrivateRoute><MyCollectionPage /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
