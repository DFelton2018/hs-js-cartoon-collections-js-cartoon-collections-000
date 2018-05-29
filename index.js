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
    loudCall.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return loudCall;
}

function longPlaneteerCalls (words) {
  for (var i = 0; i < words.length; i++) {
  if (words[i].length > 4) {
  return true;
} else {
  return false;
    }
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i ++)
  if (foods[i] === 'cheddar') {
    return foods[i];
}
  if(foods[i] !='cheddar') { 
    return 'no cheese!';
  }
}
