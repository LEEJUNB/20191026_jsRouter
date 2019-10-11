import express from "express";
import morgan from "morgan"; // 로깅하기_모슨일을했는지 기록 어떤접속이고 어디에접속하는지알수있음
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()
const port = 4000;

const handleListening= () =>
    console.log(`Listening on : http://localhost:${port}`);

const handleHome = (req,res) => res.send("god Home!"); // 마지막 함수이기에 next키가 없다.
const handleProfile = (req,res) => res.send("What'up man");

app.use(cookieParser()); // 쿠키에 유저 정보를 저장한다. 왜냐? session을 다루기위해서
app.use(bodyParser.json()); // form을 다룰수있어야한다.
app.use(bodyParser.urlencoded()); // form을 다룰수있어야한다.
app.use(morgan("combined"));  // globally middleware
app.use(helmet());

const middleware = (req,res,next) => { // 미들웨어로 미들웨어 연결을 끊을수있다
    res.send("NoNoNo");
}

app.get("/",middleware,handleHome); // 미들웨어를 끊어보자
app.get("/profile",handleProfile);
app.listen(port, handleListening);