import { h } from 'hyperapp'

export default (props) => {
  return (
    <div>
      <p class="news_date">Posté le {props.date}</p>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}
