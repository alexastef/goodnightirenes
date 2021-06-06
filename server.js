const express = require('express');
// const session = require('session');
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const db = require('./models');

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

