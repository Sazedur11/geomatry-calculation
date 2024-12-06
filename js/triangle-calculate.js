function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseNum = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseNum);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightNum = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightNum);

    const result = 0.5 * triangleBase * triangleHeight;

    const triangleAreaSpan = document.getElementById('area');
    triangleAreaSpan.innerText = result;

    triangleBaseInput.value = '';
    triangleHeightInput.value = '';

    //Show the result in Calculation area
    const areaCalculation = document.getElementById('calculation-area');
    const p = document.createElement('p');
    const triangleResultArea = document.getElementById('triangle-result-area').innerHTML;
    p.innerHTML =triangleResultArea;
    areaCalculation.appendChild(p);

}
