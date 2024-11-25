const express = require("express");
const course = require("../controllers/courseController");
const prisma = require("../database");

const router = express.Router();

router.get("/", course.getCourses);
router.get("/:id", course.getCourse);
router.post("/", course.createCourse);
router.post("/many", async (req, res) => {
  try {
    const courses = await prisma.course.createMany({
      data: req.body,
    });

    res.status(201).json({ message: "courses created successfully" });
  } catch (err) {
    res.status(500).json({message: 'Something bad happen'})
    console.log(err.message)
  }
});
router.put("/:id", course.updateCourse);
router.delete("/:id", course.deleteCourse);
router.delete("/", async (req, res) => {
  await prisma.course.deleteMany();

  res.status(200).json({ message: "courses deleted successfully" });
});

module.exports = router;
