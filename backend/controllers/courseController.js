import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  const { name, description, instructor } = req.body;

  if (!name || !description || !instructor) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const course = await Course.create({ name, description, instructor });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { name, description, instructor } = req.body;

  if (!name || !description || !instructor) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const course = await Course.findByIdAndUpdate(
      id,
      { name, description, instructor },
      { new: true }
    );
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    await Course.findByIdAndDelete(id);
    res.json({ message: "Course deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};