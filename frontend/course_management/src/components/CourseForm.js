import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Styles/CourseForm.css";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructor: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/courses",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      navigate("/courses"); // Redirect to courses page after creation
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={navigateHome}>Home</button>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Instructor"
            value={formData.instructor}
            onChange={(e) =>
              setFormData({ ...formData, instructor: e.target.value })
            }
          />
          <button type="submit">Create Course</button>
        </form>
      </div>
    </>
  );
};

export default CourseForm;
