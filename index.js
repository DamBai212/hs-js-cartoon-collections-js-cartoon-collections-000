function dwarfRollCall(dwarves) {
let array = [];
 dwarves.forEach((name,i) =>
   array.push(`${i+1}. ${dwarves[i]} `))
     return array.join("")
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(name => { return name.toUpperCase() + '!'})
}

function longPlaneteerCalls(words) {
  if (words.length > 4){
    return true;
  }else{
    return false;
  }
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++) {
    if(foods[i] === 'cheddar') {
      return foods[i];
    }
  }
  return "no cheese!";
  }
