function powerOn(){ // day 1
  var powerOn = ship.powerOn;
  
  if (powerOn === false) ship.powerOn = true;
}

function countModules() { // day 2 
  return availableModules.length;
}

function countEssential(){ // day 3
  var essentialModules = 0;
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].essential) essentialModules++;
  }
  return essentialModules;
}
function loadModule(index){ // day 4
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}
function loadIntoShip(){
  for (var i = 0; i < countModules(); i++){
    if (availableModules[i].name == 'life-support') {
      loadModule(i);
    }
  }
}
loadIntoShip();