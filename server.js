const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const PORT = 3000 || process.env.PORT

const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.use(require("./routes/apiroutes.js"))
app.use(require("./routes/htmlroutes.js"))


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  app.listen(PORT, ()=>{
    console.log("app running on PORT 3000")
})