const curriculumModel = require('../Models/curriculumModel')
const employeeModel = require('../Models/employeeModel')

exports.getall = async (req,res) => {
    try{
        const curriculum = await curriculumModel.find().populate('employeesid')
        res.status(200).json(curriculum)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req,res) => {
    try{

        const employeename = await employeeModel.findOne({ name: { lastname: req.body.lastname } })
        const employeeid = employeename._id

      const curriculum = await curriculumModel.create({
        hoursperweek: req.body.hoursperweek,
        numberofdays: req.body.numberofdays,
        agegroup: req.body.agegroup,
        season: req.body.season,
        description: req.body.description,
        employeesid: employeeid
     })   

     res.status(200).json(curriculum)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{
        const curriculum = await curriculumModel.findById(req.params.id).populate('employeesid')
        res.status(200).json(curriculum)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) =>{
    try{
        const employeename = await employeeModel.findOne({ name: { lastname: req.body.lastname } })
        const employeeid = employeename._id

        const curriculum = await curriculumModel.findByIdAndUpdate(req.params.id,{
            hoursperweek: req.body.hoursperweek,
            numberofdays: req.body.numberofdays,
            agegroup: req.body.agegroup,
            season: req.body.season,
            description: req.body.description,
            employeesid: employeeid
         },{
            new: true
        })
        res.status(200).json(curriculum)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res) => {
    try{
     await curriculumModel.findByIdAndRemove(req.params.id)
     res.status(200).json('curriculum data removed')   
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}