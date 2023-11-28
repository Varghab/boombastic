const mongoose = require('mongoose');

const connectToDatabase = async () =>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        console.log("Connected to DB!");
    })
}

module.exports = connectToDatabase