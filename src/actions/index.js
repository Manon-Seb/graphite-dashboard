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
