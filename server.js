const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config();

// establish the database connection
const dbConnection = require("./database/connection");
dbConnection.connect();

//middleware
app.use(express.json());

// register the router
app.use("/api/v1/admin", require("./routers/adminRouter"));
app.use("/api/v1/certificates", require("./routers/certificateRouter"));

// default error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err, message: "Something broke !" });
});
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at port : ${port}`);
});
