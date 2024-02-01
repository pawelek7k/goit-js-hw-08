import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const currentTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);
player.on('timeupdate', currentTime);

const getTime = localStorage.getItem('videoplayer-current-time');
if (getTime) {
  player.setCurrentTime(parseFloat(getTime));
}
