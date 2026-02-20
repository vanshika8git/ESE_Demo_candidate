const express=  require('express');
const mongoose = require('mongoose');  //database connection
const Employee = require('./models/employee');
const employeeRoutes = require("./routes/employeeRoutes");
require('dotenv').config(); //bs 1 method chiye, config dotenv ka, so ese likha, this tells to take credentials from .env
const app = express();

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());    //to parse JSON bodies
//"If request body is in JSON format, convert it into JavaScript object."JSON is undefined in it.


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is now Connected"))
  .catch((err) => console.log(err));

  
app.use("/api", employeeRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});