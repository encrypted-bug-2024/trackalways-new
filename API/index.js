 const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { poolPromise, port } = require("./dbconfig");

app.use(
  cors({
    // origin: ['https://trackalways.in','https://www.trackalways.in'],
    origin: process.env.UI_URL,
    methods: 'GET,HEAD,PUT,POST',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// app.use((req, res) => {
//   console.log(req.body);
// });

// app.use("/v1/apis/images", express.static("public"));
app.use("/v1/apis/uploads", express.static("./uploads"));

// Routes
app.use("/v1/apis/apply", require("./Routes/JobRoute"));
app.use("/v1/apis/apply", require("./Routes/InternshipRoute"));
app.use("/v1/apis/reach", require("./Routes/FormRoute"));
app.use("/v1/apis/auth", require("./Routes/UserRoute"));

//test route
app.get("/v1/apis", (req, res, next) => {
  res.send("APIs are available.");
});

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});