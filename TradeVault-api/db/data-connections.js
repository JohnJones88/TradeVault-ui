const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('collectables_db', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, 
  dialect: 'mysql'
});

const connectToDb = async () => {
  try {
  
    sequelize.sync({ force: DB_FORCE_UPDATE });

    await sequelize.authenticate();
    console.log("Successfully connected to our db")

  } catch (error) {
    console.log(error)

  }
}

module.exports = { sequelize, connectToDb }