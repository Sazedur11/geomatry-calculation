function calculateRhombusArea(){
    const rhombusD1 = getRhombusD('rhombus-d1');
    const rhombusD2 = getRhombusD('rhombus-d2');
    const rhombusResult = 0.5 * rhombusD1 * rhombusD2;

    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = rhombusResult;

    
}

function getRhombusD(element){
    const rhombusInput = document.getElementById(element);
    const rhombusNum = rhombusInput.value;
    const rhombus = parseFloat(rhombusNum);
    rhombusInput.value = '';
    return rhombus;
}