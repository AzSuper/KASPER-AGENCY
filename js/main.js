//handle active nav link
const navLinks = Array.from(document.getElementsByClassName("link"));
console.log(navLinks);
navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    // Remove "activeLink" class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    // Add "activeLink" class to the clicked link
    element.classList.add("active");
    console.log("hello");
  });
});

//handle nav-mobile action
const MenuIcon = document.querySelector(".fa-bars");
const LinkList = document.querySelector(".nav-mobile");

MenuIcon.addEventListener("click", () => {
  LinkList.classList.toggle("open");
});

// landing change image
const Landing = document.querySelector(".landing");
let wallpaperNumber = 1;

function changeBackground() {
  wallpaperNumber = wallpaperNumber === 10 ? 1 : wallpaperNumber + 1;
  Landing.style.setProperty(
    "--bg-image",
    `url('../images/${wallpaperNumber}.jpg')`
  );
}

// Change background every 4 seconds
setInterval(changeBackground, 4000);

// music player live

document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio(
    "music/Alice Merton - No Roots (Instrumental).mp3"
  );
  const playButton = document.querySelector(".play-btn");
  const stopButton = document.querySelector(".pause-btn");
  const volumeButton = document.querySelector(".volume-btn");

  let isPlaying = false;

  playButton.addEventListener("click", function () {
    console.log("play");
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
    }
  });

  stopButton.addEventListener("click", function () {
    console.log("stop");
    isPlaying = false;
    audio.pause();
    audio.currentTime = 0;
  });

  volumeButton.addEventListener("click", function () {
    if (audio.volume === 0.0) {
      audio.volume = 1;
    } else {
      audio.volume = 0.0;
    }
  });
});

// portfolio image filter

// set images object

const PortfolioImages = [
  {
    id: "f1",
    path: "../images/food-1.jpg",
    title: "Food Picture",
    type: "food",
  },
  {
    id: "f2",
    path: "../images/food-2.jpg",
    title: "Food Picture",
    type: "food",
  },
  {
    id: "f3",
    path: "../images/nature-3.jpg",
    title: "Nature Picture",
    type: "food",
  },
  {
    id: "f4",
    path: "../images/nature-4.jpg",
    title: "Nature Picture",
    type: "food",
  },
  {
    id: "p1",
    path: "../images/photo-1.jpg",
    title: "Normal Picture",
    type: "food",
  },
  {
    id: "p2",
    path: "../images/photo-2.jpg",
    title: "Normal Picture",
    type: "food",
  },
  {
    id: "p3",
    path: "../images/photo-3.jpg",
    title: "Normal Picture",
    type: "food",
  },
  {
    id: "p4",
    path: "../images/photo-4.jpg",
    title: "Normal Picture",
    type: "food",
  },
];

// const test = `<div class="custom"> <h1>hello man </h1></div>`;
// const filterChoseArray = document.querySelectorAll(".filter-chose");
// console.log(filterChoseArray[0].innerHTML);
// filterChoseArray.forEach((chose) =>
//   chose.addEventListener("click", () => {
//     const Selected = chose.innerHtml;
//     console.log(Selected);
//     document.querySelector(".portfolio-image").innerHTML = test;
//   })
// );

// const MyVideo = document.getElementById("myVideo");
// let videoNumber = 1;

// MyVideo.addEventListener("ended", () => {
//   let videoSource = document.getElementById("sourceVideo");

//   if (videoNumber < 3) {
//     videoNumber++;
//   } else {
//     videoNumber = 1;
//   }
//   videoSource.src = `http://127.0.0.1:5500/video/${videoNumber}.mp4`;

//   MyVideo.load(); // Load the new video source
//   MyVideo.play(); // Play the video
// });
