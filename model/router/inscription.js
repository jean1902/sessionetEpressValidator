let express = require("express")
 const router = express.Router();
 let jwt =require('jsonwebtoken');
let bcrypt = require('bcryptjs');

 router.get("/inscription" ,(req,res)=>{
    res.render("../views/index")
 })
 module.exports=router;