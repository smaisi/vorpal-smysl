var fs = require('fs-extra');
var PATH = "D:/Projects/zTest/a/b";
var options;
fs.readJson('zconfig.json',(err,obj) => {
  if (err) throw err;
  options = obj;
  for(a in obj['folderShortCuts']) {
    console.log(a);
    var tempPATH = PATH + "/" + obj['folderShortCuts'][a];
    console.log(tempPATH);
    fs.mkdirs(tempPATH,(err) => {
        if (err) throw err;
        console.log(err);
        })
     ;
   }
  
});

