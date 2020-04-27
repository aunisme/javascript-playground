// String

// let email = 'aun@aunisme.com';

// let result = email.lastIndexOf('m');

// let result = email.slice(1, 5);

// let otherResult = email.substr(1, 5);

// let result = email.replace('aun', 'admin');


// console.log(email, result);

// Numbers

//circle
// let rad = 15;
// const pi = 3.14;

// let circle = pi * rad ** 2;

//rectangle
// let p = 50;
// let l = 20;

// let rect = p * l;

//triangle
// let a = 7;
// let b = 12;

// let triangle = a * b / 2;

//operations order
// let x = 3;
// let y = 5;
// let z = 4;

// let fx = (x * y ** 2) - y + (z * x);

//shorthand operator
// let likes = 10;

// likes++;
// likes--;

// likes += 10;
// likes -= 4;
// likes *= 3;
// likes /= 3;
// likes %= 2;

// const result = [circle, rect, triangle, fx, likes];

// console.log(result);

// More String

// const title = 'How to ghosting your significant other';
// const author = 'Muhammad Syahrul';
// const sold = 40;

//concatenations
// let result = 'The book called ' + title + ' authored by ' + author + ' has sold ' + sold + ' exemplars.'

// template string
// let result = `The book called ${title} authored by ${author} has sold ${sold} exemplars.`
// console.log(result);


// Array

// let sins = ['pride', 'wrath', 'greed', 'lust', 'envy', 'glutony', 'sloth'];

// console.log(sins.length);

// Array Methods
// let result = sins.join(',');
// let result = sins.indexOf('wrath');\
// let result = sins.concat(['ed', 'al']);
// let result = sins.push('ed');
// let result = sins.pop();

// console.log(result);
// console.log(sins);


// Boolean & Comparison
// console.log(true, false, 'true', 'false');

// Method can return boolean
// let email = 'aun@aunisme.com'
// let admin = ['aun', 'nur', 'septian'];


// let result = email.includes('aun');
// let result = admin.includes('nur');

// console.log(result);

// comparison operators
// let age = 22;

// console.log(age == 24);
// console.log(age != 22);
// console.log(age < 23);
// console.log(age > 17);
// console.log(age >= 22);
// console.log(age <= 22);

// Function

// declarative
// function greet(){
//     console.log('hello');
// }

// greet();

// expresive
// const speak = function(){
//     console.log('Sampurasun');
// };

// speak();

// Arrow Function

// const greet = () => 'hello';

// let result = greet();
// console.log(result);

// const bill = (product, tax) => {
//     let total = 0;
//     for(let i = 0; i < product.length; i++){
//         total += product[i] + product[i] * tax;
//     }
//     return total;
// }
// let price = bill([1,2,3,4], .3);
// console.log(price);

// Method
 

// Callback & forEach


// let sins = ['pride', 'wrath', 'greed', 'lust', 'envy', 'glutony', 'sloth'];

// regular
// sins.forEach(function(sin) {
//     console.log(sin);
// })

// const print = (sin, index) => {
//     console.log(index, sin);
// }

// arrow

// sins.forEach((sin, index) => {
//     console.log(index, sin);
// })
// sins.forEach(print);

// callback actions
// const ul = document.querySelector('.sins');

// const sins = ['pride', 'wrath', 'greed', 'lust', 'envy', 'glutony', 'sloth'];


// let html = ``;

// sins.forEach(sin => {
//     html += `<li style="color: blue">${sin}</li>`;
// });

// console.log(html)
// ul.innerHTML = html;


// Objects Literal
// - have properties
// - have thing it can do -> a method

// let user = {
//     name: 'Ed',
//     age: 19,
//     email: 'edward.elric@mail.com',
//     location: 'amestris',
//     job: 'Alchemist',
//     transmutation: function(){
//         console.log('Human Transmutation');
//     }
// };

// // console.log(user.transmutation);
// user.transmutation();


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
const usernamePattern = /^[a-z]{8,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // console.log(form.username.value);
    // console.log(username.value);
    // username.value = '';

    //validation
    const username = form.username.value;
    


    // if(usernamPattern.test(username)){
    //     feedback.textContent = 'username is valid';
    //     form.username.value = '';
    // } else {
    //     feedback.textContent = 'username must contain letters only and betwee 8 to 12 characters';
    // }

});

form.username.addEventListener('keyup', e => {
        // console.log(e.target.value, form.username.value);
        // form.username.value = '';

        if(usernamePattern.test(e.target.value)){
            console.log('passed');
        } else {
            console.log('failed');
        }

});