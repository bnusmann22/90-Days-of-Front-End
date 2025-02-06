const multiColor = document.getElementById("MultiColor");
const Colors = ["rgb(82, 22, 4)", "purple", "#7d2ae8", "green"];
let index = 0;
const changeColor = () => {
  multiColor.style.color = Colors[index];
  index = (index + 1) % Colors.length;
};
setInterval(changeColor, 2000);
const Data = document.querySelector("select");
const Show = () => {
  console.log(`You chose ${Data.value} Team🚀🚀`);
};
