const express = require('express');
const controller = require('../controller/user');

const router = express.Router();

router.get("/total_user",controller.totalUser);

router.route("/")
.get(controller.allUser)
.post(controller.addUser);

router.route("/:id")
.get(controller.userById)
.delete(controller.deleteUser);

module.exports=router;
