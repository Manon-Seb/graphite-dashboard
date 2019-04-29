import { h } from 'hyperapp'

export default (task, action, bool) => {
  if (bool) {
    return (
      <div className='popUp'>
        <div className='popUp__form'>
          <div className='margin--5'>
            <h2>Modifier la tâche</h2>
            <div className='container__vertical margin--3'>
              <label>Name</label>
              <input type='text' value={task.tasks} oninput={e => action.taskName(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Description</label>
              <textarea rows='7' oninput={e => action.taskDescription(e.target.value)}>
                {task.description}
              </textarea>
            </div>
            <div className='container__horizontal margin--3 space-between'>
              <div className='popUp__label container__vertical'>
                <label>Date</label>
                <input type='text' value={action.taskDate(task.dueDate)} oninput={e => action.taskDate(e.target.value)}/>
              </div>
              <div className='popUp__label container__vertical'>
                <label>Catégorie</label>
              </div>
            </div>
            <div className='popUp__container container__horizontal'>
              <button className='popUp__Add' onclick={() => action.addTask()}>Modify Task</button>
              <button className='popUp__Cancel' onclick={() => action.taskPopUp(task.id)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
