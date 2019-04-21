var casual = require('casual');

// Create an object for config file
var db = {update:[true],members:[],events:[],tasks:[],news:[]};

for(var i=0; i<=20; i++){
   var members = {};
   members.id = i;
   members.name = casual.first_name;
   members.job = casual.words(1);
   members.subject = casual.words(1);
   members.age = casual.integer(20,25);
   members.description = casual.words(casual.integer(1,6));
   members.drawingTechnique = casual.words(1);
   members.publicationNb = casual.integer(1,5);
   db.members.push(members);
}

for(var i=0; i<=10; i++){
  var tasks = {};
  tasks.id = i;
  tasks.idMember = casual.integer(0,db.members.length);
  tasks.tasks = casual.words(casual.integer(4,8));
  tasks.dueDate = casual.date;
  tasks.category = casual.words(1);
  db.tasks.push(tasks);

}

for(var i=0; i<=10; i++){
  var news = {};
  news.id = i;
  news.name = casual.words(casual.integer(2,5));
  news.date = casual.date;
  news.description = casual.words(casual.integer(1,6));
  db.news.push(news);
}

for(var i=0; i<=5; i++){
  var events = {};
  events.id = i;
  events.name = casual.words(casual.integer(3,9));
  events.date = casual.date;
  events.place = casual.place;
  events.description = casual.words(casual.integer(10,20))
  db.events.push(events);
}

console.log(JSON.stringify(db));
