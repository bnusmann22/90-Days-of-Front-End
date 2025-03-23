`use strict`;
let butn = document.getElementById('submitbtn');
let resp = document.getElementById('res');
let resp2 = document.getElementById('res2');
let lName = document.getElementById('lover_name');
let uName = document.getElementById('user_name');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

butn.addEventListener('click', function () {
  if (uName.value == '' || lName.value == '') {
    throw new Error('one or both inputs are EMPTY');
  } else {
    modal.style.display = "block";
    let randInt = Math.floor(Math.random() * 100) + 1;
    let answer = `${randInt}% of Love Detected`;
    const checkLove =
      randInt >= 50
        ? 'Higher Love Percentage'
        : 'Hmm, This Love might not work';

    resp.classList.remove('hidden');
    resp2.innerHTML = checkLove;
    resp.innerHTML = answer;
    span.onclick = function() {
      modal.style.display = "none";
    }
    setTimeout(() => {
      uName.value = '';
      lName.value = '';
      resp.innerHTML = ' ';
    }, 1500);
  }
    
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}