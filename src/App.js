import Navbar from "./components/Layout/Navbar/Navbar";
import "./App.css";
import Content from "./components/Layout/Content/Content";
import CourseList from "./components/Layout/Content/CourseList";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Register />} />
      </Routes>
      <div className="ekin"></div>
    </div>
  );
}

export default App;
