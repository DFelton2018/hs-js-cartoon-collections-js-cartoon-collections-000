function dwarfRollCall (dwarves) {
  var roleCall = [];
  for (var i = 0; i < dwarves.length; i++) {
  roleCall.push([i+1] + ". " + dwarves[i] + ' ');
  }
  return roleCall.join('');
}

function summonCaptainPlanet (planeteerCalls){
  var loudCall = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    loudCall.push(planeteerCalls[i] + "!");
  }
  return loudCall;
}

function longPlaneteerCalls (words) {
}

function findTheCheese (foods) {
}
