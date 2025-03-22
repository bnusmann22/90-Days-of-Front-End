`use strict`;
let butn = document.getElementById('submitbtn');
let resp = document.getElementById('res');
let resp2 = document.getElementById('res2');
let lName = document.getElementById('lover_name');
let uName = document.getElementById('user_name');

butn.addEventListener('click', function () {
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
    resp2.innerHTML = checkLove;
    resp.innerHTML = answer;
    setTimeout(() => {
      uName.value = '';
      lName.value = '';
      resp2.innerHTML = ' ';
      resp.innerHTML = ' ';
    }, 1500);
  }

  // let randInt = Math.floor(Math.random() * 100) + 1;
  // let answer = `${randInt}% of Love Detected`;
  // const checkLove =
  //   randInt >= 50 ? 'Higher Love Percentage' : 'Hmm, This Love might not work';
  // console.log(randInt);
  // console.log(checkLove);
  // console.log(answer);
});

// const checkLove = (randInt) => {
//   if (randInt >= 50) {
//     console.log('Higher Love Percentage');
//   } else {
//    console.log('Hmm, This Love might not work');
//  }
// };
// checkLove();
