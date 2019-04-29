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
  updateState: () => (state) => {
    if (state === JSON.parse(JSON.stringify(require('D:/IMAC/Dashboard/graphite-dashboard/src/server/db.json')))) return state
    return (
      JSON.parse(JSON.stringify(require('D:/IMAC/Dashboard/graphite-dashboard/src/server/db.json')))
    )
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

  deleteTask: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    deleteData('http://localhost:8080/tasks/' + id)
    const taskArray = state.tasks.slice(0, taskId).concat(state.tasks.slice(taskId + 1, state.tasks.length))
    return {...state, tasks: taskArray}
  },

  displayPopUp: () => (state) => {
    return {...state, userAction: {...state.userAction, displayPopUp: !state.userAction.displayPopUp}}
  },

  addTask: () => (state) => {
    const newTask = {
      idMember: 0,
      tasks: state.userAction.taskName,
      dueDate: state.userAction.taskDate,
      category: state.userAction.taskCategory,
      description: state.userAction.taskDescription,
      action: {
        displayDescription: false,
        displayPopUp: false // verifier
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

  changeTask: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    const changedTask = {
      idMember: 0,
      tasks: state.userAction.taskName,
      dueDate: state.userAction.taskDate,
      category: state.userAction.taskCategory,
      description: state.userAction.taskDescription,
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

  taskName: (string) => (state) => {
    return {...state, userAction: {...state.userAction, taskName: string}}
  },

  taskDescription: (string) => (state) => {
    return {...state, userAction: {...state.userAction, taskDescription: string}}
  },
  taskDate: (string) => (state) => {
    return {...state, userAction: {...state.userAction, taskDate: string}}
  },
  taskCategory: () => (state) => {
    const element = document.getElementById('categorie').selectedIndex
    const value = document.getElementById('categorie').options[element].value
    return {...state, userAction: {...state.userAction, taskCategory: value}}
  },
  taskPopUp: (id) => (state) => {
    const taskId = state.tasks.findIndex(i => i.id === id)
    console.log(taskId)
    const taskArray = state.tasks.slice(0, taskId)
      .concat([{...state.tasks[taskId], action: {...state.tasks[taskId].action, displayPopUp: !state.tasks[taskId].action.displayPopUp}}])
      .concat(state.tasks.slice(taskId + 1, state.tasks.length))
    console.log(taskArray[taskId])
    return {...state,
      tasks: taskArray,
      userAction: {...state.userAction,
        taskName: state.tasks[taskId].tasks,
        taskDescription: state.tasks[taskId].description,
        taskDate: state.tasks[taskId].dueDate,
        taskCategory: state.tasks[taskId].category}}
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
