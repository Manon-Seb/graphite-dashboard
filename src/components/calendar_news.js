import { h } from 'hyperapp'
import newsList from './news/newslist'

export default (state) => {
  return (
    <div class="right">
      <div class="calendar category">
        <h2>Calendrier</h2>
        <div id="calendar" class="auto-jsCalendar"></div>
      </div>
      <div class="news category">
        <h2>Les dernières nouvelles</h2>
        {newsList(state.news)}
        <button type="button">Voir toutes les news</button>
      </div>
    </div>
  )
}
