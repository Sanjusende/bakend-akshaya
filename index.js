const express = require("express");
const dotenv = require("dotenv");
var  cors = require('cors')
const bodyParser=require("body-parser");

const { databaseConnection,blog } = require('./Connection/Database');

dotenv.config();

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection ko ek baar hi call karna hai
databaseConnection();
const port = process.env.PORT;

// All routes are insert
const blogRouter = require("./Routes/blog");


app.get("/", (req, res) => {
    res.send("this is a learning session app");
})

// Use all routers
app.use(blogRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})