let express = require("express") ;
const app = express();
let port = 4000;
const {body ,validationResult}=require("express-validator")
require('dotenv').config()
let session = require("express-session")
const cookieParser = require("cookie-parser");
const router_index = require("./model/router/index")
const router_inscription = require("./model/router/inscription")
const router_profile =require("./model/router/router_Profile")



 const bodyParser = require("body-parser");
    const db =require("./BD/BD");
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    

app.use(express.json());
app.use(cookieParser());
app.use("/" ,router_index);
app.use("/" ,router_inscription)
app.use("/",router_profile)


const oneDay =1000*60*60*24 ;
app.use(session({
  secret:process.env.SECRET,
  
  saveUninitialized:true,
  cookies:{maxAge:oneDay},
  resave:false
  
}))

console.log(session)

app.set("views","./views")
app.set("view engine" ,"ejs")
app.use("/model" , express.static("model"))



  

app.listen( port ,()=>{
    console.log("ecoute sur le port 4000")
})