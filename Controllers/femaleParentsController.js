const femaleParentModel = require('../Models/femaleParentsModel')

exports.getall = async(req,res) => {
    try{ 
        const femaleparents = await femaleParentModel.find();
        res.status(200).json(femaleparents)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
} 

exports.create = async(req,res) => {
    try{
        const femaleparent = await femaleParentModel.create({
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

        res.status(200).json(femaleparent)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{

        const femaleparent = await femaleParentModel.findById(req.params.id)
        req.status(200).json(femaleparent)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{

        const femaleparent = await femaleParentModel.findByIdAndUpdate(req.params.id,{
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

        res.status(200).json(femaleparent)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        
        await femaleParentModel.findByIdAndRemove(req.params.id)
        res.status(200).json('female Parent data deleted')

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}