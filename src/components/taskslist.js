import { h } from 'hyperapp'
import taskCard from './taskCard'

export default (props, actions) => {
  return (
    <div className='tasksList container__horizontal'>
      <div className='width--70'>
        <div className='tasks'>
          {props.map(task => taskCard(task, actions))}
        </div>
        <p> + ADD TASK </p>
      </div>
      <div>
        <p> categorie 1 </p>
        <p> categorie 2 </p>
        <p> categorie 3 </p>
      </div>
    </div>
  )
}
