const deleteData = (url) => {
  return fetch(url, {method: 'DELETE'})
}

const changeData = (url, object) => {
  return fetch(url, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(object)
  })
}

const addData = (url, object) => {
  return fetch(url, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(object)
  })
}

export default {

  addTeamPopUp: () => (state) => {
    console.log('display team pop up')
    return {
      ...state,
      userAction: {
        ...state.userAction,
        team: {
          ...state.userAction.team,
          displayPopUp: !state.userAction.team.displayPopUp
        }
      }
    }
  },

  addMemberPopUp: () => (state) => {
    console.log('display members pop up')
    return {
      ...state,
      userAction: {
        ...state.userAction,
        members: {
          ...state.userAction.members,
          displayPopUp: !state.userAction.members.displayPopUp
        }
      }
    }
  },

  addNewsPopUp: () => (state) => {
    return {...state, userAction: {...state.userAction, news: {...state.userAction.news, displayPopUp: !state.userAction.news.displayPopUp}}}
  },

  addNews: () => (state) => {
    const today = new Date()
    const newNews = {
      name: state.userAction.news.newsName,
      date: String(today.getFullYear() + '-' + String(today.getMonth() + 1) + '-' + String(today.getDate())),
      category: state.userAction.news.newsCategory,
      description: state.userAction.news.newsDescription,
      fullDescription: '',
      img: state.userAction.news.newsImage
    }
    addData('http://localhost:8080/news', newNews)
    const newArray = [...state.news].concat([newNews])
    // addData('http://localhost:8080/tasks', newTask)
    return {...state,
      news: newArray,
      userAction: {
        ...state.userAction,
        news: {
          ...state.userAction.news,
          displayPopUp: false
        }
      }
    }
  },

  addTask: () => (state) => {
    const newTask = {
      idMember: 0,
      tasks: state.userAction.task.taskName,
      dueDate: state.userAction.task.taskDate,
      category: state.userAction.task.taskCategory,
      description: state.userAction.task.taskDescription,
      action: {
        displayDescription: false,
        displayPopUp: false
      },
      isDone: false
    }
    addData('http://localhost:8080/tasks', newTask)
    const newArray = [...state.tasks].concat([newTask])
    // addData('http://localhost:8080/tasks', newTask)
    return {...state,
      tasks: newArray
    }
  },

  changeNews: (id) => (state) => {
    const newsId = state.news.findIndex(i => i.id === id)
    const changedNews = {
      ...state.news[newsId],
      name: state.userAction.news.newsName,
      category: state.userAction.news.newsCategory,
      description: state.userAction.news.newsDescription,
      img: state.userAction.news.newsImage,
      displayEditPopUp: false,
      displayPopUp: false
    }
    changeData('http://localhost:8080/news/' + id, changedNews)
    const newsArray = state.tasks.slice(0, newsId)
      .concat([changedNews])
      .concat(state.tasks.slice(newsId + 1, state.news.length))
    return {...state,
      news: newsArray
    }
  },

  changeTask: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    const changedTask = {
      idMember: 0,
      tasks: state.userAction.task.taskName,
      dueDate: state.userAction.task.taskDate,
      category: state.userAction.task.taskCategory,
      description: state.userAction.task.taskDescription,
      action: {
        displayDescription: false,
        displayPopUp: false
      },
      isDone: false
    }
    changeData('http://localhost:8080/tasks/' + id, changedTask)
    const taskArray = state.tasks.slice(0, taskId)
      .concat([changedTask])
      .concat(state.tasks.slice(taskId + 1, state.tasks.length))
    return {...state,
      tasks: taskArray
    }
  },

  deleteTask: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    deleteData('http://localhost:8080/tasks/' + id)
    const taskArray = state.tasks.slice(0, taskId).concat(state.tasks.slice(taskId + 1, state.tasks.length))
    return {...state, tasks: taskArray}
  },

  displayPopUp: () => (state) => {
    return {...state, userAction: {...state.userAction, task: {...state.userAction.task, displayPopUp: !state.userAction.task.displayPopUp}}}
  },

  isClick: (nb) => (state) => {
    if (nb === 1) return {...state, userAction: {...state.userAction, task: {...state.userAction.task, fanzine: !state.userAction.task.fanzine}}}
    if (nb === 2) return {...state, userAction: {...state.userAction, task: {...state.userAction.task, communication: !state.userAction.task.communication}}}
    if (nb === 3) return {...state, userAction: {...state.userAction, task: {...state.userAction.task, reunion: !state.userAction.task.reunion}}}
  },

  // MEMBERS
  memberDisplayFullProfile: (id) => (state) => {
    const memberId = state.members.findIndex(i => i.id === id)
    const member = {
      ...state.members[memberId],
      displayFullProfile: !state.members[memberId].displayFullProfile
    }
    const memberArray = state.members.slice(0, memberId)
      .concat(member)
      .concat(state.members.slice(memberId + 1, state.members.length))
    return {
      ...state,
      members: memberArray
    }
  },

  teamDisplayFullProfile: (id) => (state) => {
    const teamId = state.team.findIndex(i => i.id === id)
    const team = {
      ...state.team[teamId],
      displayFullProfile: !state.team[teamId].displayFullProfile
    }
    const teamArray = state.team.slice(0, teamId)
      .concat(team)
      .concat(state.team.slice(teamId + 1, state.team.length))
    return {
      ...state,
      team: teamArray
    }
  },

  deleteMembers: (id) => (state) => {
    const memberId = state.members.findIndex(i => i.id === id)
    const memberArray = state.members.slice(0, memberId)
      .concat(state.members.slice(memberId + 1, state.members.length))
    deleteData('http://localhost:8080/members/' + id)
    return {
      ...state,
      members: memberArray
    }
  },

  deleteTeam: (id) => (state) => {
    const teamId = state.team.findIndex(i => i.id === id)
    const teamArray = state.team.slice(0, teamId)
      .concat(state.team.slice(teamId + 1, state.team.length))
    deleteData('http://localhost:8080/team/' + id)
    return {
      ...state,
      team: teamArray
    }
  },

  addMember: () => (state) => {
    const newTeam = {
      name: state.userAction.team.teamName,
      job: state.userAction.team.teamJob,
      subject: state.userAction.team.teamFiliere,
      age: state.userAction.team.teamAge,
      description: state.userAction.team.teamDescription,
      drawingTechnique: state.userAction.team.teamTech,
      publicationNb: state.userAction.team.teamNbPublication,
      img: state.userAction.team.teamImg
    }
    addData('http://localhost:8080/members', newTeam)
    const newArray = [...state.team].concat([newTeam])
    // addData('http://localhost:8080/tasks', newTask)
    return {...state,
      members: newArray
    }
  },

  addTeamMember: () => (state) => {
    const newTeam = {
      name: state.userAction.team.teamName,
      job: state.userAction.team.teamJob,
      subject: state.userAction.team.teamFiliere,
      age: state.userAction.team.teamAge,
      description: state.userAction.team.teamDescription,
      drawingTechnique: state.userAction.team.teamTech,
      publicationNb: state.userAction.team.teamNbPublication,
      img: state.userAction.team.teamImg
    }
    addData('http://localhost:8080/team', newTeam)
    const newArray = [...state.team].concat([newTeam])
    // addData('http://localhost:8080/tasks', newTask)
    return {...state,
      team: newArray
    }
  },

  membersEditPopUp: (id) => (state) => {
    const memberId = state.members.findIndex(i => i.id === id)
    const member = {
      ...state.members[memberId],
      displayPopUp: !state.members[memberId].displayPopUp
    }
    const memberArray = state.members.slice(0, memberId)
      .concat(member)
      .concat(state.members.slice(memberId + 1, state.members.length))

    const user = {
      ...state.userAction,
      team: {
        ...state.team,
        teamName: state.members[memberId].name,
        teamJob: state.members[memberId].job,
        teamFiliere: state.members[memberId].subject,
        teamAge: state.members[memberId].age,
        teamDescription: state.members[memberId].description,
        teamTech: state.members[memberId].drawingTechnique,
        teamPublicationNb: state.members[memberId].publicationNb,
        teamImg: state.members[memberId].img
      }
    }
    console.log(user)
    return {
      ...state,
      members: memberArray,
      userAction: user
    }
  },

  teamEditPopUp: (id) => (state) => {
    const teamId = state.team.findIndex(i => i.id === id)
    const team = {
      ...state.team[teamId],
      displayPopUp: !state.team[teamId].displayPopUp
    }
    const teamArray = state.team.slice(0, teamId)
      .concat(team)
      .concat(state.team.slice(teamId + 1, state.team.length))

    const user = {
      ...state.userAction,
      team: {
        ...state.team,
        teamName: state.team[teamId].name,
        teamJob: state.team[teamId].job,
        teamFiliere: state.team[teamId].subject,
        teamAge: state.team[teamId].age,
        teamDescription: state.team[teamId].description,
        teamTech: state.team[teamId].drawingTechnique,
        teamPublicationNb: state.team[teamId].publicationNb,
        teamImg: state.team[teamId].img
      }
    }
    console.log(user.team)
    return {
      ...state,
      team: teamArray,
      userAction: user
    }
  },

  editMember: (id) => (state) => {
    const membersId = state.members.findIndex(i => i.id === id)
    const changedmembers = {
      ...state.members[membersId],
      name: state.userAction.team.teamName,
      job: state.userAction.team.teamJob,
      subject: state.userAction.team.teamFiliere,
      age: state.userAction.team.teamAge,
      description: state.userAction.team.teamDescription,
      drawingTechnique: state.userAction.team.teamTech,
      publicationNb: state.userAction.team.teamNbPublication,
      img: state.userAction.team.teamImg,
      displayPopUp: false,
      displayFullProfile: false
    }
    changeData('http://localhost:8080/members/' + id, changedmembers)
    const membersArray = state.members.slice(0, membersId)
      .concat([changedmembers])
      .concat(state.members.slice(membersId + 1, state.members.length))
    return {...state,
      members: membersArray
    }
  },

  editTeam: (id) => (state) => {
    console.log(state.userAction.team)
    const teamId = state.team.findIndex(i => i.id === id)
    const changedmembers = {
      ...state.team[teamId],
      name: state.userAction.team.teamName,
      job: state.userAction.team.teamJob,
      subject: state.userAction.team.teamFiliere,
      age: state.userAction.team.teamAge,
      description: state.userAction.team.teamDescription,
      drawingTechnique: state.userAction.team.teamTech,
      publicationNb: state.userAction.team.teamNbPublication,
      img: state.userAction.team.teamImg,
      displayPopUp: false,
      displayFullProfile: false
    }
    changeData('http://localhost:8080/team/' + id, changedmembers)
    const teamArray = state.team.slice(0, teamId)
      .concat([changedmembers])
      .concat(state.team.slice(teamId + 1, state.team.length))
    return {...state,
      team: teamArray
    }
  },

  teamName: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamName: string}}}
  },

  teamJob: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamJob: string}}}
  },

  teamFiliere: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamFiliere: string}}}
  },

  teamImg: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamImg: string}}}
  },

  teamAge: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamAge: string}}}
  },

  teamDescription: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamDescription: string}}}
  },

  teamNbPublication: (string) => (state) => {
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamNbPublication: string}}}
  },

  teamTechnique: () => (state) => {
    const element = document.getElementById('teamCategorie').selectedIndex
    const value = document.getElementById('teamCategorie').options[element].value
    return {...state, userAction: {...state.userAction, team: {...state.userAction.team, teamTech: value}}}
  },

  // NEWS

  newsDelete: (id) => (state) => {
    const newsId = state.news.findIndex(i => i.id === id)
    const newsArray = state.news.slice(0, newsId)
      .concat(state.news.slice(newsId + 1, state.news.length))
    deleteData('http://localhost:8080/news/' + id)
    return {...state,
      news: newsArray
    }
  },

  newsOpenEdit: (id) => (state) => {
    const newsId = state.news.findIndex(i => i.id === id)
    const changedNews = {
      ...state.news[newsId],
      displayEditPopUp: true
    }
    const saveData = {
      ...state.userAction.news,
      newsName: state.news[newsId].name,
      newsImage: state.news[newsId].img,
      newsDescription: state.news[newsId].description,
      newsCategory: state.news[newsId].category
    }
    const newsArray = state.news.slice(0, newsId)
      .concat([changedNews])
      .concat(state.news.slice(newsId + 1, state.news.length))
    return {...state,
      news: newsArray,
      userAction: {
        ...state.userAction,
        news: saveData
      }
    }
  },

  newsCloseEdit: (id) => (state) => {
    const newsId = state.news.findIndex(i => i.id === id)
    const changedNews = {
      ...state.news[newsId],
      displayEditPopUp: false
    }
    const newsArray = state.news.slice(0, newsId)
      .concat([changedNews])
      .concat(state.news.slice(newsId + 1, state.news.length))
    return {...state,
      news: newsArray
    }
  },

  newsHoverIn: (id) => (state) => {
    const newsId = state.news.findIndex(i => i.id === id)
    const changedNews = {
      ...state.news[newsId],
      displayPopUp: true
    }
    const newsArray = state.news.slice(0, newsId)
      .concat([changedNews])
      .concat(state.news.slice(newsId + 1, state.news.length))
    return {...state,
      news: newsArray
    }
  },

  newsHoverOut: (id) => (state) => {
    const newsId = state.news.findIndex(i => i.id === id)
    const changedNews = {
      ...state.news[newsId],
      displayPopUp: false
    }
    const newsArray = state.news.slice(0, newsId)
      .concat([changedNews])
      .concat(state.news.slice(newsId + 1, state.news.length))
    return {...state,
      news: newsArray
    }
  },

  newsName: (string) => (state) => {
    return {...state, userAction: {...state.userAction, news: {...state.userAction.news, newsName: string}}}
  },

  newsImage: (string) => (state) => {
    return {
      ...state,
      userAction: {
        ...state.userAction,
        news: {
          ...state.userAction.news,
          newsImage: string
        }
      }
    }
  },

  newsCategory: () => (state) => {
    const element = document.getElementById('NewsEditcategorie').selectedIndex
    const value = document.getElementById('NewsEditcategorie').options[element].value
    return {...state, userAction: {...state.userAction, news: {...state.userAction.news, newsCategory: value}}}
  },

  newsDescription: (string) => (state) => {
    return {
      ...state,
      userAction: {
        ...state.userAction,
        news: {
          ...state.userAction.news,
          newsDescription: string
        }
      }
    }
  },

  openDescription: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    if (state.tasks[taskId].action.displayDescription === false) {
      const taskArray = state.tasks.slice(0, taskId)
        .concat([{...state.tasks[taskId], action: {...(state.tasks[taskId].action), displayDescription: true}}])
        .concat(state.tasks.slice(taskId + 1, state.tasks.length))
      return {...state,
        tasks: taskArray
      }
    }
    const taskArray = state.tasks.slice(0, taskId).concat([{...state.tasks[taskId], action: {...state.tasks[taskId].action, displayDescription: false}}]).concat(state.tasks.slice(taskId + 1, state.tasks.length))
    return {...state,
      tasks: taskArray
    }
  },
  taskCategory: () => (state) => {
    const element = document.getElementById('categorie').selectedIndex
    const value = document.getElementById('categorie').options[element].value
    return {...state, userAction: {...state.userAction, task: {...state.userAction.task, taskCategory: value}}}
  },
  taskDate: (string) => (state) => {
    return {...state, userAction: {...state.userAction, task: {...state.userAction.task, taskDate: string}}}
  },
  taskDescription: (string) => (state) => {
    return {...state, userAction: {...state.userAction, task: {...state.userAction.task, taskDescription: string}}}
  },
  taskDone: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    const task = {...state.tasks[taskId], isDone: !state.tasks[taskId].isDone}
    const taskArray = state.tasks.slice(0, taskId)
      .concat([task])
      .concat(state.tasks.slice(taskId + 1, state.tasks.length))
    changeData('http://localhost:8080/tasks/' + id, task)
    return {...state,
      tasks: taskArray
    }
  },
  taskName: (string) => (state) => {
    return {...state, userAction: {...state.userAction, task: {...state.userAction.task, taskName: string}}}
  },
  taskPopUp: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    const taskArray = state.tasks.slice(0, taskId)
      .concat([{...state.tasks[taskId], action: {...state.tasks[taskId].action, displayPopUp: !state.tasks[taskId].action.displayPopUp}}])
      .concat(state.tasks.slice(taskId + 1, state.tasks.length))
    console.log(taskArray[taskId])
    return {...state,
      tasks: taskArray,
      userAction: {...state.userAction,
        task: {...state.userAction.task,
          taskName: state.tasks[taskId].tasks,
          taskDescription: state.tasks[taskId].description,
          taskDate: state.tasks[taskId].dueDate,
          taskCategory: state.tasks[taskId].category
        }
      }
    }
  },

  updateState: () => (state) => {
    if (state === JSON.parse(JSON.stringify(require('../server/db.json')))) return state
    return (
      JSON.parse(JSON.stringify(require('../server/db.json')))
    )
  },
  /* NEWS */
  newsCategoryIsClick: (nb) => (state) => {
    if (nb === 1) return {...state, userAction: {...state.userAction, news: {...state.userAction.news, equipe: !state.userAction.news.equipe}}}
    if (nb === 2) return {...state, userAction: {...state.userAction, news: {...state.userAction.news, evenement: !state.userAction.news.evenement}}}
    if (nb === 3) return {...state, userAction: {...state.userAction, news: {...state.userAction.news, atelier: !state.userAction.news.atelier}}}
    if (nb === 4) return {...state, userAction: {...state.userAction, news: {...state.userAction.news, autre: !state.userAction.news.autre}}}
  }
}

/* const members = getPromise('http://localhost:8080/members').then(responses => getData(responses))
const tasks = getPromise('http://localhost:8080/events').then(responses => getData(responses))
const events = getPromise('http://localhost:8080/events').then(responses => getData(responses))
const news = getPromise('http://localhost:8080/news').then(responses => getData(responses)) */

/*
const getPromise = (url) => {
  return fetch(url)
}

const getData = (response) => {
  return response.json()
}

const deleteData = (url) => {
  return fetch(url, {method: 'DELETE'})
}

const addData = (url, object) => {
  return fetch(url, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(object)
  })
}

const changeData = (url, object) => {
  fetch(url, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(object)
  })
} */
