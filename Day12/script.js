// let modal = document.getElementById('myModal');
// let span = document.getElementsByClassName('close')[0];
// let resp2 = document.getElementById('res2');
`use strict`;
let butn = document.getElementById('submitbtn');
let resp = document.getElementById('res');
let lName = document.getElementById('lover_name');
let sctEl = document.getElementById('cntDwn');
let uName = document.getElementById('user_name');
let time = 5;

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
    cntDwn();
  }
});

let mainCall;
const caller = () => {
  mainCall = setTimeout(() => {
    uName.value = '';
    lName.value = '';
    resp.innerHTML = '';
  }, 6700);
};

document.querySelector('.pause').addEventListener('click', () => {
  console.log('CLearance Timer Just Stopped!! ');
  sctEl.style.contentVisibility = 'hidden';
  clearTimeout(mainCall);
  clearTimeout(sectCall);
});

let sectCall;
const cntDwn = () => {
  sctEl.style.contentVisibility = 'visible';
  sctEl.style.paddingBlock = '10px';
  sctEl.innerHTML = `Inputs would clear in: <b >${time}</b>
  <br/>
  <em>Tap to stop clearance</em>
  `;
  time--;

  if (time >= 1) {
    sectCall = setTimeout(cntDwn, 1650);
  } else {
    sctEl.style.contentVisibility = 'hidden';
    console.log('CLEARED!!');
    location.reload()
  }
};
