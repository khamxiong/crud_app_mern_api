const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @des get goals
// route Get/api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
  //   res.status(200).json({ message: "Get Gaols" });
});
// @des set goals
// route Post/api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
  //   res.status(200).json({ message: "Post Gaols" });
});
// @des update goals
// route Put/api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
  //   res.status(200).json({ message: `Update Gaols ${req.params.id}` });
});
// @des delete goals
// route Delete/api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      res.status(400)
      throw new Error('Goal not found')
    }
    // await goal.remove()
    await Goal.findByIdAndDelete(req.params.id)
  
    res.status(200).json({ id: req.params.id })
  })

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
