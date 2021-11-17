const UserService = require("../services/user.service")

const userService = new UserService();

const userController = {}

userController.createUser = async (req, res) => {
    try {
        const { username, password } = req.body

        const response = await userService.createUser({ user: { username, password } })

        res.status(200).json(response)

    } catch (error) {
        throw new Error(error.message);
    }
}

userController.getUsers = async (req,res)=>{
    try {
        const response = await userService.getUsers();
        res.status(200).json(response)
    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = userController