import { h } from 'hyperapp'
import newsCard from './newsCard'

export default (props) => {
  return (
    props.slice(0, 3).map(i => newsCard(i))
  )
}
