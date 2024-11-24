const express = require('express')
const course = require('../controllers/courseController')
const prisma = require('../database')

const router = express.Router()

router.get('/', course.getCourses)
router.get('/:id', course.getCourse)
router.post('/', course.createCourse)
router.post('/many', async (req, res) => {
  prisma.course.createMany({data: req.body}).then((courses) => res.status(201).json({message: 'courses created with sucess'}))
})
router.put('/:id', course.updateCourse)
router.delete('/:id', course.deleteCourse)
router.delete('/', async (req, res) => {
  await prisma.course.deleteMany()

  res.status(200).json({message: 'courses deleted successfully'})
})

module.exports = router;