const container = document.querySelector(".container");
let size = document.querySelector(".size");
const colorPicker = document.querySelector(".color");
const resetButton = document.querySelector(".btn");

function populate(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixel.addEventListener("mousedown", () => paintPixel(pixel));
    pixel.addEventListener("click", () => paintPixel(pixel));

    container.appendChild(pixel);
  }
}

function paintPixel(pixel) {
  pixel.style.backgroundColor = colorPicker.value;
}

function resizePixel() {
  size.addEventListener("keyup", function () {
    reset();
  });
  size.addEventListener("change", function () {
    reset();
  });
}

function reset() {
  container.innerHTML = "";
  populate(size.value);
}


populate(size.value);
resizePixel();

resetButton.addEventListener("click", ()=> reset());
