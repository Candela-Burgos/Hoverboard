const container = document.getElementById("container");
const squares = 500;
const colors = ["#ff00f2", "#eeff00", "#0099ff", "#ff7700", "#00ff6a"];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setBgColor = (elem) => {
  const randColor = randomColor();
  elem.style.backgroundColor = randColor;
  elem.style.boxShadow = `0 0 2px ${randColor}, 0 0 10px ${randColor}`;
};

const removeBgColor = (elem) => {
  elem.style.backgroundColor = "#1d1d1d";
  elem.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setBgColor(square));
  square.addEventListener("mouseout", () => removeBgColor(square));

  container.appendChild(square);
}
