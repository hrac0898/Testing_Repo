console.log('Hello World');

const myName = "Harold Ray Castro";
const h1 = document.querySelector(".heading-primary");
console.log(myName);

//  h1.textContent= myName;


h1.addEventListener('click', function () {
    h1.textContent = myName;
});

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEL.textContent = currentYear