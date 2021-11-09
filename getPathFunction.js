const fs = require('fs');
const path = require('path')


const getPath = (entrypath, returnPath = []) => {
  const absoluteRoute = path.resolve(entrypath);

  if (fs.statSync(absoluteRoute).isDirectory() === true) {
    const allFiles = fs.readdirSync(absoluteRoute);

    allFiles.forEach(file => {
      const  newpath = path.join(absoluteRoute, file);
      getPath(newpath, returnPath)
    })
    }
  else {
    if (path.extname(absoluteRoute) == '.md'|| path.extname(absoluteRoute) == 'markdown'){
      returnPath.push(absoluteRoute);
    }
      
  }

return returnPath;
}

//console.log(getPath())
module.exports = {
  getPath
}
