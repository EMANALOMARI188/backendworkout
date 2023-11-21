const express=require('express')//نادي هاي المكتبه

const router=express.Router()// من طريقه بنشئ ال api 
//عشان اوحد المسار تبعهم بعمل هيك
const workout=require('../model/model1')
const mongoose = require('mongoose')
const{
    patchupdate,
    postworkout,
    deleteworkout,
    getworkout,
    getworkouts
}=require('../controleres/workoutcontroler')
router.get('/',getworkouts)

router.get('/:id',getworkout )
//req هو شو بوصلني من الداتا
router.post('/',postworkout)

router.delete('/:id',deleteworkout)

router.patch('/:id',patchupdate)

module.exports=router



