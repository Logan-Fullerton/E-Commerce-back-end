// Load the environment variables from the .env file
require('dotenv').config();

// Import the Sequelize library
const Sequelize = require('sequelize');

// Create a new Sequelize instance and configure it to connect to the MySQL database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // If JAWSDB_URL is set, use it to connect to the database
  : new Sequelize(
      process.env.DB_NAME, // Database name
      process.env.DB_USER, // Database username
      process.env.DB_PW, // Database password
      {
        host: 'localhost', // Database host
        dialect: 'mysql', // Database dialect
        dialectOptions: {
          decimalNumbers: true, // Enable support for decimal numbers
        },
      }
    );

// Export the sequelize object to be used in other parts of the application
module.exports = sequelize;
