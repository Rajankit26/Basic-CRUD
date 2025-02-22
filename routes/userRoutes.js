const express = require('express');

const {
    home,
    createUser,
    getUser
} = require("../controllers/userController.js")
const router = express.Router();

router.get('/',home)
router.post('/createUser',createUser)
router.get('/getUser',getUser)
module.exports = router;