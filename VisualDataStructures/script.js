// Utility functions
const initArray = (length, element) => {
  for (let index = 0; index < length; index++) {
    let div = document.createElement('div');
    div.innerText = index;
    element.appendChild(div);
  }
}

window.onload = () => {
  // Array example
  const arrayContainer = document.getElementById('array');
  initArray(3, arrayContainer);  
}

// Array pop
const popArray = () => {
  const arrayContainer = document.getElementById('array');
  const elementToPop = arrayContainer.lastChild;
  if(elementToPop) {
    arrayContainer.removeChild(elementToPop);
  } else {
    /* To Do: display error message */
  }
}

//Array push
const pushArray = () => {
  const arrayContainer = document.getElementById('array');
  const elementToPush = document.createElement('div');
  elementToPush.innerText = arrayContainer.childElementCount;
  arrayContainer.appendChild(elementToPush);
}