import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || "8002";

app.listen(SERVER_PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${SERVER_PORT}`);
});
