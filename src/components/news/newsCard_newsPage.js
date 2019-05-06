import { h } from 'hyperapp'

export default (props) => {
  return (
    <div class="news_infos">
      <div class="news_img" style={{backgroundImage: 'url(' + props.img + ')'}}></div>
      <p class="news_date">Posté le {props.date}</p>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.fullDescription}</p>
      <p><span>Catégorie</span> : {props.category}</p>
    </div>
  )
}
