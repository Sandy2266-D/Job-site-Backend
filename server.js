const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./middleware/passportConfig");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

//connect to Mongo_Db
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("connect to mongodb");
});

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Routing
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));

// Setting up middlewares
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  const path=require('path')
  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}


const PORT = process.env.PORT || 5000
    app.listen(PORT,()=>
    {
        console.log("Server  Listening")
    })