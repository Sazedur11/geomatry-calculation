function calculateRhombusArea(){
    const rhombusD1 = getRhombusD('rhombus-d1');
    const rhombusD2 = getRhombusD('rhombus-d2');
    const rhombusResult = 0.5 * rhombusD1 * rhombusD2;

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = rhombusResult;

    getRhombusResult()
    
}

function getRhombusD(element){
    const rhombusInput = document.getElementById(element);
    const rhombusNum = rhombusInput.value;
    const rhombus = parseFloat(rhombusNum);
    rhombusInput.value = '';
    return rhombus;
}

function getRhombusResult(){
    const areaCalculation = document.getElementById('calculation-area');
    const p = document.createElement('p');
    const rhombusResult = document.getElementById('rhombus-result').innerHTML;
    p.innerHTML = rhombusResult;
    areaCalculation.appendChild(p)

}