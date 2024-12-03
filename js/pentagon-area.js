function calculatePentagonArea(){
    const pentagonPerimeter = getPentagonNumber('perimeter-area');
    const pentagonApothem = getPentagonNumber ('apothem-area');
    const pentagonResult = 0.5 * pentagonPerimeter * pentagonApothem;

    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = pentagonResult;
}

function getPentagonNumber(element){
    const pentagonInput = document.getElementById(element);
    const pentagonNum = pentagonInput.value;
    const pentagon = parseFloat(pentagonNum);
    pentagonInput.value = '';

    return pentagon;
}