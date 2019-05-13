import { h } from 'hyperapp'
import popUp from './newsModifyPopUp'

const displayDeleteButton = (bool, props, action) => {
  if (bool) {
    return (
      <div class="buttons_news">
        <button onclick={() => action.newsDelete(props.id)}>
          <img src="../../../asset/img/waste-bin.png" width="512" height="512" alt="icône éditer"/>
        </button>
        <button onclick={() => action.newsOpenEdit(props.id)}>
          <img src="../../../asset/img/pencil.png" width="512" height="512" alt="icône éditer"/>
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
