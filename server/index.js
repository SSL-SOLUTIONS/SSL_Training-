const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/config");
const fileUploadRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");
const coursesRoute = require("./routes/courses");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// Configure session
const secret = process.env.ACCESS_TOKEN_SECRET;


app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);


app.use((req, res, next) => {
  const token = req.cookies.token || "";
  req.headers["Authorization"] = `Bearer ${token}`;
  next();
});

const PORT = 8080 || process.env.PORT;

app.use("/uploads", express.static("uploads"));
app.use("/auth", fileUploadRoutes);
app.use("/protected", protectedRoute);
app.use("/courses", coursesRoute);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
    await sequelize.sync();
    console.log("Synchronized Sequelize models with the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
