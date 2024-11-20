let track_index = 0;
let isPlaying = false;
let curr_track = document.createElement('audio');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const heroButton = document.querySelector('.hero-button');
const heroButtonSwipe = document.querySelector('.hero-button-swipe');
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const musicBox = document.querySelector('.musicBox')
const flowers = document.querySelectorAll('.flower');

window.onload = function() {
    window.scrollTo(0, 0);
    var banner = document.getElementById('banner');
    setTimeout(function() {
        banner.classList.add('hidden');
    }, 5000);

};


function tap(){
    document.body.style.touchAction = "none"; 
    heroButtonSwipe.style.display = "none"
    heroButtonSwipe.className = "swipeMessage";
    heroButtonSwipe.textContent = "";
    setTimeout(function() {
        
        document.body.style.touchAction = "pan-y";
        heroButtonSwipe.textContent = "Swipe up";
        heroButtonSwipe.style.display = "block"
        document.body.style.overflow = 'auto'
        setupSwipeDetection();
    }, 1000);
    
   
}

function setupSwipeDetection() {
    let startY = 0;
    const swipeThreshold = 100;
    let swipePerformed = false; 


    document.addEventListener('touchstart', (event) => {
        if (swipePerformed) return;
        startY = event.touches[0].clientY;
    });


    document.addEventListener('touchend', (event) => {
        if (swipePerformed) return;

        const endY = event.changedTouches[0].clientY;
        const distanceY = startY - endY;
        // const allowed = [2,3]
        // if (distanceY > swipeThreshold) {
        //     flowers.forEach((flower, index) => {
        //         if(index in allowed){ flower.style.display = 'block';}
                
        //     });
            
        //     start();
        //     swipePerformed = true;
        // }
    });
}

const music_list = [
    {
        name : 'te quiero tanto',
        artist : 'Kevin Kaarl',
        music : 'assets/music/audio.mp3'
    },
    {
        name : 'The Day That I Met You',
        artist : 'Matilda Mann',
        music : 'assets/music/audio1.mp3'
    },
    {
        name : 'Mia & Sebastian’s Theme',
        artist : 'Justin Hurwitz',
        music : 'assets/music/audio2.mp3'
    },
    {
        name : 'TU MANTA',
        artist : 'Milo J',
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
  const audioPlayer = document.getElementById("audioPlayer");

  if (isPlaying) {

    curr_track.pause();

    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    console.log("Music Paused");
  } else {
    curr_track.play();

    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    console.log("Music Playing");
  }

  isPlaying = !isPlaying;
}

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
    //document.body.style.touchAction = "none";
    const textElement = document.getElementById('textoH1');
    textElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)';
    loadTrack(track_index);
    curr_track.volume = 0;


    curr_track.play().then(() => {
        console.log("Audio is playing");
        fadeInAudio(curr_track, 12000,0.0001); 
    }).catch(error => {
        console.log("Error playing audio:", error);
    });
    fadeInAudio(curr_track, 8000);
    heroButton.style.display = "none";
    heroButton.style.background = "none";
    heroButtonSwipe.style.display = "none";
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
        showNextPhrase();
    }, 5000);
    heroButton.style.background = "#444444";
    
}

    const phrases = document.querySelectorAll('.fade-in');
    const totalPhrases = phrases.length;
    let currentIndex = 0;
    const delay = 5000;


    function showNextPhrase() {
        if (currentIndex === 21) {
            phrases[currentIndex].classList.add('show');
            phrases[currentIndex].style.opacity = 1;
            return;
        }
    
        phrases.forEach((phrase) => {
            phrase.classList.remove('show');
            setTimeout(() => {
                phrase.style.opacity = 0;
            }, 4700);
        });

        phrases[currentIndex].classList.add('show');
        phrases[currentIndex].style.opacity = 1;
    

        setTimeout(() => {
            phrases[currentIndex].classList.remove('show');
            phrases[currentIndex].style.opacity = 0;
    
            currentIndex = (currentIndex + 1) % totalPhrases;
            setTimeout(showNextPhrase, 2000);
        }, 4700);
    }
const blackScreen = document.getElementById('blackScreen');
const box1 = document.getElementById('box1');
const audio = document.getElementById('backgroundAudio');
// function start(){
//     heroButton.style.display = "none";
//     heroButton.style.background = "none";
//     heroButtonSwipe.style.display = "none";
//     // Load the track you want to play
//     curr_track.src = "assets/music/clip.mp3";
//     curr_track.load();
//     isPlaying = true;
//     curr_track.play().then(() => {
//         console.log("Audio is playing");
//     }).catch(error => {
//         console.log("Error playing audio:", error);
//     });
//     // Play the audio after a delay (optional)
//     setTimeout(() => {
        

//         // document.querySelectorAll('.wrapper').forEach((wrapper) => {
//         //     wrapper.classList.add('animation-started');
//         // });

//         // const petals = document.querySelectorAll('.petal');
//         // petals.forEach((petal) => {
//         //     petal.style.animationPlayState = 'running';
//         // });

//         // const miolos = document.querySelectorAll('.miolo');
//         // miolos.forEach((miolo) => {
//         //     miolo.style.animationPlayState = 'running';
//         // });

//         // const wrappers = document.querySelectorAll('.wrapper');
//         // wrappers.forEach((wrapper) => {
//         //     wrapper.style.animationPlayState = 'running';
//         // });

//         // Select all the wrappers (flowers)
//     const wrappers = document.querySelectorAll('.wrapper');
    
//     // Loop through each flower and add animation with staggered delays
//     wrappers.forEach((wrapper, index) => {
//         const petals = wrapper.querySelectorAll('.petal');
//         const miolos = wrapper.querySelectorAll('.miolo');
        
//         // Apply staggered delay for each flower based on its index
//         setTimeout(() => {
//             // Start the wrapper animation
//             wrapper.classList.add('animation-started');
            
//             // Start petals animation
//             petals.forEach((petal) => {
//                 petal.style.animationPlayState = 'running';
//             });

//             // Start miolo animation
//             miolos.forEach((miolo) => {
//                 miolo.style.animationPlayState = 'running';
//             });
//         }, index * 1000); // Adjust the delay (1000ms = 1 second) between each flower
//     });


       

//         setTimeout(() => {
//             blackScreen.classList.add('fade-out');
//             box1.style.zIndex = "9999";
//             box2.style.zIndex = "9998";
//             box3.style.zIndex = "9998";
//             //mostrarBox();
//             blackScreen.style.display = 'none';
//             document.querySelector('.box1').classList.add('animation-started');
//             mostrarBox();
//         }, 30000);

//     }, 2000);
    
    
// }

function start() {
    heroButton.style.display = "none";
    heroButton.style.background = "none";
    heroButtonSwipe.style.display = "none";
    curr_track.src = "assets/music/clip1.mp3";
    curr_track.load();
    isPlaying = true;

    curr_track.volume = 0;

    curr_track.play().then(() => {
        console.log("Audio is playing");
        fadeInAudio(curr_track, 8000,0.05);  
    }).catch(error => {
        console.log("Error playing audio:", error);
    });

    setTimeout(() => {
        //const wrappers = document.querySelectorAll('.wrapper');
        const wrappers = document.querySelectorAll('.wrapper, .wrapper.mid-size, .wrapper.double-size');
        const stems = document.querySelectorAll('.flower__line');

        

        flowers.forEach((flower, index) => {
            stems.forEach((stem, index) => {
                setTimeout(() => {
                    stem.style.animationPlayState = 'running';
                }, index * 2000);
                
            })
            setTimeout(() => {
            }, index * 2000); 
            wrappers.forEach((wrapper, index) => {
                const petals = wrapper.querySelectorAll('.petal');
                const miolos = wrapper.querySelectorAll('.miolo');
                
    
                setTimeout(() => {
                    wrapper.classList.add('animation-started');
                    petals.forEach((petal) => {
                        petal.style.animationPlayState = 'running';
                    });
                    miolos.forEach((miolo) => {
                        miolo.style.animationPlayState = 'running';
                    });
                }, index * 2500); 
            });
        });

        
        // wrappers.forEach((wrapper, index) => {
        //     const petals = wrapper.querySelectorAll('.petal');
        //     const miolos = wrapper.querySelectorAll('.miolo');
            

        //     setTimeout(() => {
        //         wrapper.classList.add('animation-started');
        //         petals.forEach((petal) => {
        //             petal.style.animationPlayState = 'running';
        //         });
        //         miolos.forEach((miolo) => {
        //             miolo.style.animationPlayState = 'running';
        //         });
        //     }, index * 2000); // Delay between each flower animation
        // });


        setTimeout(() => {
            blackScreen.classList.add('fade-out');
            musicBox.style.display = "flex";
            document.getElementById('stem1').style.display = 'none';
            box1.style.zIndex = "9998";
            box2.style.zIndex = "9997";
            box3.style.zIndex = "9997";
            blackScreen.style.display = 'none';
            const petals = document.querySelectorAll('.petal');
            petals.forEach((petal) => {
                petal.style.transition = 'background 3s ease';
                petal.style.background = 'linear-gradient(to bottom, rgb(123, 0, 255), rgb(166, 0, 255), #eb8fff)';
            });
            document.querySelector('.box1').classList.add('animation-started');
            mostrarBox();

        }, 48500);
    }, 3000); 
}


function fadeInAudio(audio, duration,steps) {
    let volume = 0;
    const step = steps; 
    const intervalTime = duration / (1 / step); 
    const fadeInInterval = setInterval(() => {
        if (volume < 1) {
            volume = Math.min(volume + step, 1); 
            audio.volume = volume;
        } else {
            clearInterval(fadeInInterval); 
        }
    }, intervalTime);
}
