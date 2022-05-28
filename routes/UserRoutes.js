const router = require("express").Router();

const UserController = require("../controllers/UserController");

//Rota de POST
router.post("/register", UserController.register);

module.exports = router;
