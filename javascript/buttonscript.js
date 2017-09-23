var switch1;

init();

function init() {
  // Check if light is on here
  switch1 = true;
}

document.getElementById('switch-1').addEventListener('click', function() {
  if (switch1 === true) {
    console.log('Switched to false');
    switch1 = false;
  } else if (switch1 === false) {
    console.log('Switched to true');
    switch1 = true;
  }
});
