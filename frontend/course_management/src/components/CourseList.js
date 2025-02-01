import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Styles/CourseList.css";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      setCourses(courses.filter((course) => course._id !== id)); // Remove deleted course from UI
    } catch (error) {
      console.error("Error deleting course", error.response.data);
    }
  };

  const handleEdit = (courseId) => {
    navigate(`/edit-course/${courseId}`); // Navigate to edit page
  };

  const navigateToHome = () =>{
    navigate("/")
  }

  return (
    <div className="course-list-container">
      <button onClick={navigateToHome}>Home</button>
      <h1>Courses Available</h1>
      <div>
        <ul className="grid-container">
          {courses.map((course) => (
            <li key={course._id} className="course-item">
              <h2>{course.name}</h2>
              <p className="p">{course.description}</p>
              <p className="instructor">  Instructor: {course.instructor}</p>
              <button onClick={() => handleEdit(course._id)}>Edit</button>
              <button onClick={() => handleDelete(course._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
