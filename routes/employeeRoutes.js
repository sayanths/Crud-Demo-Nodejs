
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Create a new employee
router.post('/create', employeeController.createEmployee);

// Get all employees
router.get('/employees', employeeController.getEmployees);

// Get an employee by ID
router.get('/employees/:id', employeeController.getEmployeeById);

// Update an employee by ID
router.put('/employees/:id', employeeController.updateEmployee);

// Delete an employee by ID
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
