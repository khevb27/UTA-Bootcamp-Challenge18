const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req,res) {
        Thought.find()
        .then(async (thought)=> {
            const thoughtObj = {
                thought
            };
            return res.json(thoughtObj)
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err+ 'Try again ');
        });
    },
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .then(async (thought) => {
            !thought ? res.status(404).json({message: 'There is no student with this Id'})
            : res.json(thought)
        })
        .catch((err)=> {
            console.log(err);
            return res.status(500).json(err+ 'Try again');

        })
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                { $push: {thoughts: _id}},
                { new: true},
                
            )
          }).then((newThought)=> {
            res.json(newThought)
          })
          .catch((err) => res.status(500).json(err));
},
deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => res.json({thought,  message: 'thought and students deleted!' }))
      .catch((err) => res.status(500).json(err));
},
updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

addReaction(req,res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        { $addToSet: {reactions: req.body}},
        {runValidators: true, new: true}
    )
    .then((thought) => {
        res.json(thought)
    })
    .catch((err) => res.status(500).json("WROOOOOONG"))
  },

  deleteReaction(req,res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        { $pull: {reactions: {reactionId: req.params.reactionId}}},
        { new: true}
    )
    .then((newThought)=> {
        res.json(newThought)
    })
    .catch((err) => res.status(500).json("WROOOOOONG"))

  }
}