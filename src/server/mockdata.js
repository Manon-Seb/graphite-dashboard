let casual = require('casual');

// Create an object for config file
let db = {update:[true],team:[],members:[],events:[],tasks:[],news:[],
  userAction:{task:
    { displayPopUp: false,
      taskName:'',
      taskDescription:'',
      taskDate:'',
      taskCategory:'none',
      communication: false,
      fanzine: false,
      reunion: false
    },
    news: {
      equipe: false,
      evenement: false,
      atelier: false,
      autre: false
    }}};

for (let i=0; i<3; i++){
  let team = {};
  team.id = i;
  team.name = casual.first_name;
  team.job = casual.words(1);
  team.subject = casual.words(1);
  team.age = casual.integer(20,25);
  team.description = casual.words(casual.integer(1,6));
  team.drawingTechnique = casual.random_element(['traditionnelle','digitale', 'traditionnelle et digitale']);
  team.publicationNb = casual.integer(1,5);
  db.team.push(team);
}
for(let i=0; i<=20; i++){
   let members = {};
   members.id = i;
   members.name = casual.first_name;
   members.job = casual.random_element(['Illustrateur','BDéiste', 'Noveliste', 'Chargé de communication', 'Secrétaire']);
   members.subject = casual.words(1);
   members.age = casual.integer(20,25);
   members.description = casual.words(casual.integer(1,6));
   team.drawingTechnique = casual.random_element(['traditionnelle','digitale', 'traditionnelle et digitale']);
   members.publicationNb = casual.integer(1,5);
   members.year = casual.random_element([2017,2018,2019]);
   db.members.push(members);
}

for(let i=0; i<=10; i++){
  let tasks = {};
  tasks.id = i;
  tasks.idMember = casual.integer(0,db.members.length);
  tasks.tasks = casual.words(casual.integer(4,8));
  tasks.dueDate = casual.date(format = 'YYYY-MM-DD');
  tasks.category = casual.random_element(['reunion','fanzine','communication']);
  tasks.description = casual.words(casual.integer(10,25));
  tasks.action = {
    displayDescription: false,
    displayPopUp: false
  }
  tasks.isDone = casual.boolean;
  db.tasks.push(tasks);
}

for(let i=0; i<=10; i++){
  let news = {};
  news.id = i;
  news.name = casual.words(casual.integer(2,5));
  news.date = casual.date(format = 'YYYY-MM-DD');
  news.description = casual.words(casual.integer(1,6));
  db.news.push(news);
}

for(let i=0; i<=5; i++){
  let events = {};
  events.id = i;
  events.name = casual.words(casual.integer(3,9));
  events.date = casual.date;
  events.place = casual.place;
  events.description = casual.words(casual.integer(10,20))
  db.events.push(events);
}

console.log(JSON.stringify(db));
