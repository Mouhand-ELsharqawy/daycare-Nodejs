const schoolTripModel = require('../Models/schoolTripModel')

exports.getall = async(req,res) => {
    try{
        const trips = await schoolTripModel.find()
        res.status(200).json(trips)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async(req,res) => {
    try{
        const trip = await schoolTripModel.create({
           chaperones: req.body.chaperones,
           cost: req.body.cost,
           location: req.body.location,
           comments: req.body.comments 
        })

        res.status(200).json(trip)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{
        const trip = await schoolTripModel.findById(req.params.id)
        req.status(200).json(trip)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{
        const trip = await schoolTripModel.findByIdAndUpdate(req.params.id,{
            chaperones: req.body.chaperones,
           cost: req.body.cost,
           location: req.body.location,
           comments: req.body.comments 
        },{
            new: true
        })

        res.status(200).json(trip)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
     await schoolTripModel.findByIdAndUpdate(req.params.id)
     res.status(200).json('school trip data removed')   
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}