var alert3 = require('./src-3.js');

var src2 = function() {
    alert('With multiple files!');
    alert3();
}

module.exports = src2;