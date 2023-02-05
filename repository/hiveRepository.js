const hiveDao = require('../dao/hiveDao')
const Hive = require('../entities/hive')

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

module.exports = {addHive, deleteHive, updateHive, getHives, getHive}