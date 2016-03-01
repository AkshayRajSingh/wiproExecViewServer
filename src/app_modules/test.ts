/// <reference path="../../typings/main.d.ts" />

var DocumentDBClient = require("documentdb").DocumentClient;
import config from '../config';
import dbHelperBase from './dbHelperBase';
import dbHelperQuery from './dbHelperQuery';

var configObj = new config();
var docDbClient = new DocumentDBClient(configObj.host, {
    masterKey: configObj.authKey
});



var dbHelperQueryObj = new dbHelperQuery(docDbClient, configObj.databaseId, configObj.collectionId);

dbHelperQueryObj.executeQuery(function (err, items) {
            if (err) {
                throw (err);
            }
            else{
                var query = {
                    query: 'SELECT * FROM root r where r.type=@type and r.uid=@uid',
                    parameters: [{
                        name: '@type',
                        value: 'master'
                    },
                    {
                        name: '@uid',
                        value: '49aaf588-25b3-47a1-ba68-d9af38f37e2e'
                    }
                    
                    ]
                };

                dbHelperQueryObj.find(query, function (err, items) {
                            if (err) {
                                throw (err);
                            }
                            debugger;
                            var screenslst = items[0].screens;  
                            console.log(screenslst[0]);     
                });    

            }
});







class Person{
  name:string;
  age:number;
}


export default Person;