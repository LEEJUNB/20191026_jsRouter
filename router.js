// route랑 분리해서 함수를 만드는 방법
import express from "express";
export const userRouter = express.Router(); // 1.

userRouter.get("/", (req,res) => res.send("user index")); // localhost:4000/user 접속시 사용됨
userRouter.get("/edit", (req,res) => res.send("user edit")); // localhost:4000/user/edit
userRouter.get("/password", (req,res) => res.send("user password")); // localhost:4000/user/password

// 이 라우터들을 어떻게 사용할까?. 라우터는 여러 라우트들이 담긴 파일. 
// 기존에는 app.js파일의 app.get("/",handleHome)처럼 handleHome과 같이 하나의 route를 쓰는 대신 라우터를 사용한다.
// 이를 위해 1. 처럼 현재 이 파일 router.js를 export해서 app.js파일에서 import하도록 만들자.
// 그러나 이 파일은 default로 export하지 않았다. 왜냐면, userRouter만 export하려고. 고로 이 파일을 import하려면 import { userRouter } from "./router";라고 입력해야한다.