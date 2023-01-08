const express=require("express");
const { getAllFormData, crateFormData } = require("../controller/formController");


const router=express.Router()

router.route('/new').post(crateFormData)
router.route('/forms').get(getAllFormData)


module.exports = router;