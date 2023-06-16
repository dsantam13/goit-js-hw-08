import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    localStorage.getItem("videoplayer-current-time")
}, 1000));

const videoPlayer = document.getElementById('vimeo-player');

window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        videoPlayer.currentTime = savedTime;
        player.setCurrentTime(savedTime).then(function () {
                // seconds = the actual time that the player seeked to
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;
                
                default:
                    // some other error occurred
                    break;
            };
        });
    };
});
