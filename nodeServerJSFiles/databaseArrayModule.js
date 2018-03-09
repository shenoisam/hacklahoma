var mongodbFuncs = require(__dirname+'/mongodbFuncs.js');



arr = mongodbFuncs.getData; 
console.log("In the databaseArrayModule")


console.log(arr[0])
module.exports = {arr};
