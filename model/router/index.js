let express = require("express")
 const router = express.Router();
 const bodyParser = require("body-parser");
 const {body ,validationResult}=require("express-validator")
 var session;
  session = require("express-session")
 const db =require("../../BD/BD");
 var urlencodedParser = bodyParser.urlencoded({ extended: false })

 router.get("/" ,(req,res)=>{
 
   if(session.userid){
      res.redirect("/profile" )
     }else{
      res.render("../views/index" ,{err:{}})
     }

 })

 const validator = [
   body("username") // prend la valeur de  username
       .notEmpty()
       .escape()
       .trim()
       .isEmail()
   .withMessage( "The Password ou username incorrect  ")
       .notEmpty()
       .trim()
       .isLength({ min: 4 }),
]

 router.post("/",urlencodedParser,validator,(req,res)=>{

let { username, password} =req.body


  if(username && password){
      
      let sql =`SELECT * from user WHERE Nom=? AND password =?`
      db.query(sql,[username,password],function(error,results,fields){   
         const errors =validationResult(req);   // validation doit etre declare plus dans la variable ainsi qu une deuxieme variable dans les validateur
         if(!errors.isEmpty()){
            const Valid =errors.mapped();
            console.log(Valid)
            res.render('index',{err:Valid}) // ramener la meme page pour que cela puisse marcher
         }else{
            if(error){
               console.log(error)
            }
            console.log(results)
            if(results.length >0){
   
               // authentification de user avec session
               session.loggedin =true;
               res.render("/profile"  )
        
               
             
            }else{
              
             }
         }
        
         
       
       })
   }
 })
 module.exports=router;