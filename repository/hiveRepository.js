const hiveDao = require('../dao/hiveDao')
const Hive = require('../entities/hive')
const pictureDao = require('../dao/picturesDao')

let hives = hiveDao.getHives()

const addHive = ()=>
{
    let id = 0
    for(let i = 0; i < hives.length; i++){
        if(id < hives[i].id){
            id = hives[i].id
        }
    }
    id++
    let hive = new Hive(id, "Vertical", "Italian", "")
    hives.push(hive)
    hiveDao.rewriteHives(hives)
    return hive
}

const deleteHive=(id)=>{
    for(let i = 0; i < hives.length; i++){
        if(id == hives[i].id){
            hives.splice(i, 1)
            hiveDao.rewriteHives(hives)
            return true
        }
    }
    return false
}

const updateHive=(hive)=>{
    for(let i = 0; i < hives.length; i++){
        if(hive.id == hives[i].id){
            hives[i] = hive
            break;
        }
    }
    hiveDao.rewriteHives(hives)
}

const getHive=(id)=>{
    let hive = null;
    for(let i = 0; i < hives.length; i++){
        if(id == hives[i].id){
            hive = hives[i]
            break;
        }
    }

    return hive
}

const getHives=()=>{
    return hives
}

const savePicture=(file, id)=>{
    pictureDao.saveFile(file, id)
    for(let i = 0; i < hives.length; i++){
        if(id == hives[i].id){
            hives[i].hasPicture = 'true'
            hiveDao.rewriteHives(hives)
            break;
        }
    }
}

const deletePicture=(id)=>{
    pictureDao.deleteFile(id)
    for(let i = 0; i < hives.length; i++){
        if(id == hives[i].id){
            hives[i].hasPicture = 'false'
            hiveDao.rewriteHives(hives)
            break;
        }
    }
}

const filterHives=(filter)=>{
    hives.sort((a,b)=>{
        let A = a[filter]
        let B = b[filter]
        if(A > B)
            return 1
        if(A < B)
            return -1
        else
            return 0
    })
    return hives
}

module.exports = {addHive, deleteHive, updateHive, getHives, getHive, savePicture, deletePicture, filterHives}