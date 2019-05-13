import { h } from 'hyperapp'

export default (props, action, bool) => {
  if (bool) {
    return (
      <div className='popUp modify_news'>
        <div className='popUp__form'>
          <div className='margin--5'>
            <h2>Editer la news</h2>
            <div className='container__vertical margin--3'>
              <label>Titre</label>
              <input type='text' placeholder={props.name} oninput={e => action.newsName(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Image</label>
              <input type='text' placeholder='www.monimage.com' oninput={e => action.newsImage(e.target.value)}/>
            </div>
            <div className='container__vertical margin--3'>
              <label>Description</label>
              <textarea rows='7' placeholder={props.description} oninput={e => action.newsDescription(e.target.value)}>
                {props.description}
              </textarea>
            </div>
            <div className='container__horizontal margin--3 space-between'>
              <div className='popUp__label container__vertical'>
                <label>Catégorie</label>
                <select id='NewsEditcategorie' onchange={ () => action.newsCategory()}>
                  <option disabled selected value>-- Categorie --</option>
                  <option selected=''> atelier </option>
                  <option selected='selected'> autre </option>
                  <option selected=''> évènement  </option>
                  <option selected=''> équipe   </option>
                </select>
              </div>
            </div>
            <div className='popUp__container container__horizontal'>
              <button className='popUp__Add' onclick={() => action.changeNews(props.id)}>Modifier</button>
              <button className='popUp__Cancel' onclick={() => action.newsCloseEdit(props.id)}>Annuler</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
