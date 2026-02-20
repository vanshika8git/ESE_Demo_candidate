//it has database schema


const mongoose = require('mongoose');


  const employeeSchema = new mongoose.Schema({
    name: String,
    role: String,
    salary: Number
  });

  module.exports = mongoose.model("Employee", employeeSchema);
  //export so we can use it in other files using require