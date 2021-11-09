
const readMD =(allpathMD)=>{
 const fs =require('fs');
   const allFilesMD = allpathMD.map((pathMD)=>fs.readFileSync(pathMD, 'utf8')); 
    return allFilesMD;
    
}



module.exports = {
   readMD
  }