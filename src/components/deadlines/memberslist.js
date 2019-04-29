import { h } from 'hyperapp'
import memberCard from './memberCard'

export default (state, action) => {
  return (
    <div>
      <div>
        {state.team.map(i => memberCard(i))}
      </div>
    </div>
  )
}
