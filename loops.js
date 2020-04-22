const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow', 'violet'];

//console.log(colors[0]);
//console.log(colors[1]);
//console.log(colors[2]);
//console.log(colors[3]);
//console.log(colors[4]);
//console.log(colors[5]);

const colorLoop = (colorsList) => {
  let domString = '';
  for (let i = 0; i < colorsList.length; i++) {
    // console.log(colorsList[i]);
    domString += `<h2>${colors[i]}</h2>`;
  }
  // return domString;
  console.log(domString);
}

// Exercise 1:
// create an array of instructor objects, each with a firstName and lastName properties (keys/values)
// create a function that will loop over the instructors array
// console.log() full instructor names i.e. "Luke Lancaster", "Matt Gill", etc etc etc
// call function in init()

const instructors = [{
    firstName: 'Luke',
    lastName: 'Lancaster'
  },
  {
    firstName: 'Matt',
    lastName: 'Gill'
  },
  {
    firstName: 'Michael',
    lastName: 'Clark'
  }
];

// Exercise 1.2:
// instead of logging out the names
// build up a domString of <h2>INSTRUCTOR NAME HERE</h2> tags
// and log final domString AFTER the loop

const names = (instructorsArray) => {
  let domString = '';
  for (let i = 0; i < instructorsArray.length; i++) {
    domString += `<h2>${instructorsArray[i].firstName} ${instructorsArray[i].lastName}</h2>`
  }
  console.log(domString);

}

const init = () => {
  // colorLoop(colors);
  names(instructors);
}

init();