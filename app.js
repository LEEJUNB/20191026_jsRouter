import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";

const app = express();

const PORT = 3000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req,res) => {
    console.log("Homepage");
    res.send("Last function!"); 
}

const handleProfile = (req,res) => res.send("Profile Page");

const betweenHome = (req,res,next) => {
    res.send("Middleware function");
    next();
}

// 전역적미들웨어
app.use(betweenHome);
app.use(helmet);
app.use(morgan("dev"));
app.use(bodyparser);
app.use(cookieparser);

app.get("/", handleHome);
app.get("/profile",handleProfile);

app.listen(PORT, handleListening);