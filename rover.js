var myRover = {
  position: [0,0],
  direction: 'N'
};

// Creating the two-dimensional array (grid)
var grid = new Array(10);

for (var i = 0; i < 10; i++) {
  grid[i] = new Array(10);
}

//Directions and commands
function commands(){
var commands = prompt ('Choose directions \n\nl: left \nr: right \nf: forward \nb: backward');
var gridCommands = commands.split("");

for (var i = 0; i < gridCommands.length; i++){
  if (gridCommands[i] == 'f') {
    goForward(myRover);
  }
  else if (gridCommands[i] == 'b') {
    goBackward(myRover);
  }
  else if (gridCommands[i] == 'l') {
    turnLeft(myRover);
  }
  else if (gridCommands[i] == 'r') {
    turnRigth(myRover);
  }
  else {
    alert ('Wrong command!');
    return commands();
  }
}
}
commands();

//Functions (Forward, Backward, Left, Right)
function goForward(rover){
  switch(rover.direction){
    case 'N':
    rover.position[0]++;  
    break;
    case 'E':
    rover.position[1]++;
    break;
    case 'S':
    rover.position[0]--;
    break;
    case 'W':
    rover.position[1]--;
    break;
  }
  if (rover.position[0] < 0) {
    rover.position[0] += 10;
  }
  if (rover.position[0] > 9) {
    rover.position[0] -= 10;
  }
  if (rover.position[1] < 0) {
    rover.position[1] += 10;
  }
  if (rover.position[1] > 9) {
    rover.position[1] -= 10;
  }
  console.log ("New Rover Position: [" + rover.position[0] +", "+ rover.position[1] + "]");
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  if (rover.position[0] < 0) {
    rover.position[0] += 10;
  }
  if (rover.position[0] > 9) {
    rover.position[0] -= 10;
  }
  if (rover.position[1] < 0) {
    rover.position[1] += 10;
  }
  if (rover.position[1] > 9) {
    rover.position[1] -= 10;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
  }

  console.log("New Rover Direction: [" + rover.direction + "]");
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRigth(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
  }
  console.log("New Rover Direction: [" + rover.direction + "]");
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
