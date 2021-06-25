const express = require("express");
const {db} = require('../../db/models/index');
const sequelize = require ("sequelize")
const router = express.Router()
const {User,Favorites} = require("../../db/models/index")
const passport = require ("passport")

router.get("/",(req,res,next)=>{
User.findAll()
.then((usuarios)=> res.status(200).json(usuarios))
.catch(next)
})

router.get("/:id/favourite",(req,res,next)=>{
const id = req.params.id
Favorites.findAll({where:{userId:id}})
.then(favoritosUser => res.json(favoritosUser))
.catch(next)
})

router.get("/:id",(req,res,next)=>{
    const id = req.params.id
    User.findByPk(id)
    .then(user=>res.status(200).json(user))
    .catch(next)
})


router.post("/register",(req,res,next)=>{
    User.create(req.body)
    .then(userCreado=>res.status(201).json(userCreado))
    .catch(next)
}) 

  router.post('/login',
  passport.authenticate('local'),
  async function(req, res) {
     
      const logeado = await User.findAll({where:{name:req.body.name}})
console.log("user logeado correctamente")
    res.send(logeado);

  });  

  router.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
  });

/*   router.post("/login", passport.authenticate("local"), function (req, res) {
    console.log("HOLAAAA",req.user);
    if (req.user) {
      res.send(`HOLAAAA`);
    } else {
      res.sendStatus(401);
    }
  }); */

module.exports= router;

