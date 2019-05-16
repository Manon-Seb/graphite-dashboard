import { h } from 'hyperapp'
import teamCard from './teamCard'

export default (props, action) => {
  return (
    props.map(i => teamCard(i, action))
  )
}
