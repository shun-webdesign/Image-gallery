
let images = [...document.querySelectorAll('.gallery-img')];
images.forEach((image, idx) => {
  image.style.backgroundImage = `url(./img/${idx + 1}.jpg)`
})


TweenMax.from(".gallery-img", {
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: {
    amount:.4
  }
})

var centerWidth = window.innerWidth / 2;
var centerHeight = window.innerHeight / 2;

galleryImages = document.querySelector(".container")

posX = 0;
mouseX = 0;
posY = 0;
mouseY = 0;

TweenMax.to({}, 0.0016, {
  repeat: -1,
  onRepeat: function () {
    posX -= (mouseX+ posX) / 30;
    posY -= (mouseY+ posY) / 20;

    TweenMax.set(galleryImages, {
      css: {
        left: posX + centerWidth,
        top: posY + centerHeight
      }
    });
  }
});

document.addEventListener("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
})
