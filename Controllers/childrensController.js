const childrenModel = require('../Models/childrensModel');
const femaleParentModel = require('../Models/femaleParentsModel');
const maleParentModel = require('../Models/maleParentsModel');


exports.getall = async (req,res) => {
    try{
        const childrens = await childrenModel.find().populate('femaleparentid').populate('maleparentid');
        res.status(200).json(childrens)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{
        const femalename = await femaleParentModel.findOne({ name: { lastname: req.body.femalename }  })
        const femaleid = femalename._id
        const malename = await maleParentModel.findOne({ name: { lastname: req.body.malename } })
        const maleid = malename._id
        const children = await childrenModel.create({
            nappinghours: req.body.nappinghours,
            food: req.body.food,
            extrainfo: req.body.extrainfo,
            behavior: req.body.behavior,
            playinglocation: req.body.playinglocation,
            femaleparentid: femaleid,
            maleparentsid: maleid
        })
        res.status(200).json(children)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}


exports.getone = async (req,res) => {
    try{
        const children = await childrenModel.findById(req.params.id).populate('femaleparentid').populate('maleparentid')
        res.status(200).json(children)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async (req,res) => {
    try{

        const femalename = await femaleParentModel.findOne({ name: { lastname: req.body.femalename }  })
        const femaleid = femalename._id
        const malename = await maleParentModel.findOne({ name: { lastname: req.body.malename } })
        const maleid = malename._id

        const children = await childrenModel.findByIdAndUpdate(req.params.id, {
            nappinghours: req.body.nappinghours,
            food: req.body.food,
            extrainfo: req.body.extrainfo,
            behavior: req.body.behavior,
            playinglocation: req.body.playinglocation,
            femaleparentid: femaleid,
            maleparentsid: maleid
        } , {
            new: true
        })

        res.status(200).json(children)

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}


exports.delete = async (req,res) => {
    try{
     await childrenModel.findByIdAndRemove(req.params.id)
     res.status(200).json(' children data removed ')   
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}