function calculateEllipseArea(){
    const ellipseA = getEllipseNumber('ellipse-a');
    const ellipseB = getEllipseNumber('ellipse-b');
    const ellipseResult = 3.1416 * ellipseA * ellipseB;

    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = ellipseResult;
}

function getEllipseNumber(element){
    const ellipseInput = document.getElementById(element);
    const ellipseNum = ellipseInput.value;
    const ellipse = parseFloat(ellipseNum);
    ellipseInput.value = '';
    return(ellipse);
}