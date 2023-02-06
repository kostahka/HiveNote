const fs = require('fs')
const path = require('path')
const picturesPath = path.resolve(process.cwd(), "public", 'images', 'hives')

const deleteFile= (id)=>{
    const file = path.resolve(picturesPath, id)
    if (fs.existsSync(file)) {
        fs.rmSync(file, {force: true})
    }
}

const saveFile=(file, id)=>{
    const saveFile = path.resolve(picturesPath, id)
    if(!fs.existsSync(picturesPath)){
        fs.mkdirSync(picturesPath, {recursive: true})
    }
    fs.rename(file, saveFile, err => {
        if (err) throw err;

        if (fs.existsSync(file)) {
            fs.rm(file, err => {
                if (err) return console.error(err);
            });
        }
    })
}

module.exports = {deleteFile, saveFile}