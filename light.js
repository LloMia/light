var Light = function(id, color) {
    var stopBlink;
    //get the target element to render the light into
    var elem = document.getElementById(id);
    elem.classList.add('light-background');

    //append a div into the target element
    var lightElem = document.createElement('div');
    lightElem.classList.add('light');
    lightElem.classList.add(color);
    elem.appendChild(lightElem);

    this.on = function() {
        lightElem.classList.add('on');
    };
    this.off = function() {
        lightElem.classList.remove('on');
        clearInterval(stopBlink);
    };
    this.blink = function() {
      stopBlink =  setInterval(function() {
            light.on();
            ready.on();
            stop.on();
            setTimeout(function() {
                light.off();
                ready.off();
                stop.off();
            }, 100);
        }, 300)
    };


}
var light = new Light('light', 'green');
var ready = new Light('light', 'orange');
var stop = new Light('light', 'red');
// light.off();
var counter = 0;

var countElem = document.querySelector('.counter');

setInterval(function() {
    countElem.innerHTML = counter++
        if (counter >= 2 && counter < 10) {
            light.on();
            ready.off();
            stop.off();
        }
    else if (counter >= 10 && counter < 18) {
        light.off();
        ready.on();
        stop.off();
    } else if (counter >= 18 && counter < 23) {

        light.off();
        ready.off();
        stop.on();
    }
    else if (counter >= 23 && counter < 30) {

      light.blink();
      ready.blink();
      stop.blink();
    }
    else if (counter == 30) {
      counter = 0;
      light.off();
      ready.off();
      stop.off();
    }
}, 500)
