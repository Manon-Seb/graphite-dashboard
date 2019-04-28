import { h } from 'hyperapp'

import header from './header'
import header_mobile from './header_mobile'
import user_bar from './user_bar'
import left_content from './about_members'
import right_content from './calendar_news'

export default (state, actions) => {
  return (
    <body>
      {header(state.user, actions)}
      {header_mobile(state.user, actions)}

      <div class="content">
        {user_bar(state.user, actions)}
        <h1>Dashboard</h1>
        {left_content(state.user, actions)}
        {right_content(state.user, actions)}
      </div>
    </body>
  )
}
