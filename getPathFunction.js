
const getPath = ( entrypath )=> {
const fs = require('fs');
const pathResolve = require('path').resolve
const absoluteRoute = pathResolve(entrypath);
console.log(absoluteRoute)

fs.readdir(absoluteRoute, (error, files) => {
  if (err) {
  console.log(error);
  }
  console.log(files);
  });
//encontrar documentos de diferente tipo

}

//saca los archivos md

/* const extractMD = (absoluteRoute) =>{
const fs = require('fs');
console.log (absoluteRoute);
} */


module.exports ={
  getPath
  //extractMD
}