const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Result = require('../models/Result');


// Submit result
router.post('/', auth, async (req, res) => {
try {
const { score, total, answers, timeTaken } = req.body;
const result = new Result({ user: req.user.id, score, total, answers, timeTaken });
await result.save();
res.json(result);
} catch (err) {
res.status(500).send('Server error');
}
});


// Get user's results
router.get('/me', auth, async (req, res) => {
const results = await Result.find({ user: req.user.id });
res.json(results);
});


module.exports = router;