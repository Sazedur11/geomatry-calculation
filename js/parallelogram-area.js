function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseNum = parallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseNum);
    
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightNum = parallelogramHeightInput.value;
    const parallelogramHeight = parseFloat(parallelogramHeightNum);

    const parallelogramResult = parallelogramBase * parallelogramHeight;

    const pResult = document.getElementById('p-result');
    pResult.innerText = parallelogramResult;

    parallelogramBaseInput.value = '';
    parallelogramHeightInput.value = '';

    //show the result in calculation area
    const areaCalculation = document.getElementById('calculation-area');
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.innerHTML = `<span>cm<sup>2</sup></span>`;
    p.innerHTML = 'Parallelogram: ' + parallelogramResult + span.innerHTML;
    areaCalculation.appendChild(p)
}