const maleParentModel = require('../Models/maleParentsModel')

exports.getall = async(req,res) => {
    try{ 
        const maleparents = await maleParentModel.find();
        res.status(200).json(maleparents)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
} 

exports.create = async(req,res) => {
    try{
        const maleparent = await maleParentModel.create({
            name: {
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname
            },
            address: {
                square: req.body.square,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            contactnumber: req.body.contactnumber
        })

        res.status(200).json(maleparent)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{

        const maleparent = await maleParentModel.findById(req.params.id)
        req.status(200).json(maleparent)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{

        const maleparent = await maleParentModel.findByIdAndUpdate(req.params.id,{
            name: {
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname
            },
            address: {
                square: req.body.square,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            contactnumber: req.body.contactnumber
        },{
            new: true
        })

        res.status(200).json(maleparent)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        
        await maleParentModel.findByIdAndRemove(req.params.id)
        res.status(200).json('male Parent data deleted')

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}