import { h } from 'hyperapp'

import memberList from './memberlist'

export default (state) => {
  return (
    <div class="all_members">
      <div class="team category">
        <h2>La team</h2>
        {memberList(state.team)}
      </div>
      <div class="members category">
        <h2>Les super membres</h2>
        {memberList(state.members)}
      </div>
    </div>
  )
}
