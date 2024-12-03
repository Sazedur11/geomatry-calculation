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
    rectangleLengthInput.value = ''
}