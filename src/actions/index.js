export default {
  updateState: () => (state) => {
    if (state === JSON.parse(JSON.stringify(require('D:/IMAC/Dashboard/graphite-dashboard/src/server/db.json')))) return state
    return (
      JSON.parse(JSON.stringify(require('D:/IMAC/Dashboard/graphite-dashboard/src/server/db.json')))
    )
  },

  openDescription: (id) => (state) => {
    if (state.tasks[id].displayDecription === false) {
      // const taskArray = [...state.tasks]
      // taskArray.splice(id, 0, {...state.tasks[id], displayDecription: true})
      const taskArray = state.tasks.slice(0, id).concat([{...state.tasks[id], displayDecription: true}]).concat(state.tasks.slice(id + 1, state.tasks.length))
      console.log(taskArray)
      return {...state,
        tasks: taskArray
      }
    }
    const taskArray = state.tasks.slice(0, id).concat([{...state.tasks[id], displayDecription: false}]).concat(state.tasks.slice(id + 1, state.tasks.length))
    return {...state,
      tasks: taskArray
    }
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
