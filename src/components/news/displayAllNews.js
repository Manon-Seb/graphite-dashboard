import { h } from 'hyperapp'

import newsList from './newsList_newsPage'

export default (state) => {
  return (
    <div class="all_news">
      <div class="news_categories">
        <h2>Trier par catégorie</h2>
        <button>Tout</button>
        <button>Equipe</button>
        <button>Evénements</button>
        <button>Atelier</button>
        <button>Autre</button>
      </div>
      <div>
        {newsList(state.news)}
      </div>
    </div>
  )
}
