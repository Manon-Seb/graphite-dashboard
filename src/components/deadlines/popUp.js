import { h } from 'hyperapp'

export default (bool, action) => {
  if (bool) {
    return (
      <div className='popUp'>
        <div className='popUp__form'>
          <div className='margin--5'>
            <h2>Add a new task</h2>
            <div className='container__vertical margin--3'>
              <label>Name</label>
              <input type='text' placeholder='e.g. Envoyer invitation réunion' oninput={e => action.taskName(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Description</label>
              <textarea rows='7' oninput={e => action.taskDescription(e.target.value)}>
                Enter detail here ...
              </textarea>
            </div>
            <div className='container__horizontal margin--3 space-between'>
              <div className='popUp__label container__vertical'>
                <label>Date</label>
                <input type='text' placeholder='YYYY-MM-DD' oninput={e => action.taskDate(e.target.value)}/>
              </div>
              <div className='popUp__label container__vertical'>
                <label>Catégorie</label>
                <select id='categorie' onchange={ () => action.taskCategory()}>
                  <option disabled selected value>-- Categorie --</option>
                  <option selected=''> reunion </option>
                  <option selected='selected'> fanzine </option>
                  <option selected=''> communication   </option>
                </select>
              </div>
            </div>
            <div className='popUp__container container__horizontal'>
              <button className='popUp__Add' onclick={() => action.addTask()}>Add Task</button>
              <button className='popUp__Cancel' onclick={() => action.displayPopUp()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
