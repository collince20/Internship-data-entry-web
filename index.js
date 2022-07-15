const form = document.getElementById('form');
const ID = document.getElementById('id');
const Password = document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const IDValue = ID.Value.trim();
    const PasswordValue = Password.value.trim();

    if (ID.value === '') {
        setErrorFor(ID,'Enter ID');
    } else {
       setSuccessFor(ID); 
    }
}