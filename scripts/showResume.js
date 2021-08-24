// clock
const hourPointer = document.querySelector('.hour'),
    minutePointer = document.querySelector('.minute'),
    secondPointer = document.querySelector('.second'),
    transform = getTransform();
const datePointer = document.querySelector('.date');

function updateClock() {
    var now = new Date(),
        second = now.getSeconds() * 6,
        minute = now.getMinutes() * 6 + (second / 60),
        hour = (((now.getHours() % 12) / 12) * 360) + (minute / 12);
    datePointer.innerHTML = now.getDate()
    hourPointer.style[transform] = `rotate(${hour}deg)`;
    minutePointer.style[transform] = `rotate(${minute}deg)`;
    secondPointer.style[transform] = `rotate(${second}deg)`;
}
setInterval(updateClock, 1000);


function getTransform() {
    var style = document.createElement('div').style,
        transform,
        vendor;
    if (undefined !== style[vendor = 'webkitTransform']) {
        transform = vendor;
    }
    if (undefined !== style[vendor = 'msTransform']) {
        transform = vendor;
    }
    if (undefined !== style[vendor = 'transform']) {
        transform = vendor;
    }
    return transform;
}

//rate 
let st1 = document.getElementById("star1")
let st2 = document.getElementById("star2")
let st3 = document.getElementById("star3")
let st4 = document.getElementById("star4")
let st5 = document.getElementById("star5")
let emoji = document.getElementById("emoji")

st1.onclick = function() {
    st2.style.backgroundImage = "url(../images/sb.png)"
    st3.style.backgroundImage = "url(../images/sb.png)"
    st4.style.backgroundImage = "url(../images/sb.png)"
    st5.style.backgroundImage = "url(../images/sb.png)"
    emoji.style.backgroundImage = "url(../images/1.png)"
}

st2.onclick = function() {
    st2.style.backgroundImage = "url(../images/sy.png)"
    st3.style.backgroundImage = "url(../images/sb.png)"
    st4.style.backgroundImage = "url(../images/sb.png)"
    st5.style.backgroundImage = "url(../images/sb.png)"
    emoji.style.backgroundImage = "url(../images/2.png)"
}


st3.onclick = function() {
    st2.style.backgroundImage = "url(../images/sy.png)"
    st3.style.backgroundImage = "url(../images/sy.png)"
    st4.style.backgroundImage = "url(../images/sb.png)"
    st5.style.backgroundImage = "url(../images/sb.png)"
    emoji.style.backgroundImage = "url(../images/3.png)"
}

st4.onclick = function() {
    st2.style.backgroundImage = "url(../images/sy.png)"
    st3.style.backgroundImage = "url(../images/sy.png)"
    st4.style.backgroundImage = "url(../images/sy.png)"
    st5.style.backgroundImage = "url(../images/sb.png)"
    emoji.style.backgroundImage = "url(../images/4.png)"
}

st5.onclick = function() {
    st2.style.backgroundImage = "url(../images/sy.png)"
    st3.style.backgroundImage = "url(../images/sy.png)"
    st4.style.backgroundImage = "url(../images/sy.png)"
    st5.style.backgroundImage = "url(../images/sy.png)"
    emoji.style.backgroundImage = "url(../images/5.png)"
}

//share button

const button = document.querySelector(".button")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const telegram = document.querySelector(".telegram")
const instagram = document.querySelector(".instagram")
const whatsapp = document.querySelector(".whatsapp")
const icon = document.querySelectorAll("i")
const body = document.querySelector("body")
const allElements = [button, bar1, bar2, telegram,
    instagram, whatsapp, icon[0], icon[1], icon[2], body
]
button.addEventListener("click", expand)

function expand() {
    allElements.forEach(element => element.classList.toggle("exp"))
}