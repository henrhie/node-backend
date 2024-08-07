const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', userController.login)

router.put('/update', userController.update)

router.get('/view/:id', userController.getData)

module.exports = router;
