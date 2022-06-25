$(document).ready(onReady);
console.log('linked');


function onReady() {

    //click listeners
    $('#add').on('click', handleAdd);
    $('#subtract').on('click', handleSubtract);
    $('#multiply').on('click', handleMultiply);
    $('#divide').on('click', handleDivide);
    $('#equal').on('click', handleEqual);
    $('#clear').on('click', handleClear);

}

let numOne = $('#numOne').val();
let numTwo = $('#numTwo').val();
let newCalc;


//on click functions
function handleAdd(){
    console.log('add');
}

function handleSubtract(){
    console.log('subract');
}

function handleMultiply(){
    console.log('multiply');
}

function handleDivide(){
    console.log('divide');
}

function handleEqual(){
    console.log('equal');
    newCalc = 
        {
            numOne: $('#numOne').val(),
            numTwo: $('#numTwo').val()
        }
        console.log(newCalc);
        return newCalc
}

function handleClear(){
    console.log('clear');
}