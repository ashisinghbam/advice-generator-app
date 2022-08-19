const getId = document.querySelector('#getId')
const getAdvice = document.querySelector('.getAdvice')
const diceBtn = document.querySelector('.dice-icon')
const imgIcon = document.querySelector('.dice-icon img')

function fetchData() {
  fetch('https://api.adviceslip.com/advice')
    .then(function (response) {
      return response.json()
    })
    .then(function (receivedData) {
      displayData(receivedData.slip)
      return receivedData.slip
    })
}


diceBtn.addEventListener('click', fetchData)
diceBtn.click()

function displayData(getdata) {
  getId.innerText = `ADVICE #${getdata.id}`
  getAdvice.innerText = `“${getdata.advice}”`
}

