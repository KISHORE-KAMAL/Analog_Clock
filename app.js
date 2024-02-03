// ? hours
// 12 hour = 360deg                   
// 1 hour = 360/12 = 30deg                     // 60min = 30deg
// h hours = 30*h + m/2                        // 1min = 60/30 = 1/2 deg   // m min = (1/2)*m = m/2  
                        
// ? minutes   
// 60 min = 360deg
// 1min = 360/60 = 6deg
// m min = 6*m

// ? seconds
// 60 sec = 360deg
// 1sec = 360/60 = 6deg
// s secs = 6*s

let hr = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

function displayTime()
{
    let date = new Date();

    // Getting hour min secs from date method
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotation}deg)`
    sec.style.transform = `rotate(${sRotation}deg)`
}
setInterval(displayTime,1000);