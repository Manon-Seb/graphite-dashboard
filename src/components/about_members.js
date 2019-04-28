import { h } from 'hyperapp'

export default () => {
  return (
    <div class="left">
      <div class="team category">
        <h2>L'équipe 2019-2020</h2>
        <div class="profiles">
          <div>
            <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic" />
            <h3>Léo DRAGUY<br/>
            Président</h3>
            <p>Président de Graphite depuis 2017. Adore manger et dormir.</p>
            <input type="button" value="Voir le profil"/>
          </div>

          <div>
            <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic"/>
            <h3>Anthony MAI<br/>
            Vice-président</h3>
            <p>Président de Graphite depuis 2017. Adore manger et dormir.</p>
            <input type="button" value="Voir le profil"/>
          </div>

          <div>
            <img src="../../img/profile_pic_1.jpg" width="500" height="500" alt="profile pic"/>
            <h3>Hana TENDA<br/>
            Trésorière</h3>
            <p>Président de Graphite depuis 2017. Adore manger et dormir.</p>
            <input type="button" value="Voir le profil"/>
          </div>
        </div>
      </div>

      <div class="stats_members category">
        <h2>Nos membres dans l'ensemble</h2>
        <img src="../../img/Graph_example.png" witdh="1054" height="423" alt="graph example"/>
      </div>

      <div class="deadlines category">
        <h2>Deadlines</h2>
      </div>
    </div>
  )
}
