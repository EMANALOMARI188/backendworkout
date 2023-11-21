//استدعيت هدول
const workout=require('../model/model1')
const mongoose=require('mongoose')

const getworkouts=async(req,res)=>{
    const work1=await workout.find().sort({createAt:-1})
    res.status(200).json(work1)
}

const getworkout=async(req,res)=>{
    const{id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"wrong id number"})
    }
    const work2=await workout.findById(id)
    if(!work2){
        return res.status(404).json({error:'no search workout'})
    }
    res.status(200).json(work2)
    
}
const deleteworkout=async(req,res)=>{
    const{id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"wrong id number"})
    }
    const work2=await workout.findById(id).deleteOne()
    if(!work2){
        return res.status(404).json({error:'no search workout'})
    }
    res.status(200).json(work2)
}

const  postworkout=async(req,res)=>{ //بستعملها لما اعمل انسيرت
    const{title,load,reps}=req.body
    try{
        const work=await workout.create({title,load,reps})
        res.status(200).json(work)
    }
    catch(error1){
        res.status(400).json({error:error1.massage})
    }
    
}
const patchupdate=async(req,res)=>{
    const{id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"wrong id number"})
    }
    const work2=await workout.findById(id).updateOne({...req.body})
    if(!work2){
        return res.status(404).json({error:'no search workout'})
    }
    res.status(200).json(work2)
}

module.exports={
    patchupdate,
    postworkout,
    deleteworkout,
    getworkout,
    getworkouts
}