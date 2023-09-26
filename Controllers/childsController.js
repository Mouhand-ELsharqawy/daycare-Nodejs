const childModel = require('../Models/childModel');
const childrenModel = require('../Models/childrensModel');

exports.getall = async (req,res) => {
    try{
        const childs = await childModel.find().populate('childrensid')
        res.status(200).json(childs)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{
        const children = await childrenModel.findOne({ maleparentsid: req.body.maleid })
        const childrenid = children._id

        const child = await childModel.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            dob: req.body.dob,
            class: req.body.class,
            currentlocation: req.body.location,
            childrensid: childrenid
        })

        res.status(200).json(child)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}


exports.getone = async (req,res) => {
    try{
        const child = await childModel.findById(req.params.id).populate('childrensid')
        res.status(200).json(child)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async (req,res) => {
    try{
        const children = await childrenModel.findOne({ maleparentsid: req.body.maleid })
        const childrenid = children._id

        const child = await childModel.findByIdAndUpdate(req.params.id,{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            dob: req.body.dob,
            class: req.body.class,
            currentlocation: req.body.location,
            childrensid: childrenid
        },{
            new: true
        })
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
        await childModel.findByIdAndRemove(req.params.id)
        res.status(200).json('child data removed');
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}