const express = require("express");

const getUser = require("../../user/getUser");
const updateUser = require("../../user/updateUser");

const hendleJwtControler = require("../../middlewares/hendleJwtControler");
// const upload = require("../../middlewares/cloudinary/upload");

const router = express.Router();

router.get("/current", hendleJwtControler, getUser);

router.patch("/edit", hendleJwtControler, updateUser);

module.exports = router;
