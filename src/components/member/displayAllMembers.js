import { h } from 'hyperapp'
import membersPopUp from './membersPopUp'
import teamPopUp from './teamPopUp'

import memberList from './memberlist'
import teamList from './teamlist'

export default (state, action) => {
  return (
    <div>
      <div class='all_members'>
        <div class='team category'>
          <h2> La team <button class="add_member" onclick={() => action.addTeamPopUp()}> + </button> </h2>
          {teamList(state.team, action)}
        </div>
        <div class='members category'>
          <h2>Les super membres <button class="add_member" onclick={ () => action.addMemberPopUp()}> + </button> </h2>
          {memberList(state.members, action)}
        </div>
      </div>
      {membersPopUp(state.userAction.members.displayPopUp, action)}
      {teamPopUp(state.userAction.team.displayPopUp, action)}
    </div>
  )
}
