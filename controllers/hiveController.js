const hiveRepository = require('../repository/hiveRepository')
const Hive = require('../entities/hive')

const DeleteHive=(req, res)=>{
    if(req.body){
        let id = req.body.id
        if(hiveRepository.deleteHive(id)){
            return res.redirect("/");
        }
        else
            return res.sendStatus(404)
    }
    else
        return res.sendStatus(400)
}

const CreateHive=(req, res)=>{
    res.render("editHive.ejs", {hive: hiveRepository.addHive()})
}

const UpdateHive=(req, res)=>{
    if(!req.body) return res.sendStatus(400);

    let hive = new Hive(req.body.id, req.body.type, req.body.queen, req.body.date)
    hiveRepository.updateHive(hive)
    return res.redirect("/")
}

module.exports = {DeleteHive, CreateHive, UpdateHive}