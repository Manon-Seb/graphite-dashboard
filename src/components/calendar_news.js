import { h } from 'hyperapp'
import newsList from './news/newslist'

export default (state, actions) => {
  return (
    <div class="right">
      <div class="calendar category">
        <h2>Calendrier</h2>
        <img src="../../img/calendar_test.jpg" width="800" height="522.4" alt="calendrier test"/>
      </div>
      <div class="news category">
        <h2>Les dernières nouvelles</h2>
        {newsList(state.news)}
        <input type="button" value="Voir toutes les news"/>
      </div>
    </div>
  )
}
