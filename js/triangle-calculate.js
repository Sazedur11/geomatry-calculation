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
}