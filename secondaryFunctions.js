
const path = require('path');
const fs = require('fs');
//Lee archivo md
const mdFile = (absoluteRoute) => {
     return path.extname(absoluteRoute) == '.md' ? fs.readFileSync(absoluteRoute, 'utf8') : 'No es un archivo md';
}


const extractMd = (absoluteRoute) => {
     fs.readdir(absoluteRoute, (error, files) => {
        if (error) {
            console.log(error);
        } else{

          const filePath =  files.map((filesNeedPath)=> absoluteRoute +'/'+filesNeedPath);
          /* filePath.forEach((allFilePath)=>{
              if(fs.lstatSync(allFilePath).isDirectory()===true){
    
            console.log(extractMd(filePath))}
        }); */
console.log(filePath);
        
    };
    

});

}

module.exports = {
    mdFile,
    extractMd
}

// filtra los archivos con extención md
       // const filesFilter = files.filter(allFiles => path.extname(allFiles) == '.md');
       //return allFiles;
       // console.log(filesFilter);


/* for (let index = 0; index < files.length; ++index) { 
    let file = files[index]; 
    if (file[0] !== '.') { 
        let filePath = rootDir + '/' + file; 
        fs.stat(filePath, function(err, stat) {
            if (stat.isDirectory()) { 
                dirs.Push(this.file); 
            } 
            if (files.length === (this.index + 1)) { 
                return cb(dirs); 
            } 
        }.bind({index: index, file: file})); 
    }
} */