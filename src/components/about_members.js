import { h } from 'hyperapp'
import Chart from 'chart.js'
import tasksList from './deadlines/taskslist'
import memberList from './member/memberlist'

const display = (state, actions) => {
  if (state !== undefined) {
    return (tasksList(state, actions))
  }
  return <p> Error !</p>
}
function MyChart (props) {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const data = props.myData // or whatever
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
    //   onupdate: ...,
    //     onremove: ...,
    //     ondestroy: ...,
  })
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
        {MyChart({myData: [50, 50, 30, 12, 21, 30]})}
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
