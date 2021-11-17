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
        "insert into users(username,password) values($1,$2)",
        [username, encryptedPassword]
      );

      return 1;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async hasUser({ user }) {
    try {
      const { username, password } = user;

      const rs = await pool.query("select * from users where username = $1", [
        username,
      ]);

      const [rsUser] = rs.rows;
      const isEqual = comparePassword(password, rsUser.password);

      return isEqual;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
