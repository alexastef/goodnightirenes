const express = require('express');
// const menuController = require('./controller/menuController');

// const session = require('session');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const db = require('./models');

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.get("/api/beers", (req, res) => {
//   // res.json({ message: "Hello from server!"});
//   console.log("hitting beer route");
//   db.Beer.findAll()
//   .then(data => res.json(data))
//   .catch(err => res.status(500).json(err));
// });

db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

