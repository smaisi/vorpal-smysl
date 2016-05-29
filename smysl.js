
var fs = require('fs');
var vorpal = require('vorpal')();

var count = 0;
console.log("Hello in my world!");



vorpal
    .command('fileRead', 'Read specific file')
    .action(function(args,callback){
    var text = fs.readFileSync('a.js', {encoding: 'utf8'});
    this.log(text);
    callback();
    });
    
    

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
        this.log('new number is ',vorpal.chalk['bgRed'](count));
        callback();
      });
      
vorpal
    .delimiter('smysl')
    .show();
    
    
