import express from "express";
import morgan from "morgan"; // 로깅하기_모슨일을했는지 기록 어떤접속이고 어디에접속하는지알수있음
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; // default로 export한게 아니므로, 특정 라우터만 export했기에 이렇게 호출

const app = express();

const handleHome = (req,res) => res.send("god Home!"); // 마지막 함수이기에 next키가 없다.
const handleProfile = (req,res) => res.send("What'up man");

app.use(cookieParser()); // 쿠키에 유저 정보를 저장한다. 왜냐? session을 다루기위해서
app.use(bodyParser.json()); // form을 다룰수있어야한다.
app.use(bodyParser.urlencoded()); // form을 다룰수있어야한다.
app.use(morgan("combined"));
app.use(helmet());

app.get("/",handleHome);
app.get("/profile",handleProfile);
app.use("/user", userRouter); // app.use에서 use의 의미는 누군가 /user 경로에 접속하면 이 router전체를 사용하겠다는 의미이다. 그럼 어디에 사용될까? 바로 userRouter.get("/",..)에서.  왜냐하면 누군가 /user에 접속하면 router가 사용되기 때문

export default app;