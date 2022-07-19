const form = document.getElementById('form');
const ID = document.getElementById('id');
const Password = document.getElementById('password');
const email = document.getElementById('email');
const SPassword = document.getElementById('Spassword');
const SPassword2 = document.getElementById('Spassword2');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const IDValue = ID.Value.trim();
    const PasswordValue = Password.value.trim();
    const emailValue = ID.Value.trim();
    const SPasswordValue = ID.Value.trim();
    const SPassword2Value = ID.Value.trim();




    if (ID.value === '') {
        setErrorFor(ID,'Enter ID');
    } else {
       setSuccessFor(ID); 
    }
}