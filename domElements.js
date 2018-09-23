const categories = document.getElementsByClassName('category')
const statsGUI = document.querySelector('#statistics');
const report = document.querySelector('#report');
const home = document.querySelector('#home');
const reportSub = document.querySelector('#reportSub');
const process = document.querySelector('#process');

/* functions for the button */
function clear() {
    for(var i=0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
}

function ToReport() {
    clear();
    report.style.display = 'block';
}

function ToHome() {
    clear();
    home.style.display = 'block';
}

function ToStat() {
    clear();
    statsGUI.style.display = 'block';
}

function AddEvent() {
    console.log(addingEvent);
    addingEvent = true;
    console.log(addingEvent);
}

function ToReportSub() {
    clear();
    report.style.display = 'block';
    process.style.display = 'none';
    reportSub.style.display = 'block';
}

function Cancel() {
    allMarkers[allMarkers.length-1].setMap(null);
    allMarkers.pop();
    ToHome();
}