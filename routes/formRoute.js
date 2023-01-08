const express=require("express");
const { getAllFormData } = require("../controller/formController");


const router=express.Router()

router.route('/').get(getAllFormData)


module.exports = router;