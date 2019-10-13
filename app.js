import express from "express";
import morgan from "morgan"; // 로깅하기_모슨일을했는지 기록 어떤접속이고 어디에접속하는지알수있음
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser()); // 쿠키에 유저 정보를 저장한다. 왜냐? session을 다루기위해서
app.use(bodyParser.json()); // form을 다룰수있어야한다.
app.use(bodyParser.urlencoded()); // form을 다룰수있어야한다.
app.use(morgan("combined"));
app.use(helmet());

app.use(routes.home,globalRouter);// global Router. root("/")가 될 것. 여긴 검색,홈 
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

export default app;