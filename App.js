// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;
