import { h } from 'hyperapp'
import newsCard from './newsCard'

export default (props) => {
  return (
    props.map(i => newsCard(i))
  )
}
