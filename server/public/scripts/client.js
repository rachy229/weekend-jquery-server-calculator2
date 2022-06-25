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

    getMath();

}

//if logic based on newCalc.operator

let newCalc = 
        {
            numOne: '',
            numTwo: '',
            operator: ''
        };

let operator;

//on click functions
function handleAdd(){
    console.log('add');
    operator = '+';
}

function handleSubtract(){
    console.log('subract');
    operator = '-';
}

function handleMultiply(){
    console.log('multiply');
    operator = '*';
}

function handleDivide(){
    console.log('divide');
    operator = '/';
}

function handleEqual(){
    console.log('equal');
    newCalc = 
        {
            numOne: $('#numOne').val(),
            numTwo: $('#numTwo').val(),
            operator: operator
        };
        $.ajax({
            url: '/math',
            method: 'POST',
            data: newCalc
        }).then(function(response){
            console.log(response);
    
            getMath();
        })
}

function getMath() {
    $.ajax({
        url: '/math',
        method: 'GET'
    }).then( function(response){
        render(response);
    }).catch(function(error){
        console.log('ERROR IN GET /getMath')
    })
}

function handleClear(){
    console.log('clear');
}

function render(calc){
    $('#mathList').empty();

    for (let newCalc of calc){
        $('#mathList').append(`<li> ${newCalc.numOne} ${newCalc.operator} ${newCalc.numTwo} </li>`);
    }

    $('#numOne').val('');
    $('#numTwo').val('');
}