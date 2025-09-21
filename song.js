// JavaScript para el reproductor de música
const playBtn = document.getElementById("playBtn");
const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("timeDisplay");
const volumeSlider = document.getElementById("volumeSlider");

let isPlaying = false;

// Play/Pause
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audioPlayer.pause();
    playBtn.classList.remove("playing");
  } else {
    audioPlayer.play();
    playBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
});

// Actualizar barra de progreso
audioPlayer.addEventListener("timeupdate", () => {
  const progressPercent =
    (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.style.width = progressPercent + "%";

  const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
  const currentSeconds = Math.floor(audioPlayer.currentTime % 60)
    .toString()
    .padStart(2, "0");
  const durationMinutes = Math.floor(audioPlayer.duration / 60) || 0;
  const durationSeconds =
    Math.floor(audioPlayer.duration % 60)
      .toString()
      .padStart(2, "0") || "00";

  timeDisplay.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
});

// Click en barra de progreso
progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  audioPlayer.currentTime = pos * audioPlayer.duration;
});

// Control de volumen
volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value / 100;
});

// Animación de las flores
onload = () => {
  document.body.classList.remove("container");
};
