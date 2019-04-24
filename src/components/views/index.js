import { h } from 'hyperapp'
import taskslist from '../taskslist'
// METHOD 1

// the whole promise chain fails with an error here
// change that:
// make errors appear as members of the results array

// Fix it:
/*
Promise.all(urls.map(url => fetch(url)))
  .then(responses => Promise.all(responses.map(r => r.json())))
// Demo output (no need to change):
 .then(results => {
    console.log(results[0][0].name)
  }) */
// METHOD 2
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

/*
addData('http://localhost:8080/news', {
  name: 'esse atque perferendis tenetur voluptas',
  description: 'impedit'
})

changeData('http://localhost:8080/news/15', {
  name: 'Atelier dessin',
  description: 'Apprendre à dessiner un personnage'
})

*/
const display = (state, actions) => {
  if (state !== undefined) {
    return (taskslist(state, actions))
  }
  return <p> Error !</p>
}
export default(state, actions) => {
  if (state.update[0] === false) {
    actions.updateState()
  }
  return (
    <main>
      {display(state.tasks, actions)}
    </main>
  )
}
