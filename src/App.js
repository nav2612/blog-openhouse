import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./main.js";
import Blogs from "./blog_post.js";
import Navbar from './navbar.js';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Mainpage/>} />
      <Route path='/blog_post' element={<Blogs/>} />
      </Routes>
    </Router></>
  );
}

export default App;
