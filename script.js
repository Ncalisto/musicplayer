const musicBox = document.querySelector('.music-box')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('progress-box')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const songs = ['TNT', 'Sweet Child O Mine', 'In the end']

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song){
    title.innerText = song
    audio.src = `musica/${song}.mp3`
    cover.src = `imagens/${song}.jpg`
}

function playSong() {
    musicBox.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicBox.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()

}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

//function setProgress(e) {
 //   const width = this.clientWidth
 //   const clickX = e.offsetX
 //   const duration = audio.duration
 //
 //   audio.currentTime = (clickX / width) * duration
//}

//funções do player play e pause

playBtn.addEventListener('click',() => {
    const isPlaying = musicBox.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else{
        playSong()
    }
})

//funções mudar musica

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

//progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)