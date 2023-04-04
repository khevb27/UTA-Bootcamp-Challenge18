const { ObjectId } = require('mongoose').Types;
const User = require('../models/User')
module.exports = {

    getUsers(req,res) {
        User.find()
        .then(async (users)=> {
            const userObj = {
                users
            };
            return res.json(userObj)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err+ 'YOU MESSED UP');
        });
    },
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then(async (user) => {
            !user ? res.status(404).json({message: 'There is no student with this Id'})
            : res.json(user)
        })
        .catch((err)=> {
            console.log(err);
            return res.status(500).json(err+ 'YOU MESSED UP');

        })
    },
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));


},
deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => res.json({user,  message: 'user was successfully deleted!' }))
      .catch((err) => res.status(500).json(err));
},
updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req,res) {
    console.log(req.params.friendId);

    User.findOneAndUpdate(
        {_id: req.params.userId},
        { $addToSet: {friends: req.params.friendId}},
        { runValidators: true, new: true}
    )
  

    .then((user) => {
        res.json(user)
    })
    .catch((err) => res.status(500).json("WROOOOOONG"))
  },
  deleteFriend(req,res) {
    User.findOneAndUpdate(
        {_id: req.params.userId},
        { $pull: {friends: req.params.friendId}},
        { new: true}
    )
    .then((user) => {
        res.json(user)
    })
    .catch((err) => res.status(500).json("WROOOOOONG"))
  }
}