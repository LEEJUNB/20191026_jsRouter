import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("god Home!"); // 마지막 함수이기에 next키가 없다.
const handleProfile = (req,res) => res.send("What'up man");
const middleware = (req,res,next) => {
  res.send("중간에서 가로채기");
}

// 전역적 미들웨어
app.use(helmet()); // 노드 보안 미들웨어
app.use(cookieParser()); // 쿠키에 유저 정보를 저장한다. 왜냐? session을 다루기위해서
app.use(bodyParser.json()); // form을 다룰수있어야한다.
app.use(bodyParser.urlencoded({extended:true})); // form을 다룰수있어야한다.
app.use(morgan("dev"));  // 모든 것을 로깅(기록)하는 미들웨어

app.get("/",middleware,handleHome); // 미들웨어를 끊어보자
app.get("/profile",handleProfile);

export default app; // 누군가 내 파일을 불러 올 때 app 객체를 해준다는 의미. app 객체란 앞에서 설정한 app.use, app.get과 같은 큰 덩어리. 