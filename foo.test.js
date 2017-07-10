// require for test
var proxyquire =  require('proxyquire');
// equal
var assert =  require('assert');
// stub path
var pathStub   =  { };

// when no overrides are specified, path.extname behaves normally
// var foo, the require foo
// what exactly path: {}? => so we override path.extname in ./foo.js
var foo = proxyquire('./foo', { 'path': pathStub });
// equal, foo.xxxx, no change
assert.equal(foo.extnameAllCaps('file.txt'), '.TXT');

// override path.extname in ./foo.js
// the origin pathStub.extname is get file extention
// now we override it, so it returns the text and later uppper case.
pathStub.extname = function (file) { return 'Exterminate, exterminate the ' + file; };

// path.extname now behaves as we told it to
assert.equal(foo.extnameAllCaps('file.txt'), 'EXTERMINATE, EXTERMINATE THE FILE.TXT');

// path.basename and all other path module methods still function as before
assert.equal(foo.basenameAllCaps('/a/b/file.txt'), 'FILE.TXT');
