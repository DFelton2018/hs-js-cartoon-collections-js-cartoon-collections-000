function dwarfRollCall (dwarves) {
  var whereMyDwarvesAt = [];
    for (var i = 0; i < dwarves.length; i++) {
      whereMyDwarvesAt.push(`${i+1}. ${dwarves[i]} `);
    }
  return whereMyDwarvesAt.join('');
}

function summonCaptainPlanet (planeteerCalls) {
  var heartIsNotAnElement = [];
    for (var i = 0; i < planeteerCalls.length; i++) {
      heartIsNotAnElement.push(`${planeteerCalls[i].toUpperCase()} !`);
    }
  return heartIsNotAnElement;
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