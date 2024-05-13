const User = require("./model");

const getUsers = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    material: req.body.material,
    quantity: req.body.quantity,
    price: req.body.price,
    date: req.body.date,
  });

  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const updateUser = (req, res, next) => {
  const id = req.body.id;
  const material = req.body.material;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const date = req.body.date;

  User.updateOne(
    { id: id },
    {
      $set: {
        material: material,
        quantity: quantity,
        price: price,
        date: date,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;

  User.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;


