import { h } from 'hyperapp'
import popUp from './modifyteamPopUp'

const displayFullProfile = (bool, props, action) => {
  if (bool === true) {
    return (
      <div class='hidden_profile_infos'>
        <p>
          <span>Age</span> : {props.age} ans <br />
          <span>Technique de dessin</span> : {props.drawingTechnique} <br />
          <span>Nombre de publications</span> : {props.publicationNb}
        </p>
        <div className='container__horizontal'>
          <img src='../asset/img/waste-bin.png' alt='delete Members' onclick={() => action.deleteTeam(props.id)}/>
          <img src='../asset/img/pencil.png' alt='modify Members' onclick={() => action.teamEditPopUp(props.id)}/>
        </div>
        <button onclick={() => action.teamDisplayFullProfile(props.id) }>Fermer le profil</button>
      </div>
    )
  }
  return (
    <button onclick={() => action.teamDisplayFullProfile(props.id) }>Voir le profil</button>
  )
}

export default (props, action) => {
  return (
    <div>
      <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic" />
      <h3>{props.name}<br/>
        {props.job}</h3>
      <p>{props.description}</p>
      {displayFullProfile(props.displayFullProfile, props, action)}
      {popUp(props.displayPopUp, props, action)}
    </div>
  )
}
