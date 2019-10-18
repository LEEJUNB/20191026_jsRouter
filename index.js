const express = require('express');
const app = express();
const port = 3000;

function handleListening(){
    console.log(`Listenining on : http://localhost:${port}`);
}

function handleHome(req,res){
    console.log('This is homepage');
    res.send("resHome!!");
}

const handleProfile = (req,res) => res.send("Profile man");

const ParticialMid = (req,res,next) => {
    console.log("I'm particial Middle man");
    next();
};
const globalMid = (req,res,next) => {
    console.log("i'm globalMiddle man");
    next();
};

app.use(globalMid);

app.get("/profile", ParticialMid, handleProfile);

app.get("/",handleHome);

app.listen(port, handleListening);

