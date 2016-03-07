
import {Router} from 'express';
import test from '../app_modules/test';

const sandbox = Router();
//////////////////////////////////////////

//Rest Parameter





////////////////////////////////////////////////////

sandbox.get('/', function(req, res, next) {
 // 
var t = new test();
//t.executeQuery();
//res.render('sandbox', { title: 'sandbox'});
res.send(JSON.stringify({ a: 1 }));
});





/////////////////////////////////////////////////////////








export default sandbox;