const aiController=require("../controllers/ai.controller")
const express=require("express");
const router=express.Router();

router.post("/get-review",aiController.getReview);


module.exports=router;