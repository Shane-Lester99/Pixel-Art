// Select color input

// Select size input
//const form = document.querySelector('form');
/*
form.addEventListener('change', function test() {
  const curr = event.target;
  alert(curr.value);
  //curr.value = event.target.value;
  /*alert(document.body.querySelector('input[name="height"]'.valye); */
//});*/


/*
const inputBox = document.querySelectorAll('input[type="number"]');

inputBox.addEventListener('onchange', function updateBox() {
	alert('box was changed'); 
});
*/
//heightBox.value = 3;
//inputBox[0].value = 5;

//alert(inputBox[0].value);

// When size is submitted by the user, call makeGrid()
/*document.addEventListener('click', function test() { alert("Hello world"); });
*/

function paintBox(event) {
	//event.target.style.color = "red";
  //event.target.style = "background-color : red";
  const colorPicker = document.querySelector("#colorPicker");
  event.target.style = `background-color : ${colorPicker.value}`;
}

//Submit Button
document.querySelector('input[type="submit"]').addEventListener('click', function test(event) {
  event.preventDefault();
  const boxes = document.querySelectorAll('input[type="number"');
  heightOfGrid = boxes[0].value;
  widthOfGrid = boxes[1].value;
  makeGrid(heightOfGrid, widthOfGrid);
  /*const height = document.querySelector('#inputHeight') {
  //height.setAttribute('value') = 7;
  alert(height);
  }*/
});



function makeGrid(height, width) {
  // Your code goes here!
  /*
  const grid = document.querySelector("#pixelCanvas");
  const row = document.createElement("TR");
  row.insertCell(0);
  row.insertCell(1);
  grid.appendChild(row);
  
  alert(grid.outerHTML);
  */
  //alert(grid.outerHTML);
  
  const grid = document.querySelector('#pixelCanvas');
  /*
  if (EMPTYGRID !== grid.outerHTML) {
    alert("HIT1");
    document.querySelector('#pixelCanvas').outerHTML = EMPTYGRID; 
    alert("HIT2");   
  }*/
  grid.innerHTML = "";
  for (let i = 0; i < height; i++) {
    const newRow = 	document.createElement("TR");
    for (let j = 0; j < width; j++) {
      newRow.insertCell(j);
     
    }   
    grid.appendChild(newRow);
  }

  const allDataElements = document.querySelectorAll('td');

  allDataElements.forEach( 
  function(currentValue, currentIndex, listObj) { 
    currentValue.addEventListener('click', paintBox);
  }
);
}


 


