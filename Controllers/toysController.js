const programModel = require('../Models/programModel')
const toyModel = require('../Models/toysModel')

exports.getall = async(req,res) => {
    try{
        const toys = await toyModel.find().populate('programsid')
        res.status(200).json(toys)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async(req,res) => { 
    try{
        const programname = await programModel.findOne({ programname: req.body.programname })
        const programid = programname._id

        const toy = await toyModel.create({
            name: req.body.name,
            cost: req.body.cost,
            manufacturer: req.body.manufacturer,
            purchasedate: req.body.purchasedate,
            programsid: programid
        })

        res.status(200).json(toy)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{
        const toy = await toyModel.findById(req.params.id)
        res.status(200).json(toy)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}


exports.update = async(req,res) => {
    try{
        const programname = await programModel.findOne({ programname: req.body.programname })
        const programid = programname._id

        const toy = await toyModel.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            cost: req.body.cost,
            manufacturer: req.body.manufacturer,
            purchasedate: req.body.purchasedate,
            programsid: programid    
        },{
            new: true
        })

        res.status(200).json(toy)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
} 

exports.delete = async(req,res) => {
    try{
        await toyModel.findByIdAndRemove(req.params.id)
        res.status(200).json('toy data removed')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}