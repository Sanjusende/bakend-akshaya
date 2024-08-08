const mongoose = require("mongoose");


const databaseConnection = () =>{
let url=process.env.mongoUrl;

mongoose.connect(url).then(()=>{
console.log("database is connected succesfully")
}).catch((e)=>{
    console.log("database is not connected",e.message);
})
}

module.exports = {databaseConnection};


