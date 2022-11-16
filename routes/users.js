const express = require("express");
const router = express.Router();
const UserController = require('../controllers/UserController');
const { authentication } = require("../middlewares/authentication");

router.post("/createUser",UserController.createUser)
router.post('/login',UserController.login)
router.get("/getInfo",authentication,UserController.getInfo)
router.delete("/logout",authentication,UserController.logout)
router.get("/getUserById/:_id",UserController.getUsersById)
router.get("/getUserByName/:name",UserController.getUsersByName)

module.exports = router;