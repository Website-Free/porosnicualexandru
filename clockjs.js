setInterval(setClock, 1000)


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60  
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}  

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()


const dataOra = document.querySelector('#dataOra');

function ora(){
    let currentDate = new Date();

    let ziua = ['Sunday, Relaxation', 'Monday, Difficult', 'Tuesday, Hard', 'Wednesday, Bored ', 'Thursday, Nearly Weekend', 'Friday, Movie Night', 'Saturday, Party'];                
    dataOra.innerHTML = ziua[currentDate.getDay()];

    dataOra.innerHTML += ' --- ' + currentDate.getDate() + '.'
                    + (currentDate.getMonth()+1) + '.'
                    + currentDate.getFullYear();

    let secunde = currentDate.getSeconds();
    if(secunde<10) secunde = '0'+secunde; 
 
}
let interval = setInterval(ora, 1000);