function calculateRectanglearea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthNum = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthNum);
    
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthNum = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthNum);
    
    const result = rectangleWidth * rectangleLength;

    const rectangleAreaResult = document.getElementById('rectangle-area');
    rectangleAreaResult.innerText = result;

    rectangleWidthInput.value = '';
    rectangleLengthInput.value = '';

    //show the result in calculation area
    const areaCalculation = document.getElementById('calculation-area');
    const p = document.createElement('p');
    const ractangleResult = document.getElementById('ractangle-result').innerHTML;
    p.innerHTML = ractangleResult;
    // const span = document.createElement('span');
    // span.innerHTML = `<span>cm<sup>2</sup></span>`;
    // p.innerHTML = 'Ractangle: ' + result + span.innerHTML;
    areaCalculation.appendChild(p)
}