// let modal = document.getElementById('myModal');
// let span = document.getElementsByClassName('close')[0];
// let resp2 = document.getElementById('res2');
`use strict`;
let butn = document.getElementById('submitbtn');
let resp = document.getElementById('res');
let lName = document.getElementById('lover_name');
let uName = document.getElementById('user_name');

butn.addEventListener('click', function (stopTimeout) {
  if (uName.value == '' || lName.value == '') {
    throw new Error('one or both inputs are EMPTY');
  } else {
    let randInt = Math.floor(Math.random() * 100) + 1;
    let answer = `${randInt}% of Love Detected`;
    const checkLove =
      randInt >= 50
        ? 'Higher Love Percentage'
        : 'Hmm, This Love might not work';

    resp.classList.remove('hidden');
    //resp2.innerHTML = checkLove;
    resp.innerHTML = answer;
    caller();
  }
});

let mainCall;
const caller = () => {
  mainCall = setTimeout(() => {
    uName.value = '';
    lName.value = '';
    resp.innerHTML = '';
  }, 3000);
};

document.querySelector('.pause').addEventListener('click', () => {
  alert('CLearance Timer Just Stopped!! ');
  clearTimeout(mainCall);
});