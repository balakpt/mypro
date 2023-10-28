const express=require('express');
const mysql=require("mysql");
const doenv=require("dotenv");
const path= require("path");
const app=express();

doenv.config({
    path:'./.env',
});

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,//'sql12.freesqldatabase.com',
    user:process.env.DATABASE_USER,//'sql12657188',
    password:process.env.DATABASE_PASS,//'czgnBL9GDR',
    database:process.env.DATABASE,//'sql12657188' 
});

db.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("hi due connected is sucsscefull");
    }
});

app.get("/",(req,res)=>{
    res.send("<h1> how are you dude </h1>");
});

app.listen(5000, () => {
    console.log("Server started @ Port 5000");
});
