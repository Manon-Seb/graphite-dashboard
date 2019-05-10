import { h } from 'hyperapp'
import header from '../header'
import header_mobile from '../header_mobile'
import user_bar from '../user_bar'
import allMembers from '../member/displayAllMembers'

const display = (state, actions) => {
  if (state !== undefined) {
    return (
      <main>
        {header(state.user, actions)}
        {header_mobile(state.user, actions)}
        {user_bar(state.user, actions)}
        <div class="content members_page">
          <h1>Les membres de Graphite</h1>
          {allMembers(state, actions)}
        </div>
      </main>
    )
  }
  return <p> Error !</p>
}

export default (state, actions) => {
  if (state.update[0] === false) {
    console.log('Updated')
    actions.updateState()
  }
  return (
    display(state, actions)
  )
}