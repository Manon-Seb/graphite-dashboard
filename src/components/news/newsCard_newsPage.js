import { h } from 'hyperapp'
import popUp from './newsModifyPopUp'

const displayDeleteButton = (bool, props, action) => {
  if (bool) {
    return (
      <div>
        <button onclick={() => action.newsDelete(props.id)}>
          Delete News
        </button>
        <button onclick={() => action.newsOpenEdit(props.id)}>
          Edit News
        </button>
      </div>
    )
  }
}
export default (props, action) => {
  return (
    <div class="news_infos" onmouseenter={() => action.newsHoverIn(props.id)} onmouseleave={() => action.newsHoverOut(props.id)}>
      <div class="news_img" style={{backgroundImage: 'url(' + props.img + ')'}}></div>
      <p class="news_date">Posté le {props.date}</p>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.fullDescription}</p>
      <p><span>Catégorie</span> : {props.category}</p>
      {displayDeleteButton(props.displayPopUp, props, action)}
      {popUp(props, action, props.displayEditPopUp)}
    </div>
  )
}
