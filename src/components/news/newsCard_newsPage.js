import { h } from 'hyperapp'

const displayFullNews = (props) => {
  return (
    <div class="hidden_news_infos">
      <p>{props.fullDescription}</p>
      <p>Catégorie : {props.category}</p>
    </div>
  )
}

export default (props) => {
  return (
    <div class="news_infos">
      <div class="news_img" style={{backgroundImage: 'url(' + props.img + ')'}}></div>
      <p class="news_date">Posté le {props.date}</p>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      {displayFullNews(props)}
    </div>
  )
}
