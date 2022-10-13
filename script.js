window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let upSeconds = document.getElementById("seconds")
    let upTens = document.getElementById("tens")
    let start = document.getElementById("start")
    let pause = document.getElementById("pause")
    let reset = document.getElementById("reset")
    let Interval

    start.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10)
    }
    pause.onclick = function () {
        clearInterval(Interval)
    }
    reset.onclick = function () {
        clearInterval(Interval)
        seconds = "00"
        tens = "00"
        upSeconds.innerHTML = tens
        upTens.innerHTML = seconds
    }
    function startTimer() {
        tens++

        if (tens <= 9) {
            upTens.innerHTML = "0" + tens
        }


        if (tens > 9) {
            upTens.innerHTML = tens
        }
        if (tens > 99) {
            seconds++
            upSeconds.innerHTML = "0" + seconds
            tens = 0
            upTens.innerHTML = "0" + tens
        }
        if(seconds > 9){
            upSeconds.innerHTML= seconds
        }
    }

}





