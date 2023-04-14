let express = require("express")
 const router = express.Router();
 const bodyParser = require("body-parser");
 let session = require("express-session")
 const db =require("../../BD/BD");
 const index =require("./index");
 var urlencodedParser = bodyParser.urlencoded({ extended: false })

 router.get("/profile" ,(req,res)=>{
    if(req.session.loggedin){
        res.render('../views/profile')  
    }
    else{
        res.redirect('index')
    }
                                                                     

//  if (req.session) {
//   req.session.destroy()
//   res.json({result: 'SUCCESS'});
//   res.redirect('index')
// } else {
//   res.json({result: 'ERROR', message: 'User is not logged in.'});
// }
});
	
	

 module.exports = router;
