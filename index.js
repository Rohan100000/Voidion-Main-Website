const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("assets"));

app.get("/",function(request,response){
  return response.render("index");
});
app.get("/home",function(request,response){
  return response.render("index");
});
app.get("/about",function(request,response){
  return response.render("about");
});
app.get("/contact",function(request,response){
  return response.render("contact");
});
app.get("/products",function(request,response){
  return response.render("products");
});
app.get("/services",function(request,response){
  return response.render("services");
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mrhawk360@gmail.com',
    pass: 'MRHAWK1916'
  }
});

const mailOptions = {
  from: 'mrhawk360@gmail.com',
  to: 'akjha418@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.listen(port, function (error) {
  if (error) {
    console.log("Error in running the server:", error);
  } else {
    console.log("Express server is running on port:", port);
  }
});
