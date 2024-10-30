"use strict";

const sql = require("mssql");
const { poolPromise } = require("../dbconfig");
const { now } = require("../Utils/dateTime");

const fetchJobApplications = async () => {
  try {
    let pool = await poolPromise;
    const queryy = `
      SELECT
        id,
        name,
        mobile, 
        email, 
        job_profile, 
        message, 
        resume,
        created_at 
      FROM job_applications
      WHERE is_active = 1
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

const job = async (obj, fileName, destination) => {
  try {
    let pool = await poolPromise;

    const queryy = `
      INSERT INTO job_applications (
        name,
        mobile, 
        email, 
        job_profile, 
        message, 
        resume, 
        file_path, 
        created_at, 
        created_by,
        is_active
      )
      OUTPUT INSERTED.id
      VALUES (
        @name, 
        @mobile, 
        @email, 
        @job_profile, 
        @message, 
        @resume, 
        @file_path, 
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
      .input("job_profile", sql.VarChar, obj.job_profile)
      .input("message", sql.VarChar, obj.message)
      .input("resume", sql.VarChar, fileName)
      .input("file_path", sql.VarChar, destination)
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

module.exports = {
  job,
  fetchJobApplications
};
