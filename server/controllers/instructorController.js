const prisma = require("../database");

exports.getInstructors = async (req, res) => {
  try {
    const instructors = await prisma.instructor.findMany();
    res.status(200).json(instructors);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.getInstructor = async (req, res) => {
  try {
    const instructor = await prisma.instructor.findUnique({
      where: { id: req.params.id },
      include: {
        Courses: {
          select: {
            title: true,
            category: { select: { title: true } },
            description: true,
          },
        },
      },
    });

    res.status(200).json(instructor);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.createInstructor = async (req, res) => {
  try {
    const { firstName, lastName, job, description } = req.body;
    const instructor = await prisma.instructor.create({
      data: { firstName, lastName, job, description },
    });
    res.status(201).json(instructor);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.createMany = async (req, res) => {
  try {
    const instructors = await prisma.instructor.createMany({
      data: req.body,
    });
    res.status(201).json(instructors);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.updateInstructor = async (req, res) => {
  try {
    const { firstName, lastName, job, description } = req.body;
    const instructor = await prisma.instructor.update({
      where: { id: req.params.id },
      data: { firstName, lastName, job, description },
    });

    res.status(200).json(instructor);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    const instructor = await prisma.instructor.delete({
      where: { id: req.params.id },
    });

    res.status(200).json({
      message: "Instructor deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
};
