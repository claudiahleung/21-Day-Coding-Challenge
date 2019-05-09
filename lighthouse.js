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

function findModuleIndex(findName) { // day 5
  for (var i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === findName && availableModules[i].essential) {
      return i;
    }
  }
}

function resetLARRY (){ // day 7
  for (var i = 0; i<10; i++){
    LARRY.quack();
  }
}
resetLARRY();

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation")); // day 6
loadModule(findModuleIndex("communication")); // day 8

function setMessage (){ // day 9
  let navigationJSON = JSON.stringify(navigation);
  radio.message = navigationJSON;
}
setMessage();