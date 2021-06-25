const db = require("../db.js");
const S = require("sequelize");

class Favorites extends S.Model {}

Favorites.init(
  {
    Title: {
      type: S.STRING,
    },
    Year: {
      type: S.INTEGER,
    },
    imdbID: {
      type: S.STRING,
    },
    Type: {
      type: S.STRING,
    },
    Poster: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorites;
