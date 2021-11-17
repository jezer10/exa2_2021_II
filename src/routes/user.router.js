const { Router } = require("express")

const userRouter = Router()

const { createUser, getUsers } = require("../controllers/user.controller")


userRouter.get("/", getUsers)

userRouter.post("/", createUser)


module.exports = userRouter