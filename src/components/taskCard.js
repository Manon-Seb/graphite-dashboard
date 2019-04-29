import { h } from 'hyperapp'
import modifyPopUp from './modifyPopUp'

const completed = (bool) => {
  if (bool === true) {
    return (
      <div className='container__horizontal'>
        <div className='task__card__state--green margin--5'></div>
        <p className='task__card__state__text'> Completed </p>
      </div>
    )
  }
  return (
    <div className='container__horizontal'>
      <div className='task__card__state--purple margin--5'></div>
      <p className='task__card__state__text'> In progress </p>
    </div>
  )
}

const displayDescription = (bool, description) => {
  if (bool === true) {
    return (
      <div className='width--100 content--center'>
        <div className='width--70'>
          <p>{description}</p>
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
          {completed(props.isDone)}
          <div className='container__horizontal task__option'>
            <img className='task__option__img' src='../asset/img/waste-bin.png' alt='delete task' onclick={() => actions.deleteTask(props.id)}/>
            <img className='task__option__img' src='../asset/img/pencil.png' alt='modify task' onclick={() => actions.taskPopUp(props.id)}/>
            <img className='task__option__img' src='../asset/img/more.png' alt='more' onclick={() => console.log('more')}/>
          </div>
        </div>
        <div className='container__horizontal'>
          <h3>{props.tasks}</h3>
          <button onclick={() => actions.openDescription(props.id)}>
            <img src='../asset/img/drop-down-arrow.png' alt='open description'/>
          </button>
        </div>
        {displayDescription(props.action.displayDescription, props.description)}
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
