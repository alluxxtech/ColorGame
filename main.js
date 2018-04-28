window.onload = () => {
    // const arrColors = [
    //     "rgb(255, 0, 0)",
    //     "rgb(255, 255, 0)",
    //     "rgb(0, 255, 0)",
    //     "rgb(0, 255, 255)",
    //     "rgb(0, 0, 255)",
    //     "rgb(255, 0, 255)",
    // ]
    let arrColors = generateRandonColors(6);

    let squares = document.querySelectorAll('.square');
    let pickedColor = pickColor();
    let colorDisplay = document.getElementById('colorDisplay');
    let messageDisplay = document.getElementById('message');
    let h1 = document.querySelector('h1');
    let resetButton = document.querySelector("#reset");

    resetButton.addEventListener('click', ()=>{
        arrColors = generateRandonColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < squares.length; i++){
            squares[i].style.background = arrColors[i];
        }
        h1.style.background = '#232323';
    })

    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = arrColors[i];
        squares[i].addEventListener('click', function(){
            let clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
            } 
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }

    function changeColor(color){
        for(let i = 0; i < squares.length; i++){
            squares[i].style.background = color;
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