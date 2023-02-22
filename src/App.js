import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./main.js";
import Navbar from './navbar.js';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Mainpage/>} />
      </Routes>
    </Router></>
  );
}

export default App;
