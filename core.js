document.addEventListener("DOMContentLoaded", () => {
  const openEnvelop = document.getElementById("rotatedContainerAnimation");
  const envelopContent = document.getElementById("envelopContentAnimation");
  setTimeout(() => {
    openEnvelop.classList.add("open");
  }, "1000");
  setTimeout(() => {
    openEnvelop.style.zIndex = '10';
    envelopContent.style.bottom = '80px';
    envelopContent.classList.add("canHover");
    confetti({
      spread: 360,
      ticks: 200,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
      particleCount: 100,
      scalar: 5,
      shapes: ["image"],
      shapeOptions: {
        image: [{
            src: "https://www.psdgraphics.com/wp-content/uploads/2022/01/red-heart-768x589.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://freepngimg.com/thumb/heart/2-2-heart-png-hd.png",
            width: 32,
            height: 32,
          },
        ],
      },
    });
  }, "2000");
});
