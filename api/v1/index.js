import express from "express";
import winston from "winston";
import leadsRouter from "./routes/leads.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myformat = printf(({ level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({filename: "desafio_final-api.log"})
  ],
  format: combine(
      label({ label: "desafio_final-api"}),
      timestamp(),
      myformat
  )
});


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/leads", leadsRouter);
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.messege}`);
    res.status(400).send({error: err.message});
})

app.listen(5500, () => console.log("API started"));