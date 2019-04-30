import { h } from 'hyperapp'

export default (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}
