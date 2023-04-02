

const router = require("express").Router();
// IMPORT
const { getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction,
} = require('../../controllers/Thought-controller');

// api/thoughts
router
.route('/')
.get(getAllThought)


// api/thoughts/:id
router
.route("/:userId")
.post(createThought)

// specific thought  /:thoughtId
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)

// 
router
.route('/userId/:thoughtId')
.delete(deleteThought);

// api/thoughts/:thoughtId/reaction
router.route("/:thoughtId/reaction")
.post(addReaction);

// reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;