const pool = require("../db");
const {
  comparePassword,
  encryptPassword,
} = require("../utils/passwordEncrypter");
class UserService {
  async createUser({ user }) {
    try {
      const { username, password } = user;
      const encryptedPassword = encryptPassword(password);
      const rs = await pool.query(
        "insert into users(username,password,status) values($1,$2,$3)",
        [username, encryptedPassword,true]
      );

      return 1;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUsers(){
    try {
      
      const rs = await pool.query("select * from users");
      
      return rs.rows;

    } catch (error) {
      throw new Error(error.message)
    }
  }

  async hasUser({ user }) {
    try {
      const { username, password } = user;

      const rs = await pool.query("select * from users where username = $1", [
        username,
      ]);

      const [rsUser] = rs.rows;
      return comparePassword(password, rsUser.password);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
