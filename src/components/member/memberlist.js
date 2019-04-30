import { h } from 'hyperapp'
import memberCard from './memberCard'

export default (props) => {
  return (
    props.map(i => memberCard(i))
  )
}
