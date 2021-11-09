const PathFuntion = require('./getPathFunction.js');
const ReadMDLinks = require('./readMD.js');
const myArgs = process.argv[2];
const allfilesMD= PathFuntion.getPath(myArgs);
console.log(ReadMDLinks.readMD(allfilesMD));


