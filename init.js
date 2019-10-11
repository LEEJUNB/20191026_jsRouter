import app from './app'; // app.js모듈을 불러옴

const PORT = 4000;
const handleListening = () => 
    console.log(`Listening on : http://localhost:${PORT}`);
app.listen(PORT, handleListening);