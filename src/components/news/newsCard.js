import { h } from 'hyperapp'

export default (props) => {
  return (
    <div>
      <h3>News #{props.id}</h3>
      <p>{props.description}</p>
    </div>
  )
}
