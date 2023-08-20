const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", require("./routes/usersRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
