// 모든 라우터 로직들은 userController나 videoController에 정의되어 있다.

import express from "express";
import routes from "../routes";
import {
    videos,
    uploads,
    videoDetail,
    editVideo,
    deleteVide
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.uploads, uploads);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVide, deleteVide);


export default videoRouter;