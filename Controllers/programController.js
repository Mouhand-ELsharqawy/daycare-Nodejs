const programModel = require('../Models/programModel')

exports.getall = async(req,res) => {
    try{
        const programs = await programModel.find().populate('employeesid')
        res.status(200).json(programs)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async(req,res) => {
    try{

        const employeename = await employeeModel.findOne({ name: { lastname: req.body.lastname } })
        const employeeid = employeename._id

        const program = await programModel.create({
            programname: req.body.programname,
            numberofemployees: req.body.numberofemployees,
            location: req.body.location,
            date: req.body.date,
            contactphone: req.body.contactphone,
            employeesid: employeeid
        })

        res.status(200).json(program)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{
        const program = await programModel.findById(req.params.id)
        res.status(200).json(program)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{
        const employeename = await employeeModel.findOne({ name: { lastname: req.body.lastname } })
        const employeeid = employeename._id

        const program = await programModel.findByIdAndUpdate(req.params.id,{
            programname: req.body.programname,
            numberofemployees: req.body.numberofemployees,
            location: req.body.location,
            date: req.body.date,
            contactphone: req.body.contactphone,
            employeesid: employeeid
        },{
            new: true
        })
        res.status(200).json(program)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        await programModel.findByIdAndRemove(req.params.id)
        res.status(200).json('program data removed')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}