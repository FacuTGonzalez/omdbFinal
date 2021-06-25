// server configs
const express = require("express");
const app = express();
const morgan = require("morgan");
//const routes = require("./api/routes");
const path = require("path");
const PORT = 3200;
const {db} = require('./db/models')

//configuracion passport
const cookieParser = require ("cookie-parser")
const session = require ("express-session")
const passport = require ("passport")
const LocalStrategy = require ("passport-local").Strategy

//Rutas
//const moviesRutes = require("./api/routes/moviesRoutes")
const router = require('../Back/api/routes')


//Model
const {User} = require ("./db/models/index") 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser()); // popula req.cookie;
app.use(session({ secret: "omdb" , resave:true , saveUninitialized: true})) // popula req.session
app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({where:{ email} })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});

app.use('/api',router)

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); 

app.use((err, req, res, next) => {   res.sendStatus(404).send(err) })

db.sync({force:false}).then(() => {
  // { force: true }
  app.listen(PORT, () => {
    console.log("Escuchando en el puerto ", PORT);
  });
});


/* {
    "Title": "Batman Begins",
"Year": "2005",
"imdbID": "tt0372784",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
"userId":null
} */
