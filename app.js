const express = require("express");
const path = require("path"); 
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
  res.status(200).send("This is home page");
});

app.get("/demo", (req, res) => {
  res.status(200).render('demo', { title: 'Hey Farhan', message: 'Hello there! Thanks for telling me how to use Pug' });
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.post("/about", (req, res) => {
  res.send("This is post request in about page");
});

app.post("/this", (req, res) => {
  res.status(404).send("This page is not found.");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
