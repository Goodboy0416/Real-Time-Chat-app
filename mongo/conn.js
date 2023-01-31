const mongoose=require('mongoose')
mongoose.set('strictQuery',false)

mongoose.connect("mongodb://localhost/27017:chatDB",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connections is successfull to database")
}).catch((err)=>{
    console.log(err)
})