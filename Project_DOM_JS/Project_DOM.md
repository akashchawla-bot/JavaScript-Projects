# # Project related to DOM

## -> Project Link

https://github.com/akashchawla-bot/JavaScript-Projects

## -> For Preview

https://stackblitz.com/edit/stackblitz-starters-vgwgrp78?file=Project01%2Fp1_index.html,index.html

# Solution Code

## Project 1

```javaScript
Java Script

console.log("AKASH CHAWLA")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

```
## Project 2

```javaScript
Java Script

console.log("Akash Chawla")

const form = document.querySelector('form')

// this usecase will give you empty 
// const height = parseint(document.querySelector('#height').value)
// const weight = parseint(document.querySelector('#weight').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = "plz give a valid height"
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = "plz give a valid weight"
    }else{
        const BMI = (weight / Math.pow(height * 0.3048, 2)).toFixed(2);
        // Show result
        // result.innerHTML = `BMI: ${BMI}`
        if(BMI < 18.6){
            result.innerHTML = `BMI: ${BMI} \n Under Weight`
        }else if(BMI >= 18.6 && BMI < 24.9){
            result.innerHTML = `BMI: ${BMI} \n Normal `
        }else if(BMI > 24.9){
            result.innerHTML = `BMI: ${BMI} \n Over Weight`
        }
        }

})

```

## Project 3

```javaScript
Java Script

// const clock = document.getElementById('clock')
const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```