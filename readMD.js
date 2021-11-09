const { readFileSync } = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const readMD = (allpathMD) => {


  const linksObj = [];
  allpathMD.map((pathMD) => {
    const markdown = readFileSync(pathMD, { encoding: 'utf8' });

    const links = markdownLinkExtractor(markdown, false);
    const objeto= {
      file:pathMD,
      links:[]
    }
    links.forEach(link => objeto.links.push(link));
    linksObj.push(objeto)

});


  return linksObj;

}


module.exports = {
  readMD
}