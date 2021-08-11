const deg = 6;
let session = 'AM';
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const MnColor = document.getElementById('MnColor');
const btnColor = document.getElementById('btnColor');
const sessionShow = document.getElementById('sessionShow');

window.onload = () => {
    if(typeof(localStorage.getItem('color')) == 'string') document.getElementsByTagName('body')[0].style.setProperty('--colorBG', `${localStorage.getItem('color')}`);
}

function changeBackgroundColorMinutes() {
    if(MnColor.value == '') return alert('Put a color (ex.: #00ff44)');

    const color = MnColor.value.replace(' ', '');

    document.getElementsByTagName('body')[0].style.setProperty('--colorBG', `${color}`);

    localStorage.setItem('color', color);
}

btnColor.addEventListener('click', () => {
    changeBackgroundColorMinutes();
});

document.addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        changeBackgroundColorMinutes();
    }
    else return;
});

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    if(hh >= 12) session = 'PM'
    else session = 'AM'

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    sessionShow.innerText = session;
}, 1000);