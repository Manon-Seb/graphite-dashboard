import { h } from 'hyperapp'
import memberCard from './memberCard'

export default (props, action) => {
  return (
    props.map(i => memberCard(i, action))
  )
}
