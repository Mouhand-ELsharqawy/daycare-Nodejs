const employeeModel = require('../Models/employeeModel');
const mainOfficeModel = require('../Models/mainOfficeModel')

exports.getall = async(req,res) => {
    try{
        const mainoffices = await mainOfficeModel.find().populate('employeesid')
        res.status(200).json(mainoffices)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
} 

exports.create = async(req,res) => {
    try{

        const employeename = await employeeModel.findOne({ name: { lastname: req.body.lastname } })
        const employeeid = employeename._id

        const mainoffice = await mainOfficeModel.create({
            name: req.body.name,
            location: req.body.location,
            telephone: req.body.telephone,
            managername: {
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname
            },
            employeesid: employeeid
        })

        res.status(200).json(mainoffice)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{
        const mainoffice = await mainOfficeModel.findById(req.params.id).populate('employeesid')
        res.status(200).json(mainoffice)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) =>{
    try{
        const employeename = await employeeModel.findOne({ name: { lastname: req.body.lastname } })
        const employeeid = employeename._id

        const mainoffice = await mainOfficeModel.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            location: req.body.location,
            telephone: req.body.telephone,
            managername: {
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname
            },
            employeesid: employeeid 
        },{
            new: true
        })
        res.status(200).json(mainoffice)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        await mainOfficeModel.findByIdAndRemove(req.params.id)
        res.status(200).json('main office data removed')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}