export const home = (req,res) => res.send("Home");
// 이전처럼 함수의 인자는 req,res
// 이 함수의 응답값을 주기 위해 res.send('Home')라고 입력

export const search = (req,res) => res.send("Search");
// req,res를 함수인자로 받고 res.send('Search')로 리턴