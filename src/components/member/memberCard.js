import { h } from 'hyperapp'

const displayFullProfile = (bool, props) => {
  if (bool === true) {
    return (
      <div class="hidden_profile_infos">
        <p><span>Age</span> : {props.age} ans <br />
          <span>Technique de dessin</span> : {props.drawingTechnique} <br />
          <span>Nombre de publications</span> : {props.publicationNb}</p>
      </div>
    )
  }
}

export default (props, action) => {
  return (
    <div>
      <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic" />
      <h3>{props.name}<br/>
        {props.job}</h3>
      <p class="formation"><span>Formation</span> : {props.subject}</p>
      <p>{props.description}</p>
      <button onclick={() => action.displayFullProfile(props)}>Voir le profil</button>
      {displayFullProfile(props)}
    </div>
  )
}
