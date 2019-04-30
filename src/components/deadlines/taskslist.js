import { h } from 'hyperapp'
import taskCard from './taskCard'
import popUp from './popUp'

const displayList = (arr, action) => arr.map(i => taskCard(i, action))
const displayByCategory = (arr, fanzine, communication, reunion, action) => {
  if (fanzine === true || reunion === true || communication === true) {
    const list = []
      .concat((fanzine) ? arr.filter(i => i.category === 'fanzine') : [])
      .concat((reunion) ? arr.filter(i => i.category === 'reunion') : [])
      .concat((communication) ? arr.filter(i => i.category === 'communication') : [])
    return (displayList(list, action))
  } else if (fanzine === false && reunion === false && communication === false) {
    return (displayList(arr, action))
  }
}

export default (state, actions) => {
  return (
    <div>
      <div className='tasksList container__horizontal'>
        <div className='width--70'>
          <div className='tasks'>
            {displayByCategory(state.tasks, state.userAction.task.fanzine, state.userAction.task.communication, state.userAction.task.reunion, actions)}
          </div>
          <button className='button__add' onclick={() => actions.displayPopUp()}>Ajouter une tâche</button>
        </div>
        <div className='container__vertical margin--5'>
          <h2> Catégories </h2>
          <button className={state.userAction.task.fanzine ? 'category__button fanzine isActive' : 'category__button fanzine'} onclick={() => actions.isClick(1)}> Fanzine </button>
          <button className={state.userAction.task.communication ? 'category__button communication isActive' : 'category__button communication'} onclick={() => actions.isClick(2)}> Communication </button>
          <button className={state.userAction.task.reunion ? 'category__button reunion isActive' : 'category__button reunion'} onclick={() => actions.isClick(3)}> Réunion </button>
        </div>
      </div>
      {popUp(state.userAction.task.displayPopUp, actions)}
    </div>
  )
}
