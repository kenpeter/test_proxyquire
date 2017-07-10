var foo = require('./foo');

var file1 = foo.extnameAllCaps('/a/b/file.txt');
console.log(file1);

var file2 = foo.basenameAllCaps('/a/b/file.txt');
console.log(file2);
