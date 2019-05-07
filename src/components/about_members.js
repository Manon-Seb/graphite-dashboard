import { h } from 'hyperapp'
import Chart from 'chart.js'
import tasksList from './deadlines/taskslist'
import memberList from './member/memberlist'
import stat from './stats/stat'

const display = (state, actions) => {
  if (state !== undefined) {
    return (tasksList(state, actions))
  }
  return <p> Error !</p>
}

export default (state, actions) => {
  return (
    <div class="left">
      <div class="team category">
        <h2>L'équipe 2019-2020</h2>
        <div class="profiles">
          {memberList(state.team)}
        </div>
      </div>

      <div class="stats_members category">
        <h2>Nos membres dans l'ensemble</h2>
        {stat(state, actions)}
      </div>

      <div class="deadlines category">
        <h2>Deadlines</h2>
        <div>
          {display(state, actions)}
        </div>
      </div>
    </div>
  )
}
