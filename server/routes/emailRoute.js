const express = require('express')
const validator = require('validator')
const prisma = require('../database')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const emails = await prisma.emails.findMany();

    res.status(200).json(emails);
  } catch (err) {
    res.status(500).json({message: 'Something bad happen'})
    console.error(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const {email} = req.body;

    if (!validator.isEmail(email)) {
      throw new Error('invalid email format')
    }

    const data = await prisma.emails.create({
      data: {email}
    })

    res.status(201).json({message: `you have been successfully subscribed to our newsletter as ${email}`})
    
  } catch (err) {
    res.status(500).json({message: 'Something bad happen'})
    console.error(err.message)
  }
})
module.exports = router;