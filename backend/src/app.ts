import express from "express";
import cors from "cors";
import * as router from "./routes";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(express.json());

app.use("/entry", router.entry);
app.use("/payment", router.payment);
app.use("/ticket", router.ticket);
app.use("/visitor", router.visitor);

// 방문객 등록
// 결제 후 티켓 생성
// 입장

export default app;
