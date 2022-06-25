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
    const newCalc = 
        {
            numOne: $('#numOne').val(),
            numTwo: $('#numTwo').val()
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