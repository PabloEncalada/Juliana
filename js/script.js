let track_index = 0;
let isPlaying = false;
let curr_track = document.createElement('audio');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const heroButton = document.querySelector('.hero-button');

const music_list = [
    {
        name : 'The Day That I Met You',
        artist : 'Matilda Mann',
        music : 'assets/music/audio.mp3'
    },
    {
        name : 'Mia & Sebastian’s Theme',
        artist : 'Justin Hurwitz',
        music : 'assets/music/audio2.mp3'
    },
    {
        name : 'La Niebla',
        artist : 'WOS',
        music : 'assets/music/audio3.mp3'
    }


];



function loadTrack(track_index){
    songTitle.textContent = music_list[track_index].name;
    artistName.textContent = music_list[track_index].artist;
    curr_track.src = music_list[track_index].music;
    curr_track.load();
    isPlaying = true;
}

function togglePlayPause() {
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const audioPlayer = document.getElementById("audioPlayer"); // Get the audio player element

  if (isPlaying) {
    // Pause the audio
    curr_track.pause();

    // Show play icon and hide pause icon
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    console.log("Music Paused");
  } else {
    // Play the audio
    curr_track.play();

    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    console.log("Music Playing");
  }

  isPlaying = !isPlaying;
}

// Play the next song
function playNext() {
    track_index = (track_index === music_list.length - 1) ? 0 : track_index + 1;
    loadTrack(track_index);
    curr_track.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
}

function playPrevious() {
    track_index = (track_index === music_list.length - 1) ? 0 : track_index - 1;
    loadTrack(track_index);
    curr_track.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
}

function mostrarBox() {
    const textElement = document.getElementById('textoH1');
    textElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)';
    loadTrack(track_index);
    curr_track.play();
    heroButton.style.display = "none";
    heroButton.style.background = "none";
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    box2.style.display = "none";
    box3.style.display = "none";
    if (box3.style.display === "none" && box2.style.display === "none") {
        
        box2.style.display = "block";
        setTimeout(function() {
            box2.classList.add("visible");
        }, 10); 

        box3.style.display = "block";
        setTimeout(function() {
            box3.classList.add("visible");
        }, 10); 
    } else {
        box2.classList.remove("visible");
        setTimeout(function() {
            box2.style.display = "none";
        }, 1000);
        box3.classList.remove("visible");
        setTimeout(function() {
            box3.style.display = "none";
        }, 1000);
    }
    
    setTimeout(() => {
        showNextPhrase();;
    }, 5000);
    heroButton.style.background = "#444444";
    
}

    const phrases = document.querySelectorAll('.fade-in');
    const totalPhrases = phrases.length;
    let currentIndex = 0;
    const delay = 3000; // Tiempo de aparición y desaparición de cada frase (en milisegundos)


    function showNextPhrase() {
        // Check if we should stop the phrase transitions
        if (currentIndex === 4) {
            phrases[currentIndex].classList.add('show');
            phrases[currentIndex].style.opacity = 1;
            return; // Stop further execution
        }
    
        // Hide all phrases
        phrases.forEach((phrase) => {
            phrase.classList.remove('show');
            setTimeout(() => {
                phrase.style.opacity = 0;
            }, delay);
        });
    
        // Show the current phrase
        phrases[currentIndex].classList.add('show');
        phrases[currentIndex].style.opacity = 1;
    
        // Hide the current phrase and move to the next
        setTimeout(() => {
            phrases[currentIndex].classList.remove('show');
            phrases[currentIndex].style.opacity = 0;
    
            currentIndex = (currentIndex + 1) % totalPhrases;
            setTimeout(showNextPhrase, delay); // Continue to the next phrase after the specified delay
        }, delay);
    }
    
