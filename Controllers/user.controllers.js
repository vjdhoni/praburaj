var express = require('express')
var router = express.Router();
var User = require('../Models/user')

router.post('/user', async (req, res) => {
    var data = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }
    await User(data).save((err, rel) => {
        if (err) res.status(400).json({ message: err })
        else {
            res.status(201).json(rel)
        }
    })
})

router.get('/getuser',async (req, res) => {
    var data = await User.find({});
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(500).json({message:'something went wrong'})
    }
})


router.put('/updateuser',async (req,res)=>{
    var user = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }
    var data = await User.findByIdAndUpdate({_id:req.body.id},{$set:user},{new:true})
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(500).json({message:'something went wrong'})
    }
})

router.delete('/delete', async(req,res)=>{
    var data  = await User.findByIdAndRemove({_id:req.body.id});
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(500).json({message:'something went wrong'})
    }
})


//post
//http://localhost:5000/user/user

//get
//http://localhost:5000/user/getuser

//put
//http://localhost:5000/user/updateuser

//delete
//http://localhost:5000/user/delete

module.exports = router;