
const path = require('path');
const fs = require('fs');
//Lee archivo md
const mdFile = (absoluteRoute) => {
     return path.extname(absoluteRoute) == '.md' ? fs.readFileSync(absoluteRoute, 'utf8') : 'No es un archivo md';
}


const extractMd = (absoluteRoute) => {
    
    fs.readdir(absoluteRoute, (error, files) => {
        const allFiles=[];
        if (error) {
            return allFiles.push(error);
        } else{
           return allFiles.concat(files);
        }
        
        // recupera todos los archivos
        
        // filtra los archivos con extención md
       // const filesFilter = files.filter(allFiles => path.extname(allFiles) == '.md');
       //return allFiles;
       // console.log(filesFilter);
    });

};



module.exports = {
    mdFile,
    extractMd
}