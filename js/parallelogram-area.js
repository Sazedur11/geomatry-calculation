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
}