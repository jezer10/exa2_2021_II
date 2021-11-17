const pool = require("../db");

class PostService {
  async createPost({ post }) {
    try {
      const { title, description } = post;

      const rs = await pool.query(
        "insert into posts(title,description) values($1,$2)",
        [title, description]
      );

      return rs.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updatePost({ post }) {
    try {
      const { idpost, title, description } = post;
      const rs = await pool.query(
        "update posts set title = $1, description = $2 where idpost = $3",
        [title, description, idpost]
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePost({ idpost }) {
    try {
      const rs = await pool.query("delete from posts where idpost = $1", [
        idpost,
      ]);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPostsByIdUser({ idUser }) {
    try {
      const rs = await pool.query("select * from posts where iduser = $1", [
        idUser,
      ]);

      return rs.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PostService;
