const firstInput = document.querySelector("[data-firstInput]");
const secondInput = document.querySelector("[data-secondInput]");

const addition = document.querySelector("[data-inputadd]");
const subtraction = document.querySelector("[data-inputsub]");
const multiplication =document.querySelector("[data-inputmul]");
const division = document.querySelector("[data-inputdiv]");
const output = document.querySelector("[data-output]");

const errorMsg = document.querySelector("[data-errorMsg]");

const labels1 = document.querySelector("[data-labels1]");
const labels2 = document.querySelector("[data-labels2]");
const labels3 = document.querySelector("[data-labels3]");
const labels4 = document.querySelector("[data-labels4]");
let inputOne;
let inputTwo;

function add(){
    console.log("clicked addition");
    let c = inputOne+inputTwo;
    addition.value=c;
    labels1.style.opacity = "1";
    console.log("done addition");
    if(isNaN(addition.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }

}



function sub(){
    console.log("clicked subtraction");
    let c = inputOne-inputTwo;
    subtraction.value=c;
    labels2.style.opacity = "1";
    console.log("done subtraction");
    if(isNaN(subtraction.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }
}

function mul(){
    console.log("clicked multiplication");
    let c = inputOne*inputTwo;
    multiplication.value=c;
    labels3.style.opacity = "1";
    console.log("done multiplication");
    if(isNaN(multiplication.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }
}

function div(){
    console.log("clicked division");
    let c = inputOne/inputTwo;
    division.value=c;
    labels4.style.opacity = "1";
    console.log("done division");
    if(isNaN(division.value)){
        errorMsg.style.opacity = "1";
        }
        else{
            errorMsg.style.opacity = "0";
        }
}

firstInput.addEventListener("blur",() => {
    if(isNaN(firstInput.value)){
        errorMsg.style.opacity="1";
    }else{
        errorMsg.style.opacity="0";
        inputOne = parseInt(firstInput.value);
    }
    
});

secondInput.addEventListener("blur",() => {
    if(isNaN(secondInput.value)){
        errorMsg.style.opacity="1";
    }else{
        errorMsg.style.opacity="0";
    inputTwo = parseInt(secondInput.value);
    add();
    sub();
    mul();
    div();
    }
});



