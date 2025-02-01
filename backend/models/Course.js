import mongoose, { model, Schema } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
