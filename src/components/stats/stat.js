import { h } from 'hyperapp'
import Chart from 'chart.js'

const nbMemberByYear = (members) => {
  const year1 = members.filter(i => i.year === 2017).length
  const year2 = members.filter(i => i.year === 2018).length
  const year3 = members.filter(i => i.year === 2019).length
  return {data: [year1, year2, year3],
    label: ['2017', '2018', '2019']}
}

const pieChart = (props) => {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: props.data,
            backgroundColor: [
              'rgb(255, 178, 0)',
              'rgb(0, 255, 165)',
              'rgb(255, 0, 127)'
            ]
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: props.label
        },
        options: {}
      })
    }
  })
}

const lineChart = (props) => {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            data: props.data,
            backgroundColor: 'rgb(255,178,0)',
            borderColor: 'rgb(255,178,0)',
            fill: false,
            label: 'Membres par années'
          }],
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: props.label
        },
        options: {}
      })
    }
  })
}

const doughnutChart = (props) => {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: props.data,
            backgroundColor: [
              'rgb(255, 178, 0)',
              'rgb(0, 255, 165)',
              'rgb(255, 0, 127)'
            ]
          }],

          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: props.label
        },
        options: {}
      })
    }
  })
}

const barChart = (props) => {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const data = props.data // or whatever
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: props.label,
          datasets: [{
            label: '# of Members',
            data: data,
            backgroundColor: [
              'rgb(255, 178, 0)',
              'rgb(0, 255, 165)',
              'rgb(255, 0, 127)'
            ],
            borderWidth: 1
          }],
          labels: props.label
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

export default (state, action) => {
  return (
    <div className='container__horizontal'>
      <div className='stat__left margin--5'>
        {lineChart(nbMemberByYear(state.members))}
        {barChart(nbMemberByYear(state.members))}
      </div>
      <div className='stat__right'>
        {pieChart(nbMemberByYear(state.members))}
      </div>
    </div>
  )
}
