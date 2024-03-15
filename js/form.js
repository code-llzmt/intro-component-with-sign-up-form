
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formButton = document.querySelector('.form button');


// the code its too repetitive, I think theres a better solution

formButton.addEventListener('click', () => {

    // first name
    if(firstName.value.length == 0){
        firstName.style.border = '2px solid red';
        firstName.nextElementSibling.style.display = 'block';
        firstName.parentElement.lastElementChild.style.display = 'block';
    }else{
        firstName.style.border = '2px solid green';
        firstName.nextElementSibling.style.display = 'none';
        firstName.parentElement.lastElementChild.style.display = 'none';
    }

    // last name
    if(lastName.value.length == 0){
        lastName.style.border = '2px solid red';
        lastName.nextElementSibling.style.display = 'block';
        lastName.parentElement.lastElementChild.style.display = 'block';
    }else{
        lastName.style.border = '2px solid green';
        lastName.nextElementSibling.style.display = 'none';
        lastName.parentElement.lastElementChild.style.display = 'none';
    }

    // email
    if(email.value.length == 0 || !email.value.match(regex)){
        email.style.border = '2px solid red';
        email.nextElementSibling.style.display = 'block';
        email.parentElement.lastElementChild.style.display = 'block';
    }else{
        email.style.border = '2px solid green';
        email.nextElementSibling.style.display = 'none';
        email.parentElement.lastElementChild.style.display = 'none';
    }

    // password
    if(password.value.length == 0){
        password.style.border = '2px solid red';
        password.nextElementSibling.style.display = 'block';
        password.parentElement.lastElementChild.style.display = 'block';
    }else{
        password.style.border = '2px solid green';
        password.nextElementSibling.style.display = 'none';
        password.parentElement.lastElementChild.style.display = 'none';
    }

});
