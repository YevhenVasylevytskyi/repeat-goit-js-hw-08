import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  const strigifyData = JSON.stringify(data.seconds);
  localStorage.setItem(TIME_KEY, strigifyData);
};

player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }

  const paused = JSON.parse(localStorage.getItem(TIME_KEY));

  player
    .setCurrentTime(paused)
    .then(function (seconds) {})
    .catch(function (error) {
      console.log(error.name)        
    });

}
resumePlayback();