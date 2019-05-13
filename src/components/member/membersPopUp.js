import { h } from 'hyperapp'

export default (bool, action) => {
  if (bool) {
    return (
      <div className='popUp'>
        <div className='popUp__form--members'>
          <div className='margin--5'>
            <h2>Add Member</h2>
            <div className='container__vertical margin--3'>
              <label>Name</label>
              <input type='text' placeholder='Elisa Bué' oninput={e => action.teamName(e.target.value)}/>
            </div>
            <div className='container__horizontal'>
              <div className='container__vertical margin--3'>
                <label>Job</label>
                <input type='text' placeholder='Trésorière' oninput={e => action.teamJob(e.target.value)}/>
              </div>
              <div className='container__vertical margin--3'>
                <label>Filière</label>
                <input type='text' placeholder='GM' oninput={e => action.teamFiliere(e.target.value)}/>
              </div>
            </div>
            <div className='container__vertical margin--3'>
              <label>Photo de profil</label>
              <input type='text' placeholder='www.monimage.com' oninput={e => action.teamImg(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Age</label>
              <input type='text' placeholder='21' oninput={e => action.teamAge(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Description</label>
              <textarea rows='7' oninput={e => action.teamDescription(e.target.value)}>
                Enter detail here ...
              </textarea>
            </div>
            <div className='container__vertical margin--3'>
              <label>Nombre de publication</label>
              <input type='text' placeholder='5' oninput={e => action.teamNbPublication(e.target.value)}/>
            </div>
            <div className='container__horizontal margin--3 space-between'>
              <div className='popUp__label container__vertical'>
                <label>Technique de dessin</label>
                <select id='teamCategorie' onchange={ () => action.teamTechnique()}>
                  <option disabled selected value>-- Categorie --</option>
                  <option selected=''> Traditionnelle </option>
                  <option selected='selected'> Tablette </option>
                  <option selected=''> Les deux  </option>
                </select>
              </div>
            </div>
            <div className='popUp__container container__horizontal'>
              <button className='popUp__Add' onclick={() => action.addMember()}>Add Member</button>
              <button className='popUp__Cancel' onclick={() => action.addMemberPopUp()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
