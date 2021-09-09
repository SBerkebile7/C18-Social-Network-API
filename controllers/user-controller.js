const { Thought, User } = require('../models');

const thoughtController = {
    addComment({ params, body }, res) {
        console.log(params);
        Comment.create(body)
        .then(({ _id }) => {
            return Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { comments: _id } },
            { new: true }
            );
        })
        .then(dbPizzaData => {
            console.log(dbPizzaData);
            if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.json(err));
    },
    addReaction() {
        
    },
    removeComment() {

    },
    removeReply() {

    }
}

module.exports = thoughtController;