function placeZeroInHour(hour) {
    return hour < 10 ? '0' + hour : hour
}

function placeZeroInMinute(minute) {
    return minute < 10 ? '0' + minute : minute
}

function placeZeroInSecond(second) {
    return second < 10 ? '0' + second : second
}

function createClock() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let time = placeZeroInHour(hour) + ':' + placeZeroInMinute(minute) + ':' + placeZeroInSecond(second)
    document.getElementById('clock').value = time
}

setInterval(createClock, 1000)