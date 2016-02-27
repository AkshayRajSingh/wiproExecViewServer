
import {Router} from 'express';
import Person from '../app_modules/test';
const sandbox = Router();
//////////////////////////////////////////

//Rest Parameter


class PersonList{
  
  addPersons(...persons:Person[]){
   console.log(persons.length);
  
  }
  
}



////////////////////////////////////////////////////

sandbox.get('/', function(req, res, next) {
 // 
var personLst = new PersonList();
var p = new Person();
p.name ='abc';
p.age = 25;

var p1 = new Person();
p1.name ='abc';
p1.age = 25;
personLst.addPersons(p,p1);
res.send(personLst[0].toString());
//res.render('sandbox', { title: 'sandbox'});

});





/////////////////////////////////////////////////////////








export default sandbox;