var express_1 = require('express');
var test_1 = require('../app_modules/test');
var sandbox = express_1.Router();
//////////////////////////////////////////
//Rest Parameter
var PersonList = (function () {
    function PersonList() {
    }
    PersonList.prototype.addPersons = function () {
        var persons = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            persons[_i - 0] = arguments[_i];
        }
        console.log(persons.length);
    };
    return PersonList;
})();
////////////////////////////////////////////////////
sandbox.get('/', function (req, res, next) {
    // 
    var personLst = new PersonList();
    var p = new test_1.default();
    p.name = 'abc';
    p.age = 25;
    var p1 = new test_1.default();
    p1.name = 'abc';
    p1.age = 25;
    personLst.addPersons(p, p1);
    res.send(personLst[0].toString());
    //res.render('sandbox', { title: 'sandbox'});
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sandbox;
//# sourceMappingURL=sandbox.js.map