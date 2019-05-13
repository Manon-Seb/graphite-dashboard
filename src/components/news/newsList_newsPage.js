import { h } from 'hyperapp'
import newsCards from './newsCard_newsPage'

export default (props) => {
  return (
    props.map(i => newsCards(i))
  )
}
