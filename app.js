var fs = require('fs');
var PATH = "D:/Projects/zTest"



var temp = fs.access(PATH, fs.R_OK | fs.W_OK, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
  return err;
});



console.log(temp);
