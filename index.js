import express from "express";
const app = express()
const port = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${port}`);
}

const handleHome = (req,res) => res.send("god Home!");

const handleProfile = (req,res) => res.send("What'up man");

app.get("/",handleHome);

app.get("/profile",handleProfile);

app.listen(port, handleListening);