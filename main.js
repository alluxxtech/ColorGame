window.onload = () => {
    // const arrColors = [
    //     "rgb(255, 0, 0)",
    //     "rgb(255, 255, 0)",
    //     "rgb(0, 255, 0)",
    //     "rgb(0, 255, 255)",
    //     "rgb(0, 0, 255)",
    //     "rgb(255, 0, 255)",
    // ]
    let numSquares = 6;
    // hello
    let arrColors = [];
    let pickedColor;
    let squares = document.querySelectorAll('.square');
    let colorDisplay = document.getElementById('colorDisplay');
    let messageDisplay = document.getElementById('message');
    let h1 = document.querySelector('h1');
    let resetButton = document.querySelector("#reset");
    let modeButtons = document.querySelectorAll(".mode");

    init();

    function init(){
        setupModeButtons();
        setupSquares();
        reset();
    }

    function setupModeButtons(){
        for (let i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener('click', function () {
                modeButtons[0].classList.remove('selected');
                modeButtons[1].classList.remove('selected');
                this.classList.add('selected');
                this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
                reset();
            });
        }
    }

    function setupSquares(){
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', function () {
                let clickedColor = this.style.background;
                if (clickedColor === pickedColor) {
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
                    changeColor(clickedColor);
                    h1.style.background = clickedColor;
                } else {
                    this.style.background = "#232323";
                    messageDisplay.textContent = "Try again";
                }
            })
        }
    }
    
    function reset(){
        arrColors = generateRandonColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";
        for (let i = 0; i < squares.length; i++) {
            if(arrColors[i]){
                squares[i].style.display = 'block';
                squares[i].style.background = arrColors[i];
            }
            else{
                squares[i].style.background = 'none';
            }
        }
        h1.style.background = 'steelblue';
    }

    resetButton.addEventListener('click', function(){
        reset();
    })
    //try commit

    function changeColor(color){
        for (let i = 0; i < squares.length; i++) {
            if (arrColors[i]) {                
                squares[i].style.background = color;
            }
        }    
    }

    function pickColor(){
        let random = Math.floor(Math.random() * arrColors.length);
        return arrColors[random];
    }

    function generateRandonColors(num){
        let arr = [];
        for(let i = 0; i < num; i++){
            arr.push(randomColor())
        }
        return arr;
    }
    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
}