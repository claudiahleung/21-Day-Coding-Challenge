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

function activateBeacon(){ // day 10
  radio.beacon = true;
}
activateBeacon();

function setFrequency(){ // day 11
  let low = radio.range.low;
  let high = radio.range.high;
  let frequency = ((low)+(high))/2;
  radio.frequency = frequency;
}
function initialize(){ // day 12
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX(){ // day 13
  let signal = 0;
  for (let i = 0; i<12; i++){
    signal = checkSignal();
    if (signal !== undefined){
      navigation.x = signal;
      break;
    }
  }
}

function calibrateY(){ // day 14
  let signal =0;
  for (let i = 0; i<60; i++){
    signal = checkSignal();
    if (signal !== undefined){
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ(){
  let signal =0;
  for (let i = 0; i<60; i++){
    signal = checkSignal();
    if (signal !== undefined){
      navigation.z = signal;
      break;
    }
  }
}

function calibrate(){ // day 15
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(speed){ // day 16
  var speed = parseInt(speed);
  if (speed >= 0){
    navigation.speed = speed;
  }
}

function activateAntenna() { // day 17
  ship.antenna.active = true;
}

function sendBroadcast(){ // day 18
  var i = 0;
  while (i < 100) {
    broadcast();
    i++;
  }
}

function configureBroadcast(){ // day 19
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();

function decodeMessage(message){ // day 20
 // using global replacement
  let res = message.replace(/1/g, "i");
  res = res.replace(/4/g, "a");
  res = res.replace(/3/g, "e");
  res = res.replace(/0/g, "o");
  res = res.replace(/5/g, "y");
  res = res.replace(/2/g, "u");
  return res;
}
