var studModel = require('../Model/StudentModel')

module.exports = {

create:function(req,res){
    console.log(req.body)
    studModel.create(req.body).then(success=>{
        res.send("your data has been saved into database")
    }).catch(err=>{
        res.send("Something went wrong!!!!"+err)
    })
},

getAll:function(req,res){
    studModel.find().then(results=>{
        res.send(results)
    }).catch(err=>{
        res.send("something went wrong"+err)
    })
},
getOne:function(req,res){
    studModel.findById(req.params.studid).then(result=>{
        res.send(result)
    }).catch(err=>{
        res.send("You have invalid id!!!!!!"+err)
    })
},
getUpdate:function(req,res){
    studModel.findByIdAndUpdate(req.params.studid,req.body).then(result=>{  
        res.send("your data has been updated")
    }).catch(err=>{
            res.send("something went wrong"+err)
    })
},
getDelete:function(req,res){
    studModel.findByIdAndDelete(req.params.studid).then(result=>{  
        res.send("your data has been Deleted")
    }).catch(err=>{
            res.send("something went wrong"+err)
    })
}}