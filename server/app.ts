import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"

import * as home from "./controllers/home.controller"

const corsOptions = {
  origin: process.env.VUE_URL
}

dotenv.config()

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/", home.index)
app.post("/analyze", home.analyze)

app.listen(app.get("port"), () => {
  console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"))
  console.log("Press CTRL-C to stop\n")
})

export default app
