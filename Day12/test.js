let butn = document.getElementById('submitbtn');
let time = 5;
butn.onclick = () => {
  console.log( setInterval(() => {
    time - 1;
  }, 1000););
};

const cntDwn = () =>{
 
}