import { h } from 'hyperapp'
import popUp from './modifyPopUp'

const displayFullProfile = (bool, props, action) => {
  if (bool === true) {
    return (
      <div class='hidden_profile_infos'>
        <p>
          <span>Age</span> : {props.age} ans <br />
          <span>Technique de dessin</span> : {props.drawingTechnique} <br />
          <span>Nombre de publications</span> : {props.publicationNb}
        </p>
        <div class='container__horizontal'>
          <button onclick={() => action.deleteMembers(props.id)}><img src='../asset/img/waste-bin.png' alt='delete Members' /></button>
          <button onclick={() => action.membersEditPopUp(props.id)}><img src='../asset/img/pencil.png' alt='modify Members' /></button>
        </div>
        <button onclick={() => action.memberDisplayFullProfile(props.id) }>Fermer le profil</button>
      </div>
    )
  }
  return (
    <button onclick={() => action.memberDisplayFullProfile(props.id) }>Voir le profil</button>
  )
}

export default (props, action) => {
  return (
    <div>
      <img src='../../img/profile_pic_1.jpg' width='500' height='500' alt='profile pic' class='profile_pic'/>
      <h3>{props.name}<br/>
        {props.job}</h3>
      <p>{props.description}</p>
      {displayFullProfile(props.displayFullProfile, props, action)}
      {popUp(props.displayPopUp, props, action)}
    </div>
  )
}
