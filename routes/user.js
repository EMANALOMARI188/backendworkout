
const express =require('express')

const {singupuser}=require('../controleres/usercontroler')
const router=express.Router()

router.post('/login',()=>{})

router.post('/singup',singupuser)

module.exports=router

