const rendomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('#guesses')
const guessLeft = document.querySelector('#lastResult')
const lowOrHigh = document.querySelector('#lowOrHigh')
const resultPars = document.querySelector('#resultPars')

const p = document.createElement('p')