const express = require('express')
const router = express.Router(); //router.get('/', getGoals);
const {getGoals,
       setGoal,
       updateGoal,
       deleteGoal} = require('../controllers/goalController') 
       const { protect } = require('../middleware/authMiddleware')

       

 //thi's the route(s) to get and to be sent to certain endpoints    
 router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)  
/*router.get('/',getGoals),router.post('/',setGoal) this 2 lines lines of code have 
been replaced by the single line of code above we call this tying code together*/ 


module.exports = router; 
