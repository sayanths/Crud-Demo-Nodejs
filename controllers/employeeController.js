// controllers/employeeController.js

const Employee = require('../models/employee');

// Helper function to send responses
// Helper function to send responses
const sendResponse = (res, status, message) => {
  return res.status(status).json({ status, message });
};


// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, phoneNumber, gender, maritalStatus, job, age } = req.body;

    // Check if all required fields are present
    if (!name || !phoneNumber || !gender || !maritalStatus || !job || !age) {
      return sendResponse(res, 400, 'All fields are required');
    }

    const newEmployee = new Employee({ name, phoneNumber, gender, maritalStatus, job, age });
    const savedEmployee = await newEmployee.save();

    sendResponse(res, 201, 'Employee created successfully');
  } catch (error) {
    sendResponse(res, 500, 'Error creating employee', error.message);
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    sendResponse(res, 200, 'Employees fetched successfully', employees);
  } catch (error) {
    sendResponse(res, 500, 'Error fetching employees', error.message);
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return sendResponse(res, 404, 'Employee not found');
    }

    sendResponse(res, 200, 'Employee fetched successfully', employee);
  } catch (error) {
    sendResponse(res, 500, 'Error fetching employee', error.message);
  }
};

// Update an employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedEmployee) {
      return sendResponse(res, 404, 'Employee not found');
    }

    sendResponse(res, 200, 'Employee updated successfully', updatedEmployee);
  } catch (error) {
    sendResponse(res, 500, 'Error updating employee', error.message);
  }
};

// Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return sendResponse(res, 404, 'Employee not found');
    }

    sendResponse(res, 200, 'Employee deleted successfully');
  } catch (error) {
    sendResponse(res, 500, 'Error deleting employee', error.message);
  }
};