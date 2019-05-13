import { h } from 'hyperapp'

import newsCard_newsPage from './newsCard_newsPage'
import addPopUp from './newsPopUp'

const displayList = (arr, action) => arr.map(i => newsCard_newsPage(i, action))
const displayByCategory = (arr, equipe, evenement, atelier, autre, action) => {
  if (equipe === true || evenement === true || atelier === true || autre === true) {
    const list = []
      .concat((equipe) ? arr.filter(i => i.category === 'équipe') : [])
      .concat((evenement) ? arr.filter(i => i.category === 'événement') : [])
      .concat((atelier) ? arr.filter(i => i.category === 'atelier') : [])
      .concat((autre) ? arr.filter(i => i.category === 'autre') : [])
    return (displayList(list, action))
  } else if (equipe === false && evenement === false && atelier === false && autre === false) {
    return (displayList(arr, action))
  }
}

export default (state, actions) => {
  return (
    <div class="all_news">
      <div class="news_categories">
        <h2>Trier par catégorie</h2>
        <button class={state.userAction.news.equipe ? 'category__button equipe isActive' : 'category__button equipe'} onclick={() => actions.newsCategoryIsClick(1)}>Equipe</button>
        <button class={state.userAction.news.evenement ? 'category__button evenement isActive' : 'category__button evenement'} onclick={() => actions.newsCategoryIsClick(2)}>Evénements</button>
        <button class={state.userAction.news.atelier ? 'category__button atelier isActive' : 'category__button atelier'} onclick={() => actions.newsCategoryIsClick(3)}>Atelier</button>
        <button class={state.userAction.news.autre ? 'category__button autre isActive' : 'category__button autre'} onclick={() => actions.newsCategoryIsClick(4)}>Autre</button>
      </div>
      <div>
        <div class='news_infos'>
          <button onclick={() => actions.addNewsPopUp()}> Ajouter une news </button>
        </div>
        {displayByCategory(state.news, state.userAction.news.equipe, state.userAction.news.evenement, state.userAction.news.atelier, state.userAction.news.autre, actions)}
      </div>
      {addPopUp(state.userAction.news.displayPopUp, actions)}
    </div>
  )
}
