const express = require("express");
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();
// this way 
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal)
router.route('/:id').delete(deleteGoal)
//  or this way it means the same
// //------------  get method and route------------
// router.get("/", getGoals);
// // ---------------post method route-------------
// router.post("/", setGoal);
// // ---------------put method and route-------------------
// router.put("/:id", updateGoal);
// // -----------------delete method and route-------------------
// router.delete("/:id", deleteGoal);
module.exports = router;
