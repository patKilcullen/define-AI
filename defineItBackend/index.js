// import path from "path";
// import express from "express";
// import morgan from "morgan";
// const app = express();
// import router from "./api/index.js";
// export default app
// // module.exports = app;

// // logging middleware
// app.use(morgan("dev"));

// // body parsing middleware
// app.use(express.json());

// // auth and api routes
// // app.use("/auth", require("./auth"));
// ;
// app.use("/api", router);

// // app.get("/", (req, res) =>
// //   res.sendFile(path.join(__dirname, "..", "public/index.html"))
// // );

// //root URL response
// app.get("/", (req, res) => {
//   res.send("PatrickBackend ProposalAI API is running").status(200);
//   //console.log("request received")
// });

// // static file-serving middleware
// app.use(express.static(path.join(__dirname, "..", "public")));

// // any remaining requests with an extension (.js, .css, etc.) send 404
// app.use((req, res, next) => {
//   if (path.extname(req.path).length) {
//     const err = new Error("Not found");
//     err.status = 404;
//     next(err);
//   } else {
//     next();
//   }
// });

// // sends index.html
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public/index.html"));
// });

// // error handling endware
// app.use((err, req, res, next) => {
//   console.error(err);
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || "Internal server error.");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server Started on ${PORT}`));



// server.js
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from "./api/index.js";

const app = express();

// __dirname replacement in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());

// Use the router from api/index.js
app.use("/api", router);

// Root URL response
app.get("/", (req, res) => {
  res.send("Backend is running").status(200);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
