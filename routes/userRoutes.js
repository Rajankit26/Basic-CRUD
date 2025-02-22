const express = require('express');

const {
    home,
    createUser,
    getUser,
    updateUser
} = require("../controllers/userController.js")
const router = express.Router();

router.get('/',home)
router.post('/createUser',createUser)
router.get('/getUser',getUser)
router.put('/updateUser/:id',updateUser)
module.exports = router;