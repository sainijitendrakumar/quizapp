const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const auth = require('../middleware/auth');
const User = require('../models/User');


// Get all questions (public)
// router.get('/', async (req, res) => {
// const questions = await Question.find(); // hide answers
// res.json(questions);
// });


// Admin: create question
router.post('/', auth, async (req, res) => {
const user = await User.findById(req.user.id);
if (!user || user.role !== 'admin') return res.status(403).json({ msg: 'Forbidden' });
const q = new Question(req.body);
await q.save();
res.json(q);
});

router.get("/:subject", async (req, res) => {
  try {
    const subject = req.params.subject;
    const questions = await Question.find({ subject });
    res.json(questions);
  } catch (err) {
    res.status(500).send("Server error");
  }
});


// Admin: delete
router.delete('/:id', auth, async (req, res) => {
const user = await User.findById(req.user.id);
if (!user || user.role !== 'admin') return res.status(403).json({ msg: 'Forbidden' });
await Question.findByIdAndDelete(req.params.id);
res.json({ msg: 'Deleted' });
});


module.exports = router;