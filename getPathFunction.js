const secondaryFunctions = require('./secondaryFunctions.js');

/* 
const getPath = ( entrypath )=> {
const fs = require('fs');
const pathResolve = require('path').resolve
const path = require('path')
const absoluteRoute = pathResolve(entrypath);
console.log(absoluteRoute)

// is a file


if(fs.lstatSync(absoluteRoute).isDirectory()===true){
  fs.readdir(absoluteRoute, (error, files) => {
    if (error) {
    console.log(error);
    }
    // recupera todos los archivos
    console.log(files);
    //filtra los archivos con extención md
    const filesMD = files.filter(allFiles=> path.extname(allFiles) == '.md')
    console.log(filesMD);
    });  
}
else{
  path.extname(absoluteRoute) == '.md'? console.log(fs.readFileSync(absoluteRoute, 'utf8')): console.log('No es un archivo md');

}

 
//saca los archivos md

} */



const getPath = ( entrypath )=> {
  const fs = require('fs');
  const pathResolve = require('path').resolve
  const absoluteRoute = pathResolve(entrypath);
  
// is directory

  if(fs.lstatSync(absoluteRoute).isDirectory()===true){
    
      return secondaryFunctions.extractMd(absoluteRoute);
  
  }else{
      return secondaryFunctions.mdFile(absoluteRoute);
  }
   
  
  }



module.exports ={
  getPath
}