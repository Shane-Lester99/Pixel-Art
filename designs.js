/******************************************************************************
Title:       designs.js

Author:      Shane Lester

Created on:  June 29th 2018

Description: To be used to add grid-building and coloring functionality to 
             with 'Pixel Art Maker' project. Please refer to README.md file
             for more information.

******************************************************************/

//@Paramameters: <td> element passed from .makeGrid() method.
//@Return: None.
//@Preconditions: This method was called
  //by the .makeGrid() function as an event listener for a <td> html
  //element. Previous background-color of <td> is now arbritary.
//@Postconditions: Box in grid is color specified by  color picker.
function paintBox(event) {
  //Choose the color picker element.
  const colorPicker = document.querySelector("#colorPicker");
  //The background color will be chosen for the <td> element.
  event.target.style = `background-color : ${colorPicker.value}`;
  //Return from function.
  return;
}

//@Paramameters: Event object used only to prevent defaults to be able 
  //to define behavior easier. 
//@Return: None.
//@Preconditions: This funciton is only meant to be called on an event listener. 
  //It is meant to only be called for event when 'submit' button is pushed. 
//@Postconditions: Grid is created for box of size specified by client.
function createCanvas(event) {
  //Prevent defaults to define behavior programmatically.
  event.preventDefault();
  //Creates variable for height and width form elements in list where 
    //height is at pos 0 and width is at pos 1.
  const boxes = document.querySelectorAll('input[type="number"]');
  //Pass in height and width to .makeGrid() method.
  makeGrid(boxes[0].value, boxes[1].value);
  //Return from function.
  return;
}

//@Paramameters: Height and width of grid specified by client. 
//@Return: None.
//@Preconditions: This funciton is only meant to be called on an event listener. 
  //It is meant to only be called for event when 'submit' button is pushed. 
//@Postconditions: Grid is created for box of size specified by client.
function makeGrid(height, width) { 
  //Find element that is the table which will be used as grid.
  const grid = document.querySelector('#pixelCanvas');
  //Delete the html within the grid so the new height and width can be used.
  grid.innerHTML = "";
  //Create rows equal to height parameter.
  for (let i = 0; i < height; i++) {
    //Create the new row element.
    const newRow =  document.createElement("TR");
    //Create amount of cells specified by width parameter.
    for (let j = 0; j < width; j++) {
      //Add new cells into table row object.
      newRow.insertCell(j);
    }  
    //Add new row into grid element on the DOM. 
    grid.appendChild(newRow);
  }
  //Get NodeList of all newly created cells.
  const allDataElements = document.querySelectorAll('td');
  //For each cell add the event listener .paintBox() so the boxes can be painted.
  allDataElements.forEach(function(currentValue, currentIndex, listObj) { 
    currentValue.addEventListener('click', paintBox);
  });
  //Return from funciton.
  return;
}

//The event listener which creates all the grid functionality once the 'submit' button is clicked.
document.querySelector('input[type="submit"]').addEventListener('click', createCanvas);






 


