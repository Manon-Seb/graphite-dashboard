import { h } from 'hyperapp'
import header from '../header'
import header_mobile from '../header_mobile'
import user_bar from '../user_bar'
import left_content from '../about_members'
import right_content from '../calendar_news'

const display = (state, actions) => {
  if (state !== undefined) {
    return (
      <main>
        <body>
          {header(state.user, actions)}
          {header_mobile(state.user, actions)}
          <div class="content">
            {user_bar(state.user, actions)}
            <h1>Dashboard</h1>
            {left_content(state, actions)}
            {right_content(state, actions)}
          </div>
        </body>
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
