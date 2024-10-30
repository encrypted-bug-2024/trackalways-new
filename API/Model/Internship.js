"use strict";

const sql = require("mssql");
const { poolPromise } = require("../dbconfig");
const { now } = require("../Utils/dateTime");

const fetchInternshipApplications = async () => {
  try {
    let pool = await poolPromise;
    const queryy = `
    SELECT
      id,
      name,
      mobile, 
      email, 
      college_name,
      course,
      batch,
      specialization,
      message, 
      resume,
      created_at
    FROM 
      internship_applications
    WHERE 
      is_active = 1
    ORDER BY 
      created_at DESC;
  `;

    const result = await pool
      .request()
      .query(queryy);

    // console.log('internship data: ',result);
    return result.recordset;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const internship = async (obj, files) => {
  try {
    let pool = await poolPromise;

    const queryy = `
        INSERT INTO internship_applications (
          name,
          mobile, 
          email, 
          college_name,
          course,
          batch,
          specialization,
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
          @college_name,
          @course,
          @batch,
          @specialization, 
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
      .input("college_name", sql.VarChar, obj.college_name)
      .input("course", sql.VarChar, obj.course)
      .input("batch", sql.VarChar, obj.batch)
      .input("specialization", sql.VarChar, obj.specialization)
      .input("message", sql.VarChar, obj.message)
      .input("created_at", sql.DateTime, now())
      .input("created_by", sql.VarChar, "user")
      .input("is_active", sql.Bit, true)
      .input("resume", sql.VarChar, files.resume)
      .input("file_path", sql.VarChar, files.destination)
      .query(queryy);

    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = { fetchInternshipApplications, internship };
