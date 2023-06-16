import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const formEmail = document.querySelector("input");
const formMessage = document.querySelector("textarea");

feedbackForm.addEventListener('input', throttle(function () {
    const objValues = {};
    objValues.email = formEmail.value;
    objValues.message = formMessage.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(objValues));
    localStorage.getItem('feedback-form-state'); 
}, 500));

const elementsLocalStorage = localStorage.getItem("feedback-form-state");

if (elementsLocalStorage) {
    formEmail.value = JSON.parse(elementsLocalStorage).email;
    formMessage.value = JSON.parse(elementsLocalStorage).message;
} else{
    formEmail.value = "";
    formMessage.value = "";
}

feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const objValues = {};
    objValues.email = formEmail.value;
    objValues.message = formMessage.value;
    console.log(objValues);
    localStorage.clear();
    formEmail.value = "";
    formMessage.value = "";
})

