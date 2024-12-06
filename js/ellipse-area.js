function calculateEllipseArea(){
    const ellipseA = getEllipseNumber('ellipse-a');
    const ellipseB = getEllipseNumber('ellipse-b');
    const ellipseResult = 3.1416 * ellipseA * ellipseB;

    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = ellipseResult;

    getEllipseResult()
}

function getEllipseNumber(element){
    const ellipseInput = document.getElementById(element);
    const ellipseNum = ellipseInput.value;
    const ellipse = parseFloat(ellipseNum);
    ellipseInput.value = '';
    return(ellipse);
}

function getEllipseResult(){
    const areaCalculation = document.getElementById('calculation-area');
    const p = document.createElement('p');
    const ellipseResultArea = document.getElementById('ellipse-result-area').innerHTML;
    p.innerHTML = ellipseResultArea;
    areaCalculation.appendChild(p);
}