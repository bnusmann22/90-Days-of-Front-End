'use strict';

let butn = document.getElementById('submitbtn');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
let genPost = document.querySelector('.genBtn');
let resp = document.getElementById('res');
let lNameInput = document.getElementById('lover_name'); // Renamed for clarity
let sctEl = document.getElementById('cntDwn');
let uNameInput = document.getElementById('user_name'); // Renamed for clarity
let time = 5;

// Declare variables in a higher scope
let uName = '';
let lName = '';

butn.addEventListener('click', function () {
  // Assign the values from input fields to the outer variables
  uName = uNameInput.value;
  lName = lNameInput.value;

  if (uName === '' || lName === '') {
    throw new Error('One or both inputs are EMPTY');
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
    cntDwn();
  }
});

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
  console.log(`uName: ${uName}, lName: ${lName}`);
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
  console.log('Ive been clicked');
  modal.style.display = 'block';
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