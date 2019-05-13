import { h } from 'hyperapp'

export default (bool, props, action) => {
  if (bool) {
    return (
      <div id='popUp' className='popUp'>
        <div id='popUp__form--members' className='popUp__form--members'>
          <div id='popUp__text'>
            <h2>Edit Member</h2>
            <div className='container__vertical margin--3'>
              <label>Name</label>
              <input type='text' placeholder={props.name} oninput={e => action.teamName(e.target.value)}/>
            </div>
            <div className='container__horizontal'>
              <div className='container__vertical margin--3'>
                <label>Job</label>
                <input type='text' placeholder={props.job} oninput={e => action.teamJob(e.target.value)}/>
              </div>
              <div className='container__vertical margin--3'>
                <label>Filière</label>
                <input type='text' placeholder={props.subject} oninput={e => action.teamFiliere(e.target.value)}/>
              </div>
            </div>
            <div className='container__vertical margin--3'>
              <label>Photo de profil</label>
              <input type='text' placeholder={props.img} oninput={e => action.teamImg(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Age</label>
              <input type='text' placeholder={props.age} oninput={e => action.teamAge(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Description</label>
              <textarea rows='7' oninput={e => action.teamDescription(e.target.value)}>
                {props.description}
              </textarea>
            </div>
            <div className='container__vertical margin--3'>
              <label>Nombre de publication</label>
              <input type='text' placeholder={props.publicationNb} oninput={e => action.teamNbPublication(e.target.value)}/>
            </div>
            <div className='container__horizontal margin--3 space-between'>
              <div className='popUp__label container__vertical'>
                <label>Technique de dessin</label>
                <select id='teamCategorie' onchange={ () => action.teamTechnique()}>
                  <option disabled selected value>-- Categorie --</option>
                  <option selected=''> Traditionnelle </option>
                  <option selected=''> Tablette </option>
                  <option selected=''> Les deux  </option>
                </select>
              </div>
            </div>
            <div className='popUp__container container__horizontal'>
              <button className='popUp__Add' onclick={() => action.editTeam(props.id)}>Add Member</button>
              <button onclick={() => action.teamEditPopUp(props.id)}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
