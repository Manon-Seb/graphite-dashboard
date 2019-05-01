import { h } from 'hyperapp'

export default () => {
  return (
    <header class="computer">
      <a href="#"><img src="../../img/Logo_orange.jpg" width="851" height="315" alt="logo Graphite"/></a>
      <nav>
        <ul>
          <li><img src="../../img/icons/dashboard_white.png" width="64" height="64" alt="dashboard icon"/> <span>Dashboard</span></li>
          <li><img src="../../img/icons/member_white.png" width="64" height="64" alt="member icon"/><span>Les membres</span></li>
          <li><img src="../../img/icons/news_white.png" width="64" height="64" alt="news icon"/><span>Les news</span></li>
          <li><img src="../../img/icons/publication_white.png" width="64" height="64" alt="publication icon"/><span>Dernières publications</span></li>
        </ul>
      </nav>
    </header>
  )
}
