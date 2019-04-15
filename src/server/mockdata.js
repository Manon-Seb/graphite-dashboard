var casual = require('casual');

// Create an object for config file
var db = {members:[],events:[]};

for(var i=0; i<=20; i++){
   var members = {};
   members.id = i;
   members.surname = casual.first_name;
   members.lastname = casual.last_name;
   members.pathway = casual.words(1);
   members.age = casual.integer(20,25);
   members.description = casual.words(casual.integer(1,6));
   members.technique = casual.words(1);
   members.nbPublication = casual.integer(1,5);
   db.members.push(members);
}

for(var i=0; i<=5; i++){
  var events = {};
  events.title = casual.words(casual.integer(3,9));
  events.date = casual.date;
  events.place = casual.place;
  db
}

console.log(JSON.stringify(db));

/*
âge
description rapide
spécialité (paysage, personnage, tout, véhicules etc)
technique (traditionnelle, digital, ou les deux)
nombre de publications, de dessins, BD, articles
*/
