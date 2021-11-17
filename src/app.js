const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const userRouter = require("./routes/user.router")


const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Wrld!");
})


app.use("/users", userRouter)

app.use((err, req, res, next) => {
    
})

module.exports = app