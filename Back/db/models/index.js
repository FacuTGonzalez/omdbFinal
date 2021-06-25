const User = require ("./User")
const Favorites = require ("./Favorites")
const db = require('../db')

Favorites.belongsTo(User)
User.hasMany(Favorites)

module.exports= {User,Favorites,db}