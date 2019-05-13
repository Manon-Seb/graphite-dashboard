import { h } from 'hyperapp'

export default () => {
  return (
    <header class="mobile">
      <nav class="mobile-menu">
        <ul class="menu">
          <li><span>Menu</span>
            <ul class="sous-menu">
              <li>Dashboard</li>
              <li>Les membres</li>
              <li>Les news</li>
            </ul>
          </li>
        </ul>
      </nav>

      <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic"/>
      <a href="./dashboard.js"></a>
    </header>
  )
}
