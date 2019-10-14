// routes.js에 있는 모든 로직 중 video에 관련된 것을 이곳에 옮김
// 그러나 routes.js를 import하진 않았다. 관련 로직을 옮겼을 뿐

export const home = (req,res) => res.send("Home");
// 이전처럼 함수의 인자는 req,res
// 이 함수의 응답값을 주기 위해 res.send('Home')라고 입력

export const search = (req,res) => res.send("Search");
// req,res를 함수인자로 받고 res.send('Search')로 리턴

export const videos = (req,res) => res.send("Videos");

export const upload = (req,res) => res.send("Upload");

export const videoDetail = (req,res) => res.send("Video Detail");

export const editVideo = (req,res) => res.send("Edit Video");

export const deleteVideo = (req,res) => res.send("Delete Video");