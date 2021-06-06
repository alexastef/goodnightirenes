const db = require('../models');
const Beer = db.Beer;

// get all beers
module.exports =  {
  findAll: (req, res) => {
    Beer.findAll()
      .then(data => res.send(data))
      .catch(err => res.status(500).send({
        message: err.message || "Some error occurred while retrieving the beer list"
    }));
  },
  createOne: (req, res) => {
    
  }
};

// add new beer
// exports.create = (req, res) => {

// };

// // update beer by id
// exports.update = (req, res) => {

// };

// // delete beer by id
// exports.delete = (req, res) => {

// };