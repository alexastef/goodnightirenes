const db = require('../models');
const Beers = db.Beers;

// get all beers
module.exports =  {
  findAll: (req, res) => {
    console.log("HITTING FINDALL CONTROLLER")
     Beers.findAll()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
  },
  // createOne: (req, res) => {
    
  // }
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