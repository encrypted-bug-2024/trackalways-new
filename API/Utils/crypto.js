const CryptoJS = require("crypto-js");
const bcrypt = require("bcrypt");

const decrypt = (cipherText) => {
  const decrypted = CryptoJS.AES.decrypt(cipherText, "secret_key").toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
};

const createHashed = async (password) => {
  const hashPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
  return hashPassword;
}

module.exports = { decrypt, createHashed };