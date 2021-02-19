const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000;
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use(logger("dev"))
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout2',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
app.use(require("./routes/apiroutes.js"))
app.use(require("./routes/htmlroutes.js"))
app.listen(PORT, ()=>{
    console.log("app running on PORT 3000")
})