

var lockIt = document.getElementById('lock');

var x = 50;
var y = 50;


// pointer lock object forking for cross browser

lockIt.requestPointerLock = lockIt.requestPointerLock ||
                            lockIt.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock;

lockIt.onclick = function() {
  lockIt.requestPointerLock();
};

// pointer lock event listeners

// Hook pointer lock state change events for different browsers
document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
  if (document.pointerLockElement === lockIt ||
      document.mozPointerLockElement === lockIt) {
    console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log('The pointer lock status is now unlocked');  
    document.removeEventListener("mousemove", updatePosition, false);
  }
}

var tracker = document.getElementById('tracker');

function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if(x > 255){
    x = 0;
  }else if(x < (-255) ){
    x = 0;
  }
  if(y > 255){
    y = 0;
  }else if(y <  (-255) ){
    y = 0;
  }

  //tracker.textContent = "X position: " + x + ", Y position: " + y;
  console.log('x: '+x+ ' -y: '+y);
}