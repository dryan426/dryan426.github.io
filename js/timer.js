const globalIntervals = {};
const camps = ["topKrugs", "topRed", "topRaptors", "topWolves", "topBlue", "topGromp", "scuttler", "botGromp", "botBlue", "botWolves", "botRaptors", "botRed", "botKrugs"];

function main(camp) {
    if (globalIntervals[camp]) clearInterval(globalIntervals[camp]);
    const countdownTo = new Date().getTime() + (/(blue|red)/i.test(camp) ? 300000 : 150000);
    //Modfied: add "active" class to toggled button
    document.getElementsByName(camp)[0].classList.add("active")

    globalIntervals[camp] = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownTo - now;
        const minutes = Math.floor(distance / 60000);
        const seconds = Math.floor((distance / 1000) - 60 * minutes);
        const boxToChange = document.getElementsByName(camp)[0]
        boxToChange.style.backgroundColor = "grey";
        const timerToChange = document.getElementsByName(camp + "Timer")[0]
        timerToChange.innerHTML = minutes + ":" + (seconds >= 10 ? seconds : `0${seconds}`);
        if (minutes == 0 && seconds <= 30) {
            boxToChange.style.backgroundColor = "#ffef38";
            boxToChange.style.animationDuration = 1;
        }
        if (minutes == 0 && seconds <= 10) {
            boxToChange.style.backgroundColor = "red";
            boxToChange.style.animationDuration = .5;
        }
        if (minutes == 0 && seconds == 0 || distance < 0) {
            boxToChange.style.backgroundColor = "green";
            clearInterval(globalIntervals[camp]);
            //Modified: remove "active" class from finished timer
            document.getElementsByName(camp)[0].classList.remove("active");
        }
    }, 50)
			}