"use strict";

const sql = require("mssql");
const { poolPromise } = require("../dbconfig");
const { now } = require("../Utils/dateTime");

const subscription = async (email) => {
  try {
    let pool = await poolPromise;

    const queryy = `
        INSERT INTO subscription_form ( 
          email,  
          created_at, 
          created_by,
          is_active
        )
        VALUES (
          @email, 
          @created_at, 
          @created_by,
          @is_active
        )
    `;

    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("created_at", sql.DateTime, now())
      .input("created_by", sql.VarChar, "user")
      .input("is_active", sql.Bit, true)
      .query(queryy);

    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const contactUs = async (obj) => {
  try {
    let pool = await poolPromise;

    const queryy = `
        INSERT INTO contactus_form ( 
          name,
          mobile,
          email,  
          subject,
          message,
          created_at, 
          created_by,
          is_active
        )
        VALUES (
          @name,
          @mobile,
          @email, 
          @subject,
          @message,
          @created_at, 
          @created_by,
          @is_active
        )
    `;

    const result = await pool
      .request()
      .input("name", sql.VarChar, obj.name)
      .input("mobile", sql.VarChar, obj.mobile)
      .input("email", sql.VarChar, obj.email)
      .input("subject", sql.VarChar, obj.subject)
      .input("message", sql.VarChar, obj.message)
      .input("created_at", sql.DateTime, now())
      .input("created_by", sql.VarChar, "user")
      .input("is_active", sql.Bit, true)
      .query(queryy);

    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const bookdemo = async (obj) => {
  try {
    let pool = await poolPromise;

    const queryy = `
        INSERT INTO bookdemo_form ( 
          name,
          mobile,
          email,  
          company,
          message,
          created_at, 
          created_by,
          is_active
        )
        VALUES (
          @name,
          @mobile,
          @email, 
          @company,
          @message,
          @created_at, 
          @created_by,
          @is_active
        )
    `;

    const result = await pool
      .request()
      .input("name", sql.VarChar, obj.name)
      .input("mobile", sql.VarChar, obj.mobile)
      .input("email", sql.VarChar, obj.email)
      .input("company", sql.VarChar, obj.company)
      .input("message", sql.VarChar, obj.message)
      .input("created_at", sql.DateTime, now())
      .input("created_by", sql.VarChar, "user")
      .input("is_active", sql.Bit, true)
      .query(queryy);

    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const fetchSubscribeApplications = async () => {
  try {
    let pool = await poolPromise;

    const queryy = `
        SELECT 
          id,
          email,  
          created_at 
        FROM subscription_form
        ORDER BY created_at DESC;
    `;

    const result = await pool
      .request()
      .query(queryy);

    // console.log(result);
    return result.recordset;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const fetchContactApplications = async () => {
  try {
    let pool = await poolPromise;

    const queryy = `
        SELECT 
          id,
          name,
          mobile,
          email,  
          subject,
          message,
          created_at
        FROM contactus_form
        ORDER BY created_at DESC;
    `;

    const result = await pool
      .request()
      .query(queryy);

    // console.log(result);
    return result.recordset;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const fetchBookdemoApplications = async () => {
  try {
    let pool = await poolPromise;

    const queryy = `
        SELECT 
          id,
          name,
          mobile,
          email,  
          company,
          message,
          created_at
        FROM bookdemo_form
        ORDER BY created_at DESC;
    `;

    const result = await pool
      .request()
      .query(queryy);

    // console.log(result);
    return result.recordset;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = {
  subscription,
  contactUs,
  bookdemo,
  fetchBookdemoApplications,
  fetchContactApplications,
  fetchSubscribeApplications
};
