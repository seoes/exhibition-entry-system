import express from "express";
import * as router from "./routes";

const app = express();

app.use("/entry", router.entry);
app.use("/payment", router.payment);
app.use("/ticket", router.ticket);
app.use("/visitor", router.visitor);

export default app;
