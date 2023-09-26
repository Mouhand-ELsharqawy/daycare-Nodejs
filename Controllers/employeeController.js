const employeeModel = require('../Models/employeeModel')

exports.getall = async(req,res) => {
    try{
     const employees = await employeeModel.find();
     res.status(200).json(employees)   
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.create = async(req,res) => {
    try{
        const employee = await employeeModel.create({
            name:{
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
            socialsecurity: req.body.socialsecurity,
            startdate: req.body.startdate,
            salary: req.body.salary,
            education: req.body.education
        })
        res.status(200).json(employee)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async(req,res) => {
    try{
        const employee = await employeeModel.findById(req.params.id)
        res.status(200).json(employee)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{
        const employee = await employeeModel.findByIdAndUpdate(req.params.id,{
            name:{
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
            socialsecurity: req.body.socialsecurity,
            startdate: req.body.startdate,
            salary: req.body.salary,
            education: req.body.education
        },{
            new: true
        })

        res.status(200).json(employee)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        await employeeModel.findByIdAndRemove(req.params.id)
        res.status(200).json('employee data deleted')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}