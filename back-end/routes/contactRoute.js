const express = require("express");
const validator = require("validator");
const prisma = require("../database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await prisma.contacts.findMany();

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const message = await prisma.contacts.findUnique({
      where: { id: req.params.id },
    });

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { email, subject, comment } = req.body;

    // check if the email is correct
    if (!validator.isEmail(email)) {
      throw new Error("Invalid Email format");
    }

    const contact = await prisma.contacts.create({
      data: { email, subject, comment },
    });

    res.status(201).json({
      message: "Your comment was sent successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
});

// newsletter routes handling

router.post("/emails", async (req, res) => {
  try {
    const { email } = req.body;

    // chech the email is correct
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email format");
    }

    await prisma.emails.create({
      data: { email },
    });

    res
      .status(201)
      .json({
        message: "you have been successfully signed up to our newsletter",
      });
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
});

router.get("/emails", async (req, res) => {
  try {
    const emails = await prisma.emails.findMany();

    res.status(200).json(emails);
  } catch (err) {
    res.status(500).json({ error: "Something bad happened" });
    console.error(err.message);
  }
});

module.exports = router;
