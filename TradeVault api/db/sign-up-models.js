const { sequelize } = require('./data-connections');
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt');



const Signup = sequelize.define('signup', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  first_name: {
    type: DataTypes.STRING(64),
    allowNull: false
  },

  last_name: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
 
  email: {
    type: DataTypes.STRING(256),
    unique: true,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  
  password: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  }, {
  hooks: {
    
    beforeSave: async (signup, options) => {
     
      if (signup.isNewRecord || signup.changed('password')) {
        const saltRounds = 10;
        signup.password = await bcrypt.hash(signup.password, saltRounds);
      }
    }
  }
});


module.exports = Signup;