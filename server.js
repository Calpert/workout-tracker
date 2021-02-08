const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const PORT = 3000
const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

mongoose.connect("mongodb://localhost/workout",{
    useNewUrlParser:true,
    useFindAndModify:false

})
app.use(require("./routes/apiroutes.js"))
app.use(require("./routes/htmlroutes.js"))
app.listen(PORT, ()=>{
    console.log("app running on PORT 3000")
})

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  