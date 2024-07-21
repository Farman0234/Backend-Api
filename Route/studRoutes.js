const express = require('express'); // Importing the Express module
const router = express.Router(); // Initializing the router object

const studController = require('../App/Apis/Controller/StudControllers'); // Importing the controller

router.post('/addStudent', studController.create)   
router.get('/getStudent', studController.getAll)
router.get('/oneStudent/:studid',studController.getOne)
router.put('/api/:studid',studController.getUpdate)
router.delete('/remove/:studid',studController.getDelete)


module.exports = router;