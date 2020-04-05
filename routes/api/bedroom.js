const express = require('express')
const router = express.Router();
const db = require('../../connection')

const UserController = require ('../../controllers/UserController')

router.post('/user',UserController.create);

router.get("/user", UserController.index);
router.get("/user/:id", UserController.user);
router.patch("/user/:id", UserController.change);
router.delete("/user/:id", UserController.delete);


module.exports = router;