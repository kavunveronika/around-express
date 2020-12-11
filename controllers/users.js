const User = require('../models/user');

module.exports.getUsers = (req, res) => {
    res.send("in controller")
/*    User.find({})
    console.log("going into the controller")
     .then(users => res.send({ data: users }))
     .catch(() => res.status(500).send({ message: 'Error occured on the server' }));
*/};

 module.exports.getUser = (req, res) => {
     const { userId } = req.params;
     User.find({_id:userId})
     .then(users => res.send({ data: users }))
     .catch(() => res.status(500).send({ message: 'Error occured on the server' }));
 }
 
 module.exports.createUser = (req, res) => {
   const { name, about, avatar } = req.body;
   User.create({ name, about, avatar })
     .then(user => res.send({ data: user }))
     .catch(() => res.status(500).send({ message: 'Error occured on the server' }));
 }