const prisma = require("../database");

exports.getCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        category: { select: { title: true } },
        instructor: { select: { firstName: true, lastName: true } },
      },
    });
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await prisma.course.findUnique({
      where: {id: req.params.id}
    })

    res.status(200).json(course)
  } catch (err) {
    res.status(500).json({error: "Something bad happened"})
    console.error(err.message)
  }
}

exports.createCourse = async (req, res) => {
  try {
    const { title, description, price, categoryId, instructorId } = req.body;
    const course = await prisma.course.create({
      data: { title, description, price, categoryId, instructorId },
      include: {
        category: { select: { title: true } },
        instructor: { select: { firstName: true, lastName: true } },
      },
    });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { title, categoryId, description, price, instructorId } = req.body;
    const course = await prisma.course.update({
      where: {id: req.params.id},
      data: {title, categoryId, description, price, instructorId}
    })

    res.status(200).json(course)
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await prisma.course.delete({
      where: {id: req.params.id}
    }).then(() => res.status(200).json({
      message: "Course deleted successfully"
    }))
  } catch (err) {
    res.status(500).json({error: "Something bad happened"})
    console.error(err.message)
  }
}