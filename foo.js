// require path
var path = require('path');

// module exports /a/b/file.txt => .TXT
module.exports.extnameAllCaps = function (file) {
  console.log('-- extnameAllCaps --');
  console.log(path.extname(file));

  return path.extname(file).toUpperCase();
};

// module exports /a/b/file.txt => FILE.TXT
module.exports.basenameAllCaps = function (file) {
  // basename is the base file
  console.log('-- basenameAllCaps --');
  console.log(path.basename(file));

  return path.basename(file).toUpperCase();
};
