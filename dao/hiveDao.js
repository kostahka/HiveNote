const fs = require('fs')
const path = require('path')
const hiveDB = path.resolve(__dirname, "hives.json")

const getHives = ()=>{
    let data = "";
    let hives = [];

    try {
        data = fs.readFileSync(hiveDB, "utf8");
    } catch(error) {
        console.error(error);
    }

    try {
        hives = JSON.parse(data);
    } catch(error) {
        console.error(error);
        fs.writeFileSync(hiveDB, '[]');
        hives = [];
    }

    return hives;
}

const rewriteHives = (hives)=>{
    let data = JSON.stringify(hives);
    fs.writeFileSync(hiveDB, data);
}

module.exports = {getHives, rewriteHives}