let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test1.jpg') {
      myImage.setAttribute ('src','images/test2.jpg');
    } else {
      myImage.setAttribute ('src','images/test1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are Welcome, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
}