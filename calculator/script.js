const firstInput = document.querySelector("[data-firstInput]");
const secondInput = document.querySelector("[data-secondInput]");

const addition = document.querySelector("[data-inputadd]");
const subtraction = document.querySelector("[data-inputsub]");
const multiplication =document.querySelector("[data-inputmul]");
const division = document.querySelector("[data-inputdiv]");
const output = document.querySelector("[data-output]");

const errorMsg = document.querySelector("[data-errorMsg]");
let inputOne;
let inputTwo;

function add(){
    console.log("clicked addition");
    let c = inputOne+inputTwo;
    output.value=c;
    console.log("done addition");
    if(isNaN(output.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }

}



function sub(){
    console.log("clicked subtraction");
    let c = inputOne-inputTwo;
    output.value=c;
    console.log("done subtraction");
    if(isNaN(output.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }
}

function mul(){
    console.log("clicked multiplication");
    let c = inputOne*inputTwo;
    output.value=c;
    console.log("done multiplication");
    if(isNaN(output.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }
}

function div(){
    console.log("clicked division");
    let c = inputOne/inputTwo;
    output.value=c;
    console.log("done division");
    if(isNaN(output.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }
}

firstInput.addEventListener("input",() => {
    if(isNaN(firstInput.value)){
        errorMsg.style.opacity="1";
    }else{
        errorMsg.style.opacity="0";
        inputOne = parseInt(firstInput.value);
    }
    
});

secondInput.addEventListener("input",() => {
    if(isNaN(secondInput.value)){
        errorMsg.style.opacity="1";
    }else{
        errorMsg.style.opacity="0";
    inputTwo = parseInt(secondInput.value);
    }
});


addition.addEventListener("click",add);
subtraction.addEventListener("click",sub);
multiplication.addEventListener("click",mul);
division.addEventListener("click",div);
