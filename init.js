import app from "./app";

const port = 3000;

const handleListening= () =>
    console.log(`Listening on : http://localhost:${port}`);

app.listen(port, handleListening);