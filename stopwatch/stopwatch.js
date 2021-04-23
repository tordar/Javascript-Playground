function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running) {
            throw new Error("Timer is already on")
        }
        running = true;
        startTime = new Date();
        return duration
    };
    this.stop = function () {
        if (!running) {
            throw new Error("Timer is already stopped")
        }
        running = false;
        endTime = new Date;
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
        console.log(duration)
        return duration
    }

    this.reset = function () {
        if (duration === 0) {
            throw new Error("Timer is already at zero")
        }
        startTime = null
        endTime = null
        duration = 0;
        running = false
    }

    this.getEndtime = function () {
        return endTime
    }
}

const watch = new Stopwatch()

let stopwatch = document.querySelector('#stopwatch')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let why = document.querySelector('#why')

why.addEventListener('click', function (e) {
    let point = document.querySelector('#point')
    if (point.style.display === "none") {
        point.style.display = "block"
    } else {
        point.style.display = "none"
    }
})

start.addEventListener('click', function (e) {
    stopwatch.innerHTML = watch.start()
})

stop.addEventListener('click', function (e) {
    stopwatch.innerHTML = watch.stop()
})

reset.addEventListener('click', function (e) {
    stopwatch.innerHTML = watch.reset()
})