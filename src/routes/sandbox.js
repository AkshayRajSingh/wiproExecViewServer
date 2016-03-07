var express_1 = require('express');
var test_1 = require('../app_modules/test');
var sandbox = express_1.Router();
//////////////////////////////////////////
//Rest Parameter
////////////////////////////////////////////////////
sandbox.get('/', function (req, res, next) {
    // 
    var t = new test_1.default();
    //t.executeQuery();
    //res.render('sandbox', { title: 'sandbox'});
    res.send(JSON.stringify({ a: 1 }));
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sandbox;
//# sourceMappingURL=sandbox.js.map