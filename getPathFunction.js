const fs = require('fs');
const path = require('path')

const getPath = (entrypath, callbackpath=[]) => {

  const absoluteRoute = path.resolve(entrypath);
  
  if (fs.lstatSync(absoluteRoute).isDirectory() === true) {
    fs.readdir(absoluteRoute, (error, files) => {
      if (error) {
        console.log(error);
      }

      //retorna todas las rutas absolutas dentro del array
     const filePath = files.map((filesNeedPath) => absoluteRoute + '/' + filesNeedPath);
    
     //Retorna las 
      //detectar si hay mas carpetas
     const file = filePath.map((allfilePath) => {
      getPath(allfilePath, callbackpath=[])
      });

      console.log(file);

      
    });   
    //console.log(filePath);
}
//else{
//const filesMD = filePath.filter(allFiles => path.extname(allFiles) == '.md')
//return callbackpath.push(filesMD)+'owo';
//}

}

module.exports = {
  getPath
}