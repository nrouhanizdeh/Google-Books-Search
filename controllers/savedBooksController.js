const db = require("../models");

module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.GoogleBooks.create(req.body)
      .then((dbModel) => {
        res.json(dbModel);
        console.log("saved the book");
      })
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.GoogleBooks.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.GoogleBooks.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.GoogleBooks.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
