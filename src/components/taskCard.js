import { h } from 'hyperapp'

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

const displayDecription = (bool, description) => {
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
      <div className={'task__card ' + 'task__card' + '__' + props.category} onmouseover={() => console.log('Hover')}>
        {completed(props.isDone)}
        <div className='container__horizontal'>
          <h3>{props.tasks}</h3>
          <button onclick={() => actions.openDescription(props.id)}>
            <img src='../asset/img/drop-down-arrow.png' alt='open description'/>
          </button>
        </div>
        {displayDecription(props.displayDecription, props.description)}
        <div className='width--100 content--center'>
          <div className='container__horizontal'>
            <img src='../asset/img/passage-of-time.png' alt='Due date'/>
            <p className='task__card__date'>{props.dueDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
