import { h } from 'hyperapp'
import taskCard from './taskCard'
import popUp from './popUp'

export default (state, actions) => {
  return (
    <div>
      <div className='tasksList container__horizontal'>
        <div className='width--70'>
          <div className='tasks'>
            {state.tasks.map(task => taskCard(task, actions))}
          </div>
          <button onclick={() => actions.displayPopUp()}>Add a task</button>
        </div>
        <div>
          <p> categorie 1 </p>
          <p> categorie 2 </p>
          <p> categorie 3 </p>
        </div>
      </div>
      {popUp(state.userAction.displayPopUp, actions)}
    </div>
  )
}
