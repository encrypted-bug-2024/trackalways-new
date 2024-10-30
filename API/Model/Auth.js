"use strict";

const sql = require("mssql");
const { poolPromise } = require("../dbconfig");
const { now } = require("../Utils/dateTime");

const findUser = async (email) => {
  try {
    let pool = await poolPromise;

    const queryy = `
    SELECT 
      id,
      name,
      username,
      email,
      password,
      is_active,
      isFirstLogin
    FROM dbo.users
    WHERE email = @email;
    `;

    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(queryy);
    // console.log(result.recordset);
    return result.recordset[0];
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

const createUser = async (name, email, password, username) => {
  try {
    let pool = await poolPromise;

    const queryy = `
    INSERT INTO dbo.users 
    (
      name,
      username,
      email,
      password,
      is_active,
      created_by,
      created_at,
      isFirstLogin
    )
    VALUES
    (
      @name,
      @username,
      @email,
      @password,
      @is_active,
      @created_by,
      @created_at,
      @isFirstLogin
    )
    `;

    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("username", sql.VarChar, username)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .input("is_active", sql.Bit, 1)
      .input("isFirstLogin", sql.Bit, 1)
      .input("created_by", sql.VarChar, "admin")
      .input("created_at", sql.DateTime, now())
      .query(queryy);

    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

const fetchUsers = async () => {
  try {
    let pool = await poolPromise;

    const queryy = `
    SELECT 
      id,
      name,
      username,
      email,
      is_active,
      created_at
    FROM dbo.users
    ORDER BY created_at ASC;
    `;

    const result = await pool
      .request()
      .query(queryy);

    // console.log(result.recordset);
    return result.recordset;
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

const updateUser = async (id, is_active) => {
  try {
    let pool = await poolPromise;

    const queryy = `
    UPDATE dbo.users
      SET is_active = @is_active
    WHERE id = @id;
    `;

    const result = await pool
      .request()
      .input("id", sql.BigInt, id)
      .input("is_active", sql.Bit, is_active)
      .query(queryy);

    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

const fetchUserIdResetToken = async (token) => {
  try {
    let pool = await poolPromise;
    const queryy = `
      SELECT user_id, expire
      FROM reset_password_token
      WHERE token = @token
    `;
    const result = await pool.request()
      .input('token', sql.VarChar, token)
      .query(queryy);

    return result.recordset;
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

const changePassword = async (id, password) => {
  try {
    let pool = await poolPromise;
    const queryy = `
      UPDATE dbo.users
        SET password = @password, isFirstLogin = 0
      WHERE id = @id;
    `;
    const result = await pool.request()
      .input('password', sql.VarChar, password)
      .input('id', sql.BigInt, id)
      .query(queryy);

    return result;
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

const createResetToken = async (user_id, token, expire) => {
  try {
    let pool = await poolPromise;
    const queryy = `
      INSERT INTO reset_password_token 
      (
        user_id, token, expire, created_at, created_by
      )
      VALUES
      (
        @user_id, @token, @expire, @created_at, @created_by
      )
    `
    const result = await pool
      .request()
      .input('user_id', sql.BigInt, user_id)
      .input('token', sql.VarChar, token)
      .input('expire', sql.BigInt, expire)
      .input('created_at', sql.DateTime, now())
      .input('created_by', sql.VarChar, 'user')
      .query(queryy);

    return result;
  } catch (error) {
    console.error(error);
    throw Error(error.message);
  }
};

module.exports = {
  findUser,
  createUser,
  fetchUsers,
  updateUser,
  fetchUserIdResetToken,
  changePassword,
  createResetToken
};
