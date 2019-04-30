import { h } from 'hyperapp'

export default (props) => {
  return (
    <div>
      <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic" />
      <h3>{props.name}<br/>
        {props.job}</h3>
      <p>{props.description}</p>
      <button type="button">Voir le profil</button>
    </div>
  )
}
