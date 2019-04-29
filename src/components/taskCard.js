import { h } from 'hyperapp'
import modifyPopUp from './modifyPopUp'

const displayDescription = (bool, props, actions) => {
  if (bool === true) {
    return (
      <div className='width--100 content--center'>
        <div className='width--70'>
          <p>{props.description}</p>
          <div className='container__horizontal'>
            <div className='container__horizontal task__option'>
              <img className='task__option__img' src='../asset/img/waste-bin.png' alt='delete task' onclick={() => actions.deleteTask(props.id)}/>
              <img className='task__option__img' src='../asset/img/pencil.png' alt='modify task' onclick={() => actions.taskPopUp(props.id)}/>
              <img className='task__option__img' src='../asset/img/more.png' alt='more' onclick={() => console.log('more')}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (props, actions) => {
  return (
    <div>
      <div className={'task__card ' + 'task__card' + '__' + props.category}>
        <div className='container__horizontal'>
          <button onclick={() => actions.taskDone(props.id)}>
            ✔️
          </button>
          <h3 onclick={() => actions.openDescription(props.id)}>{props.tasks}</h3>
        </div>
        {displayDescription(props.action.displayDescription, props, actions)}
        <div className='width--100 content--center'>
          <div className='container__horizontal'>
            <img className='task__card__date__img' src='../asset/img/passage-of-time.png' alt='Due date'/>
            <p className='task__card__date'>{props.dueDate}</p>
          </div>
        </div>
      </div>
      {modifyPopUp(props, actions, props.action.displayPopUp)}
    </div>
  )
}
