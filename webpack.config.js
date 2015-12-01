/**
 * Created by wrynnsun on 15/12/1.
 */
var path = require('path');
module.exports = {
    entry:path.resolve(__dirname,'app/main.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    }
};