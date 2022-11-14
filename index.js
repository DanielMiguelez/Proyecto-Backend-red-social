const express = require("express");
const app = express();
const PORT = 8000;
const { dbConnection } = require("./config/config");

const { typeError }= require('./middlewares/errors');

app.use(express.json());

app.use("/posts",require("./routes/posts"))
app.use("/users",require("./routes/users"))


dbConnection();



app.use(typeError)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
