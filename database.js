require('dotenv').config();
const mongoose=require("mongoose");
const express= require('express');
connectedDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("MongoDb Connected Successfully")

    }).catch((err)=>{
        console.log(err)
    })

}
module.exports=connectedDatabase;