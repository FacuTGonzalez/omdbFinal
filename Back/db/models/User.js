const db = require("../db.js");
const S = require("sequelize");
const bcrypt = require ("bcrypt")

class User extends S.Model {hash(password, salt) {
  return bcrypt.hash(password, salt);
}}

User.init({
  name: {
    type: S.STRING,
    allowNull: true,
  },
  email: {
    type: S.STRING(40),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: S.STRING,
    validate: {
      len: {
        args: [7, 42],
        msg: "The password length should be between 7 and 42 characters.",
      },
    },
  },
  salt:{
    type:S.STRING,
  }
  
},{ sequelize : db, modelName: 'user' });

 User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      console.log(salt)
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
}); 

module.exports= User;
