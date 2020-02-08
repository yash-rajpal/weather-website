console.log('Client side javascript file is loaded!')

//fetching json data from a url and parsing it and showing the result
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//     response.json().then((data) => {
//         if(data.error)
//         {
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()         //it helps in stoping the page from refreshing whenever button is pressed

    const location = search.value

    //this is basically used for editing the text which matches the id for messageOne
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
    // console.log(location)
    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
    response.json().then((data) => {
        if(data.error)
        {
            // console.log(data.error)
            messageOne.textContent = data.error
        }
        else{
            // console.log(data.location)
            // console.log(data.forecast)
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})