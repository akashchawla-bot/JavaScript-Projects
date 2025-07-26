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
