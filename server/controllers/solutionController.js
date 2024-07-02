const Solution = require('../models/Solution');

const getSolutions = async (req, res) => {
  try {
    const solutions = await Solution.find();
    res.json(solutions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSolutions };
