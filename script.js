var cTime = document.querySelector('#cTime')

setInterval(() => {
    let hr, min, sec, status
    let dateObj = new Date()

    hr = dateObj.getHours()
    status = hr >= 12 ? 'PM' : 'AM'

    hr = hr % 12 || 12

    min = dateObj.getMinutes()
    sec = dateObj.getSeconds()

    hr = hr < 10 ? `0${hr}` : hr
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    cTime.innerHTML = `${hr}:${min}:${sec} ${status}`
}, 1000)
