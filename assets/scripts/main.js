// main.js
// Get inputs
var ahInput = document.getElementById('radio-air-horn');
var chInput = document.getElementById('radio-car-horn');
var phInput = document.getElementById('radio-party-horn');
var volNumber = document.getElementById('volume-number');
var volSlider = document.getElementById('volume-slider');
var audio = document.getElementById('horn-sound');
var volumeImg = document.getElementById('volume-image');
var soundImg = document.getElementById('sound-image');

// Play sound when button clicked
var button = document.getElementById('honk-btn');
button.addEventListener('click', function(e){
    playAudio(e);
});

function playAudio(e) {
    e.preventDefault();
    audio.play();
};

// Change audio source
ahInput.addEventListener('click', function() {
    audio.src = './assets/media/audio/air-horn.mp3';
    soundImg.src = './assets/media/images/air-horn.svg'; 
    ahInput.checked = true;
});

chInput.addEventListener('click', function(e) {
    audio.src = './assets/media/audio/car-horn.mp3';
    soundImg.src = './assets/media/images/car.svg'; 
    chInput.checked = true;
});

phInput.addEventListener('click', function(e) {
    audio.src = './assets/media/audio/party-horn.mp3';
    soundImg.src = './assets/media/images/party-horn.svg'; 
    phInput.checked = true;
});

// Update volume and volume image with slider number and volumber number
volNumber.oninput = function() {
    audio.volume = volNumber.value / 100;
    volSlider.value = volNumber.value;

    if (this.value >= 67) {
        volumeImg.src = './assets/media/icons/volume-level-3.svg'
        button.disabled = false;
    } else if (this.value >= 34 && this.value <= 66) {
        volumeImg.src = './assets/media/icons/volume-level-2.svg'
        button.disabled = false;
    } else if (this.value >= 1 && this.value <= 33) {
        volumeImg.src = './assets/media/icons/volume-level-1.svg'
        button.disabled = false;
    } else if (this.value == 0) {
        volumeImg.src = './assets/media/icons/volume-level-0.svg'
        button.disabled = true;
    }
}

volSlider.oninput = function() {
    audio.volume = volSlider.value / 100;
    volNumber.value = volSlider.value;

    if (this.value >= 67) {
        volumeImg.src = './assets/media/icons/volume-level-3.svg'
        button.disabled = false;
    } else if (this.value >= 34 && this.value <= 66) {
        volumeImg.src = './assets/media/icons/volume-level-2.svg'
        button.disabled = false;
    } else if (this.value >= 1 && this.value <= 33) {
        volumeImg.src = './assets/media/icons/volume-level-1.svg'
        button.disabled = false;
    } else if (this.value == 0) {
        volumeImg.src = './assets/media/icons/volume-level-0.svg'
        button.disabled = true;
    }
}