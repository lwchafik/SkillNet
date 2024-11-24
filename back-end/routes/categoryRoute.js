const express = require('express')
const prisma = require('../database')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany()
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json({error: "Something bad happened"})
    console.error(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: {id: req.params.id}
    })

    res.status(200).json(category)
  } catch (err) {
    res.status(500).json({error: "Something bad happened"})
    console.error(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const {title} = req.body;
    const category = await prisma.category.create({
      data: {title}
    })
    res.status(201).json(category)
  } catch (err) {
    res.status(500).json({error: 'Something bad happened'})
    console.error(err.message)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const {title} = req.body;
    const category = await prisma.category.update({
      where: {id: req.params.id},
      data: {title}
    })

    res.status(200).json(category)
  } catch (err) {
    res.status(500).json({error: "Something bad happened"})
    console.error(err.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const category = await prisma.category.delete({
      where: {id: req.params.id}
    })

    res.status(200).json({
      message: "Category deleted successfully"
    })
  } catch (err) {
    res.status(500).json({error: "Something bad happened"})
    console.error(err.message)
  }
})

module.exports = router;