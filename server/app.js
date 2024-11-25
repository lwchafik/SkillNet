const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/client/dist`));

//
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`);
});

// routes
app.use("/instructors", require("./routes/instructorRoute"));
app.use("/courses", require("./routes/courseRoute"));
app.use("/category", require("./routes/categoryRoute"));
app.use("/contact-form", require("./routes/contactRoute"));

// running server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
