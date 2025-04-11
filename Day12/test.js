let butn = document.getElementById('submitbtn');
let time = 5;
butn.onclick = () => {
  cntDwn();
};

let sectCall;
let sctEl = document.getElementById('cntDwn');
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
    console.log('Go!!');
  }
};

document.querySelector('.pause').addEventListener('click', () => {
  console.log('CLearance Timer Just Stopped!! ');
  sctEl.style.contentVisibility = 'hidden';
  clearTimeout(sectCall);
});