/*//الملف الاساسي للسيرفر
//ثابت لكل المشاريع الي بتغير ال url
const express=require('express')
require('dotenv').config()//دايما بتكون موجوده بستورد جزء من مكتبه
const workoutRouters=require('./routes/workout')

const mongoose=require('mongoose')//عملنا اتصال مع المونغوز
//بنشئ ال api 
const app=express()
//routes
app.use(express.json())//عشان يجيني كل اشي بجيسون
app.use('/api/workouts',workoutRouters)

mongoose.connect(process.env.mongoos_url).then(()=>{//بدي اتصل بالداتا بيز  هاد من عند .env

    const userSchema= new mongoose.Schema({
        name:String,
        age:{type:Number,min:1,max:20},
        email:{type:String,required:true,unique:true,minLength:10,lowercase:true},
        createdAt:{type:Date,default:() => Date.now(),immutable:true},//هاد ثابت ما بتغيير عليه
        updateAt:Date,
        hobbies:[String],
        address:{street:String,city:String},
        bestFrined:{type:mongoose.SchemaTypes.ObjectId,ref:'user'}
    })
    const user =mongoose.model('user',userSchema)
    app.get('/getuser',async(req,res)=>{
        const mydata =await user.find()
        res.json({mydata})
    })
    
app.listen(process.env.PORT,()=>{
    console.log(`connected to db and listening for ` ,process.env.PORT )//عشان اضمن انه صار في اتصال
})  
})
.catch((err)=>{
    console.log(err)
})


//mongodb+srv://emanalomari:<password>@cluster0.va3kcmw.mongodb.net/*/






require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
const workout=require('./model/model1')
const userroutes=require('./routes/user')

const cors=require('cors')

// express app
const app = express()
app.use(cors());

// middleware
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userroutes)
const connectDB= async()=>{
try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(process.env.PORT, () => {
    console.log('connected to db and listening')
   })
} catch (error) {
  console.log(error.message)
}
}
connectDB()
// mongoose.connect(process.env.MONGO_URL).then(() => {
//      // listen to port
//      app.listen(process.env.PORT, () => {
//      console.log('connected to db and listening for requests on port', process.env.PORT)
//      })
//      }).catch((err) => {
//       console.log(err)
//      }) 
    