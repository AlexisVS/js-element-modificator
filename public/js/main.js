const MY_ELEMENT = document.getElementById("myElement").style;

let applyWidth = () => {
    let elementValue = document.getElementById("rangeWidth").value;
    return MY_ELEMENT.width = elementValue + "px";
}
let applyHeight = () => {
    let elementValue = document.getElementById("rangeHeight").value;
    return MY_ELEMENT.height = elementValue + "px";
}

let applyBackgroundColor = () => {
    let elementRedValue = document.getElementById("rangeBackgroundRed").value;
    let elementGreenValue = document.getElementById("rangeBackgroundGreen").value;
    let elementBlueValue = document.getElementById("rangeBackgroundBlue").value;
    return MY_ELEMENT.backgroundColor = `rgb(${elementRedValue},${elementGreenValue},${elementBlueValue})`;
}
let applyForegroundColor = () => {
    let elementRedValue = document.getElementById("rangeForegroundRed").value;
    let elementGreenValue = document.getElementById("rangeForegroundGreen").value;
    let elementBlueValue = document.getElementById("rangeForegroundBlue").value;
    return document.body.style.backgroundColor = `rgb(${elementRedValue}, ${elementGreenValue}, ${elementBlueValue})`;
}

let applyBorderRadius = () => {
    let elementRadius = document.getElementById('rangeBorderRadius').value;
    MY_ELEMENT.borderTopLeftRadius = `${elementRadius}px`
    MY_ELEMENT.borderTopRightRadius = `${elementRadius}px`
    MY_ELEMENT.borderBottomLeftRadius = `${elementRadius}px`
    MY_ELEMENT.borderBottomRightRadius = `${elementRadius}px`
}

let applyParams = () => {
    applyWidth();
    applyHeight();
    applyBackgroundColor();
    applyForegroundColor();
    applyBorderRadius();
}

document.querySelector('nav').addEventListener('onchange', e => {
    return e.currentTarget.applyParams()
})