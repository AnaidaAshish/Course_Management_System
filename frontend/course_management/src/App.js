import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import Home from "./components/Home";
import EditCourse from "./components/EditCourse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/edit-course/:id" element={<EditCourse />} />
        <Route path="/courses/new" element={<CourseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
