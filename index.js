
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db"); 
const bodyParser = require('body-parser');
const http = require("http");
const mongoose = require("mongoose");
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());




connectDb();


app.use('/api', employeeRoutes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

