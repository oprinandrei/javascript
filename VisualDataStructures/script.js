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

  // List example
  const listContainer = document.getElementById('list');
  initArray(5, listContainer); 

  // Stack example
  const stackContainer = document.getElementById('stack');
  initArray(2, stackContainer); 
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

// List pop
const popList = () => {
  const listContainer = document.getElementById('list');
  const elementToPop = listContainer.firstChild;
  if(elementToPop) {
    listContainer.removeChild(elementToPop);
  } else {
    /* To Do: display error message */
  }
}

// List push
const pushList = () => {
  const listContainer = document.getElementById('list');
  const elementToPush = document.createElement('div');
  if(listContainer.childElementCount === 0) {
    // If list is empty, there's no lastChild, so we pass 0 as value
    elementToPush.innerText = 0;
  } else {
    // else just push the last number + 1
    elementToPush.innerText = parseInt(listContainer.lastChild.innerText) + 1;
  }
  listContainer.appendChild(elementToPush);
}

// Stack pop
const popStack = () => {
  const stackContainer = document.getElementById('stack');
  const elementToPop = stackContainer.lastChild;
  if(elementToPop) {
    stackContainer.removeChild(elementToPop);
  } else {
    /* To Do: display error message */
  }
}

// Stack push
const pushStack = () => {
  const stackContainer = document.getElementById('stack');
  const elementToPush = document.createElement('div');
  elementToPush.innerText = stackContainer.childElementCount;
  stackContainer.appendChild(elementToPush);
}