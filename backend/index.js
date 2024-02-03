const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("../backend/routes/user.js");
app.use("/user", userRouter);
const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
