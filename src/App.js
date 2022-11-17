import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact Us/Contact";
import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/departments" element={<Departments />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>  
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
