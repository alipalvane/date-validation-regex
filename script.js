
// Pattern Date
const dateRegEx = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/;
// Alternative syntax using RegExp constructor
// const regex = new RegExp('\\d{4}-(0?[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])', 'g')
const registerBtn = document.querySelector('button')
const birth = document.querySelector('#birth')

registerBtn.addEventListener('click', function(e){
    e.preventDefault();
    const dateRegResult = dateRegEx.test(birth.value);
    if(dateRegResult){
        alert("Regex is valid")
    }else{
        alert("Regex not valid")
    }
})



