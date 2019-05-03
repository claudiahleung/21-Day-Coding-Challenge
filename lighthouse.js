function powerOn(){
  var powerOn = ship.powerOn;
  
  if (powerOn === false) ship.powerOn = true;
}

function countModules() {
  return availableModules.length;
}