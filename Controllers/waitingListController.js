const waitingListModel = require('../Models/waitingListModel')

exports.getall = async(req,res) =>{
    try{
     const lists = await waitingListModel.find();
     res.status(200).json(lists)   
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async(rea,res) => {
    try{
        const list = await waitingListModel.create({
            familyname: req.body.familyname,
            address: {
                square: req.body.square,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            comments: req.body.comments,
            placementdate: req.body.placementdate,
            phonenumber: req.body.phonenumber
        })
        res.status(200).json(list)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) =>{ 
    try{
        const list = await waitingListModel.findById(req.params.id)
        res.status(200).json(list)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{
        const list = await waitingListModel.findByIdAndUpdate(req.params.id,{
            familyname: req.body.familyname,
            address: {
                square: req.body.square,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            comments: req.body.comments,
            placementdate: req.body.placementdate,
            phonenumber: req.body.phonenumber
        },{
            new: true
        })
        res.status(200).json(list)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        await waitingListModel.findByIdAndRemove(req.params.id)
        res.status(200).json('waiting list data removed')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}