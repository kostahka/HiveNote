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

    let hive = new Hive(req.body.id, req.body.type, req.body.queen, req.body.date, req.body.hasPicture)
    hiveRepository.updateHive(hive)
    return res.redirect("/")
}

const UploadPicture=(req, res)=>{
    if(!req.file || !req.body) return res.sendStatus(400);

    hiveRepository.savePicture(req.file.path, req.body.id)

    res.redirect('back')
}

const DeletePicture=(req, res)=>{
    if(!req.body) return res.sendStatus(400);

    hiveRepository.deletePicture(req.body.id)

    res.redirect('back')
}

module.exports = {DeleteHive, CreateHive, UpdateHive, UploadPicture, DeletePicture}