require("dotenv").config();

// const express = require("./app");
const express = require("express");
const cloudinary = require("cloudinary");
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const errorMiddleware = require("./middleware/error");

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

const PORT = process.env.PORT || 5050;
const MONGO_URI = "mongodb://127.0.0.1:27017/sseecommerce?directConnection=true";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});
app.use(errorMiddleware);

// Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// });

// // Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// Connecting to database
// connectDatabase();

cloudinary.config({
  cloud_name: 'dumybew2s',
  api_key: '897568168792188',
  api_secret: 'Ds3XD3qeGwGgPDimu6aKuYajNl8',
});

// const server = app.listen(PORT, () => {
//   console.log(`Server is working on http://localhost:${PORT}`);
// });

// // Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });

const start = async () => {
  try {
    await connectDB(MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server is working on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
