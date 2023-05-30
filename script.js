let generateBtn = document.getElementById("generate");

function generateNumber(){
    let min = document.getElementById("min-input");
    let max = document.getElementById("max-input");
    let minValue = Number(min.value);
    let maxValue = Number(max.value);

    let result = document.getElementById("result");

    if(minValue > maxValue){
        result.textContent = "กรุณากรอกใหม่ !!";
    }
    else{
        let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        result.textContent = randomNumber;
        
    }

}
generateBtn.addEventListener("click", generateNumber);