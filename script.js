function reloadClock () {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    document.getElementById("hour").style.transform = `rotate(${(360 / 12) * (hour >= 12 ? hour - 12 : hour)}deg) translateY(-40px)`;
    document.getElementById("minutes").style.transform = `rotate(${min * (360 / 60)}deg) translateY(-40px)`;
    document.getElementById("seconds").style.transform = `rotate(${sec * (360 / 60)}deg) translateY(-40px)`;
   

    setTimeout(reloadClock, 1000);
}

reloadClock ();