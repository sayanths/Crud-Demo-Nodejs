// models/employee.js

const mongoose = require('mongoose');

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  job: { type: String, required: true },
  age: { 
    type: Number, 
    required: true, 
    min: [18, 'Age must be at least 18'],
    max: [100, 'Age must be less than 100'],
  },  
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
