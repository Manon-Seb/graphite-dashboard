import { h } from 'hyperapp'

export default (bool, action) => {
  if (bool) {
    return (
      <div className='popUp add_news'>
        <div className='popUp__form'>
          <div className='margin--5'>
            <h2>Ajouter une news</h2>
            <div className='container__vertical margin--3'>
              <label>Titre</label>
              <input type='text' placeholder='e.g. Envoyer invitation réunion' oninput={e => action.newsName(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Image</label>
              <input type='text' placeholder='www.monimage.com' oninput={e => action.newsImage(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Description</label>
              <textarea rows='7' oninput={e => action.newsDescription(e.target.value)}>
                Entrez les détails ici...
              </textarea>
            </div>
            <div className='container__horizontal margin--3 space-between'>
              <div className='popUp__label container__vertical'>
                <label>Catégorie</label>
                <select id='Newscategorie' onchange={ () => action.newsCategory()}>
                  <option disabled selected value>-- Categorie --</option>
                  <option selected=''> atelier </option>
                  <option selected='selected'> autre </option>
                  <option selected=''> évènement  </option>
                  <option selected=''> équipe   </option>
                </select>
              </div>
            </div>
            <div className='popUp__container container__horizontal'>
              <button className='popUp__Add' onclick={() => action.addNews()}>Ajouter</button>
              <button className='popUp__Cancel' onclick={() => action.addNewsPopUp()}>Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
