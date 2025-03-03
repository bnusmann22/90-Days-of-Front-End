const inputField = document.querySelectorAll('input');
const multiColor = document.getElementById('MultiColor');
const Colors = ['rgb(82, 22, 4)', 'purple', '#7d2ae8', 'green'];
let index = 0;
const changeColor = () => {
  multiColor.style.color = Colors[index];
  index = (index + 1) % Colors.length;
};
setInterval(changeColor, 2000);
const Data = document.querySelector('select');
const Show = () => {
  console.log(`You chose ${Data.value} Team🚀🚀`);
};
const showToast = (message) => {
  let toast = document.getElementById('toast');
  toast.innerHTML = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
};

inputField.forEach((input) => {
  if (input.type == 'text' || input.type == 'number') {
    input.onfocus = function () {
      showToast(`Please enter your ${this.name}`);
    };
  }
});

// const errMsg = document.querySelectorAll('.error_feild');
// errMsg.forEach((el) => {
//   el.style.display = 'block';
// });
// console.log(errMsg);
