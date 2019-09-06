
document.querySelector('#get-text').addEventListener('click', getText)

document.querySelector('#get-users').addEventListener('click', getUsers)

function getText () {
    fetch('sample.txt')
    .then((res) => {
        return res.text()
    })
    .then((data) => {
        document.querySelector('#output').innerHTML = data
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    })
}

function getUsers () {
    fetch('users.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
}