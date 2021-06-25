const express = require("express");
const {db} = require('../../db/models/index');
const sequelize = require ("sequelize")
const router = express.Router()
const {Favorites, User} = require("../../db/models/index");


router.get("/", (req,res,next)=>{
    Favorites.findAll()
    .then(favoritos=>res.status(200).json(favoritos))
});

router.get("/:id", (req,res,next)=>{
    const id = req.params.id
    Favorites.findByPk(id)
    .then(usuario=> res.status(200).json(usuario))
    .catch(next)
})

router.post("/",async (req,res,next)=>{
const favourite = await Favorites.create(req.body)
const user = await User.findByPk(req.body.userId)
//console.log(Object.keys(favourite.__proto__))
favourite.setUser(user)
res.json(favourite)
})

router.delete("/",(req,res,next)=>{
    Favorites.destroy({where:{imdbID:req.body.imdbID}})
    .then(()=>res.redirect("/favourite"))
})

module.exports= router;