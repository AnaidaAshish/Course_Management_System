import { Router } from "express";
import { createCourse, deleteCourse, getCourseById, getCourses, updateCourse } from "../controllers/courseController.js";

const router = Router();

router.post("/", createCourse);
router.get("/", getCourses);
router.put("/:id", updateCourse);
router.get("/:id", getCourseById)
router.delete("/:id", deleteCourse);

export default router;