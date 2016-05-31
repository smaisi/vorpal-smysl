
var fs = require('fs');
var vorpal = require('vorpal')();

var count = 0;
console.log("Hello in my world!");


function addCommand(vrpl, commandName, description, strAction, cb){
    vrpl
    .command(commandName, description)
    .action(function(args,callback){
    this.log("Hello world from",strAction);
    cb();
    callback();
    });
}



addCommand(vorpal,"Hi1","Say Hi1","Tova e",() => console.log("Here"));
addCommand(vorpal,"Hi2","Oste Po-dobre","WTORATA CHAST");


    
    




vorpal
    .delimiter('smysl')
    .show();
    
    


