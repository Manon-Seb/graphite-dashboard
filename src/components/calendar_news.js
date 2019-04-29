import { h } from 'hyperapp'

export default () => {
  return (
    <div class="right">
      <div class="calendar category">
        <h2>Calendrier</h2>
        <img src="../../img/calendar_test.jpg" width="800" height="522.4" alt="calendrier test"/>
      </div>

      <div class="news category">
        <h2>Les dernières nouvelles</h2>
        <div>
          <h3>News #1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas mi at mi rhoncus ornare at et ex. Nullam quis pellentesque ante. Sed mattis enim id sapien laoreet euismod. Vestibulum at pulvinar diam. Integer eget nisl ac metus facilisis convallis. Praesent vestibulum scelerisque ipsum ut hendrerit.</p>
        </div>
        <div>
          <h3>News #2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas mi at mi rhoncus ornare at et ex. Nullam quis pellentesque ante. Sed mattis enim id sapien laoreet euismod. Vestibulum at pulvinar diam. Integer eget nisl ac metus facilisis convallis. Praesent vestibulum scelerisque ipsum ut hendrerit.</p>
        </div>
        <div>
          <h3>News #3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas mi at mi rhoncus ornare at et ex. Nullam quis pellentesque ante. Sed mattis enim id sapien laoreet euismod. Vestibulum at pulvinar diam. Integer eget nisl ac metus facilisis convallis. Praesent vestibulum scelerisque ipsum ut hendrerit.</p>
        </div>
        <input type="button" value="Voir toutes les news"/>
      </div>
    </div>
  )
}
