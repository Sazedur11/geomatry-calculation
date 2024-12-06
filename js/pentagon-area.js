function calculatePentagonArea(){
    const pentagonPerimeter = getPentagonNumber('perimeter-area');
    const pentagonApothem = getPentagonNumber ('apothem-area');
    const pentagonResult = 0.5 * pentagonPerimeter * pentagonApothem;

    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = pentagonResult;

    getPentagonResult()
}

function getPentagonNumber(element){
    const pentagonInput = document.getElementById(element);
    const pentagonNum = pentagonInput.value;
    const pentagon = parseFloat(pentagonNum);
    pentagonInput.value = '';

    return pentagon;
}

function getPentagonResult(){
    const areaCalculation = document.getElementById('calculation-area');
    const p = document.createElement('p');
    const pentagonResultArea = document.getElementById('pentagon-result-area').innerHTML;
    p.innerHTML = pentagonResultArea;
    areaCalculation.appendChild(p)
}