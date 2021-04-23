const MY_ELEMENT = document.getElementById("myElement").style;

let applyWidth = () => {
    let elementValue = document.getElementById("rangeWidth").value;
    MY_ELEMENT.width = elementValue + "px";
}
let applyHeight = () => {
    let elementValue = document.getElementById("rangeHeight").value;
    MY_ELEMENT.height = elementValue + "px";
}

let applyBackgroundColor = () => {
    let elementRedValue = document.getElementById("rangeBackgroundRed").value;
    let elementGreenValue = document.getElementById("rangeBackgroundGreen").value;
    let elementBlueValue = document.getElementById("rangeBackgroundBlue").value;
    MY_ELEMENT.backgroundColor = `rgb(${elementRedValue},${elementGreenValue},${elementBlueValue})`;
}

let applyParams = () => {
    applyWidth();
    applyHeight();
    applyBackgroundColor();
}