function dwarfRollCall(dwarves) {
var array = [];
    dwarves.forEach(function (dwarf,i){
    array.push(i+1 + ". " + dwarf + " ")
  });
  return array.join("");
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
 var cheese = ["cheddar", "gouda", "camembert"]
  for(var i = 0; i < foods.length; i++) {
    if(cheese.includes(foods[i])) {
      return foods[i];
    }
  }
  return "no cheese!";
  }
