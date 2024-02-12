const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_ruth-b-dandelions-lyrics-youtubemp3free.org.mp3",
    title: "Dandelions",
    artist: "Ruth B",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_rosa-linn-snap-lyrics-youtubemp3free.org.mp3",
    title: "SNAP",
    artist: "Rosa Linn",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_keshi-limbo-visualizer-youtubemp3free.org.mp3",
    title: "Limbo",
    artist: "Keshi",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_rewrite-the-stars-james-arthur-feat-anne-marie-lyricsvietsub-youtubemp3free.org.mp3",
    title: "Rewrite the Stars",
    artist: "James Arthur ft Anne Marie",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_aziz-hedra-somebodys-pleasure-official-lyric-video-youtubemp3free.org.mp3",
    title: "Somebody's Pleasure",
    artist: "Aziz Hedra",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_tate-mcrae-greedy-official-video-youtubemp3free.org.mp3",
    title: "Greedy",
    artist: "Tate McRae",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_sabrina-carpenter-feather-official-video-youtubemp3free.org.mp3",
    title: "Feather",
    artist: "Sabrina Carpenter",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_sabrina-carpenter-nonsense-official-video-youtubemp3free.org.mp3",
    title: "Nonsense",
    artist: "Sabrina Carpenter",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_the-weeknd-jennie-lilyrose-depp-one-of-the-girls-official-video-youtubemp3free.org.mp3",
    title: "One Of The Girls",
    artist: "Jennie Blackpink",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  },
  {
    songSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/ytmp3free.cc_doechii-what-it-is-solo-version-lyrics-youtubemp3free.org.mp3",
    title: "What It Is",
    artist: "Doechii",
    imgSrc: "https://cdn.jsdelivr.net/gh/samuelpasaribu/okemedia/IMG-20240201-WA0001.jpg",
  }
];

const loadMusic = (index) => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  index = (index + 1) % songDataBase.length;
  loadMusic(index);
  play();
});

loadMusic(index);

nextButton.addEventListener("click", () => {
  index = (index + 1) % songDataBase.length;
  loadMusic(index);
  play();
});
previousButton.addEventListener("click", () => {
  index = (index - 1 + songDataBase.length) % songDataBase.length;
  loadMusic(index);
  play();
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});
