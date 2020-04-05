const express = require('express')
const router = express.Router();
const db = require('../../connection')

const UserController = require ('../../controllers/UserController')
const handlerController = require ('../../controllers/handlerController')

router.post('/user',UserController.create);
router.get("/user", UserController.index);
router.get("/user/:id", UserController.user);
router.patch("/user/:id", UserController.change);
router.delete("/user/:id", UserController.delete);

router.post('/handler',handlerController.create);
router.get("/handler", handlerController.index);
router.get("/handler/:id", handlerController.handler);
router.patch("/handler/:id", handlerController.change);
router.delete("/handler/:id", handlerController.delete);


module.exports = router; 