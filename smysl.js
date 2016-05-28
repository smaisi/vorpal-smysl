
var fs = require('fs');
var vorpal = require('vorpal')();
var count = 0;



vorpal
    .command('fileAdd <filePath>', 'Copy file to the same directory')
    .action(function(args,callback){
    fs.appendFile('a.js', "\n" + args.filePath, function(err){if(err){return err;}});
    callback();
    });



vorpal
      .command('add <numberOne>', 'Adds a number')
      .action(function(args, callback) {
        count+=args.numberOne;
        this.log('new number is ',count);
        callback();
      });
      
vorpal
    .delimiter('smysl')
    .show();