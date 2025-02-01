import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    instructor: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourseData(res.data);
      } catch (error) {
        console.error("Error fetching course details", error.response.data);
      }
    };

    fetchCourse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/courses/${id}`, courseData);
      navigate("/courses"); // Redirect back to course list after update
    } catch (error) {
      console.error("Error updating course", error.response.data);
    }
  };

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const home = () => {
    navigate("/");
  };
  return (
    <div className="edit-course-container">
      <div>
        <button onClick={home}> Home</button>
      </div>
      <h1>Edit Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={courseData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={courseData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={courseData.instructor}
          onChange={handleChange}
        />
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
