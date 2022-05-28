const express = require("express");
const cors = require("cors");

const UserRoutes = require("./routes/UserRoutes");

const app = express();

//Config JSON response
app.use(express.json());

//Resolve o Cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Pasta de imagens
app.use(express.static("public"));

//Routes
app.use("/users", UserRoutes);

app.listen(5000);
