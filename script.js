let x = document.getElementById("music");
let y = document.getElementById("myProgress");
let z = document.getElementById("play");

function playpause() {
  if (x.paused || x.currentTime < 0) {
    x.play()
    z.classList.remove(" fa-play-circle  ")
    z.classList.add(" fa-pause-circle ")
  }
  else {
    x.pause()
    z.classList.remove(" fa-pau-circle  ")
    z.classList.add(" fa-pause-circle ")
  }
}

// function progress(){
//   progress = parseInt((x.currentTime/x.duration)*100)
//   console.log(progress)
//   y.value = progress;
// }


// function play() {
//   x.play()
// }
// function pause() {
//   x.pause()
// }

// let i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     let elem = document.getElementById("myBar");
//     let width = 0;
//     let id = setInterval(frame, 1000);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width = width + (100 / x.duration);
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }


// for next song to play 


const arr = [
  { song: "tu ru ru ", src: "music/music1.mp3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx1pD-5y61mO3S-e1grpCuf24c6zMIGanYrbzcIwB&s" },
  { song: "arabic", src: "music/music2.mp3", img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.sharechat.com%2F384774cd_1668862778891_sc.jpeg%3Ff%3D384774cd_1668862778891_sc.jpeg%26referrer%3Dtag-f5e-service%26tenant%3Dsc&tbnid=AXhHf14A2E_BSM&vet=12ahUKEwjq-uuSxouAAxVip-kKHVLhDPYQMygLegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fsharechat.com%2Ftag%2FVvD3WZ&docid=s8o5cL51ampfpM&w=564&h=317&q=natural&ved=2ahUKEwjq-uuSxouAAxVip-kKHVLhDPYQMygLegUIARD9AQ" },
  { song: "kahani suno", src: "music/music3.mp3", img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F1a%2F24701-nature-natural-beauty.jpg&tbnid=eDs-dfRzKHabSM&vet=12ahUKEwjq-uuSxouAAxVip-kKHVLhDPYQMygNegUIARCBAg..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3A24701-nature-natural-beauty.jpg&docid=ZxeGHALbQLiiaM&w=1920&h=1080&q=natural&ved=2ahUKEwjq-uuSxouAAxVip-kKHVLhDPYQMygNegUIARCBAg" },
];
// for(i=0;i<=arr.length-1;i++){
// console.log(arr[i].song)
// }
let firstSong = 0;
const lastSong = arr.length - 1;
let currentSong = 0;
const nextBtn = document.getElementById("next");
nextBtn.addEventListener('click', () => {

  const musicTag = document.getElementById("music")
  const nameTag = document.getElementById("name")
  currentSong++;
  if (currentSong >= lastSong) {
    currentSong = arr.length - 1;
  }
  musicTag.src = arr[currentSong].src
  console.log(arr[currentSong].src)
  console.log(arr[currentSong].song)
  nameTag.innerHTML = arr[currentSong].song;
  musicTag.play()
});




const prevBtn = document.getElementById("prev");
prevBtn.addEventListener('click', () => {


  const musicTag = document.getElementById("music")
  const nameTag = document.getElementById("name")
  const imageTag = document.getElementById("image")
  currentSong--;
  if (currentSong <= firstSong) {
    currentSong = 0;
  }
  musicTag.src = arr[currentSong].src

  nameTag.innerHTML = arr[currentSong].song;

  musicTag.play()
});
