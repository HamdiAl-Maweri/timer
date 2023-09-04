let minutes = 0;
let seconds = 0;
let mseconds = 0;
let timer;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function start() {
  timer = setInterval(update, 10);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function update() {
  mseconds++;
  if (mseconds == 100) {
    mseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("minutes").innerHTML = timeformat(minutes);
  document.getElementById("seconds").innerHTML = timeformat(seconds);
  document.getElementById("mseconds").innerHTML = timeformatms(mseconds);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function stop() {
  clearInterval(timer);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function reset() {
     minutes = 0;
     seconds = 0;
     mseconds = 0;
     document.getElementById("minutes").innerHTML = timeformat(minutes);
     document.getElementById("seconds").innerHTML = timeformat(seconds);
     document.getElementById("mseconds").innerHTML = timeformatms(mseconds);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function timeformat(time) {
    if (time < 10 ){
    time =  "0"+time
    }
    return time;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function timeformatms(time) {
    if (time < 10 ){
        time =  "00"+time
    }
    else if (time > 9 && time <  100){
        time =  "0"+time
    }  
return time;
}