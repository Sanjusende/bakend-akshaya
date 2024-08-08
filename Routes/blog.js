const  express= require("express");
const Route=express.Router()
const {Creatblog,getallblogs,deletblog}= require("../Controller/blog")

Route.post("/blog",Creatblog);
Route.get("/blog",getallblogs);
Route.delete("/blog/:id",deletblog);







module.exports=Route;
