const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
let genPost = document.querySelector('.genBtn');
let btns = document.querySelectorAll('Button');

console.log(btns);

btns.forEach((btn) => {
  btn.onclick = () => {
    console.log('Ive been clicked +++');
    //btn.style.padding= `${btn.style.padding + 5}px`;
  };
});
genPost.onclick = () => {
  console.log('Ive been clicked');
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
