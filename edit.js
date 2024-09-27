function rainbowText() {
    const textElement = document.querySelector('h1');
    const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
    let intervalId;

    

    function changeColor() {
        textElement.textContent = textElement.textContent.replace('RENAISSANCE', 'OPULENCE');
        let colorIndex = 0;
        intervalId = setInterval(() => {
            textElement.style.color = rainbowColors[colorIndex];
            colorIndex = (colorIndex + 1) % rainbowColors.length;
        }, 500);
    }

    textElement.addEventListener('mouseover', changeColor);
    textElement.addEventListener('mouseout', () => {
        clearInterval(intervalId);
        textElement.style.color = '#00FF00';
        textElement.textContent = textElement.textContent.replace('OPULENCE', 'RENAISSANCE');
    });
}

function backgroundImageSwitching() {
    const bodyElement = document.body;
    const imagePaths = [
        'beyonce-renaissance-tour-gettyimages-1526890868-64c7db519b3e4.jpg',
        '20230628_RWT_Warsaw_White__W1_7848.jpg.webp',
        'beyonce-tour-100323-22419fdd92974d1f963c4d2373ef7d7b.jpg'
    ];
    let imageIndex = 0;

    function changeBackground() {
        bodyElement.style.backgroundImage = `url('${imagePaths[imageIndex]}')`;
        imageIndex = (imageIndex + 1) % imagePaths.length;
    }

    setInterval(changeBackground, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    rainbowText();
    backgroundImageSwitching();
});
