'use strict';

let butn = document.getElementById('submitbtn');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
let genPost = document.querySelector('.genBtn');
let resp = document.getElementById('res');
let mdlTxt = document.getElementById('res2');
let lNameInput = document.getElementById('lover_name'); // Renamed for clarity
let sctEl = document.getElementById('cntDwn');
let uNameInput = document.getElementById('user_name'); // Renamed for clarity
let time = 5;

// Declare variables in a higher scope
let uName = '';
let lName = '';
let checkLove = '';

butn.addEventListener('click', function () {
  // Assign the values from input fields to the outer variables
  uName = uNameInput.value;
  lName = lNameInput.value;

  if (uName === '' || lName === '') {
    throw new Error('One or both inputs are EMPTY');
  } else {
    let randInt = Math.floor(Math.random() * 100) + 1;
    let answer = `${randInt}% of Love Detected`;
    checkLove =
      randInt >= 50
        ? 'A perfect love story 😍'
        : 'Hmm, This Love might not work 😢🤦‍♀️';

    resp.classList.remove('hidden');
    //resp2.innerHTML = checkLove;
    resp.innerHTML = answer;
    caller();
    cntDwn();
  }
});

const advTxt = () =>
  `<div style="padding-block: 15px"><b><em>${uName} & ${lName}</em></b> , <br/> <h3>${checkLove}</h3></div>`;

let mainCall;
const caller = () => {
  mainCall = setTimeout(() => {
    uName = '';
    lName = '';
    resp.innerHTML = '';
  }, 6700);
};

const clearer = () => {
  console.log('Clearance Timer Just Stopped!!');
  sctEl.style.contentVisibility = 'hidden';
  clearTimeout(mainCall);
  clearTimeout(sectCall);
};
document.querySelector('.pause').addEventListener('click', clearer);

let sectCall;
const cntDwn = () => {
  sctEl.style.contentVisibility = 'visible';
  sctEl.style.paddingBlock = '10px';
  sctEl.innerHTML = `Inputs would clear in: <b>${time}</b>
  <br/>
  <em>Tap to stop clearance</em>
  `;
  time--;

  if (time >= 1) {
    sectCall = setTimeout(cntDwn, 1650);
  } else {
    sctEl.style.contentVisibility = 'hidden';
    console.log('CLEARED!!');
    location.reload();
  }
};

genPost.onclick = () => {
  modal.style.display = 'block';
  mdlTxt.innerHTML = advTxt();
  clearer();
};
span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
