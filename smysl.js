var vorpal = require('vorpal')();
var count = 0;



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