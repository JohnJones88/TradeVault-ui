const { sequelize } = require('./data-connections');
const { DataTypes } = require('sequelize')

const Collectables = sequelize.define('collectables', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false

  },
  description:{
    type: DataTypes.STRING(64),
    allowNull: false
  },
  age:{
    type: DataTypes.INTEGER,
    allowNull: false
  }

})


module.exports = Collectables;