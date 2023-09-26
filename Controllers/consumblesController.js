const consumbleModel = require('../Models/consumblesModel')


exports.getall = async(req,res) => {
    try{
        const consumbles = await consumbleModel.find();
        res.status(200).json(consumbles)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}


exports.create = async (req,res) => {
    try{
        const consumble = await consumbleModel.create({
            fingerpaint: req.body.fingerpaint,
            paper: req.body.paper,
            cleaning: req.body.cleaning,
            sippycups: req.body.sippycups,
            spoons: req.body.spoons,
            crayons: req.body.crayons,
            garbagebag: req.body.garbagebag,
            diapers: req.body.diapers,
            forks: req.body.forks,
            pencil: req.body.pencil,
            bowls: req.body.bowls,
            babywipes: req.body.babywipes
        })

        res.status(200).json(consumble)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.getone = async (req,res) => {
    try{
        const consumble = await consumbleModel.findById(req.params.id)
        res.status(200).json(consumble)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.update = async(req,res) => {
    try{
        const consumble = await consumbleModel.findByIdAndUpdate(req.params.id,{
            fingerpaint: req.body.fingerpaint,
            paper: req.body.paper,
            cleaning: req.body.cleaning,
            sippycups: req.body.sippycups,
            spoons: req.body.spoons,
            crayons: req.body.crayons,
            garbagebag: req.body.garbagebag,
            diapers: req.body.diapers,
            forks: req.body.forks,
            pencil: req.body.pencil,
            bowls: req.body.bowls,
            babywipes: req.body.babywipes
        },{
            new: true
        })
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async(req,res) => {
    try{
        await consumbleModel.findByIdAndRemove(req.params.id)
        res.status(200).json('consumble data deleted')
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}