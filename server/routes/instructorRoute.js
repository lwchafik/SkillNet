const express = require('express')
const instructor = require('../controllers/instructorController')
const prisma = require('../database')

const router = express.Router()

router.get('/', instructor.getInstructors)
router.get('/:id', instructor.getInstructor)
router.post('/', instructor.createInstructor)
router.post('/many', instructor.createMany)
router.put('/:id', instructor.updateInstructor)
router.delete('/:id', instructor.deleteInstructor)
router.delete('/', async (req, res) => {
  await prisma.instructor.deleteMany()

  res.status(200).json({message: 'instructors deleted success'})
})

module.exports = router;