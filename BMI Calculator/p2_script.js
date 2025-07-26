console.log("Akash Chawla")

const form = document.querySelector('form')

// this usecase will give you empty 
// const height = parseint(document.querySelector('#height').value)
// const weight = parseint(document.querySelector('#weight').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseint(document.querySelector('#height').value)
    const weight = parseint(document.querySelector('#weight').value)

    
})
