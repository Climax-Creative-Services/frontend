import Navbar from "./components/Layout/Navbar/Navbar";
import "./App.css";
import Content from "./components/Layout/Content/Content";
import CourseList from "./components/Layout/Content/CourseList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <CourseList />
      <div className="ekin"></div>
    </div>
  );
}

export default App;
