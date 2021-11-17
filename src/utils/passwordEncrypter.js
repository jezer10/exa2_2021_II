const { compare, hash } = require("bcrypt");

const encryptPassword = async (password) => {
  try {
    return await hash(password, 10);
  } catch (error) {
    throw new Error(error.message);
  }
};

const comparePassword = async (password, encryptedPassword) => {
  try {
    return await compare(password, encryptedPassword);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  encryptPassword,
  comparePassword,
};
