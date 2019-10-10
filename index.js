import express from "express";
import morgan from "morgan";

const app = express()
const port = 4000;

const handleListening= () =>
    console.log(`Listening on : http://localhost:${port}`);

const handleHome = (req,res) => res.send("god Home!"); // 마지막 함수이기에 next키가 없다.
const handleProfile = (req,res) => res.send("What'up man");

const betweenHome = (req,res,next) =>  {
    console.log("I'm between");
    next();
};

app.use(betweenHome); // globally middleware

app.get("/",handleHome);
app.get("/profile",handleProfile);
app.listen(port, handleListening);