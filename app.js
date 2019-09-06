const getText = function() {
    fetch('samples.txt')
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

document.getElementById('get-text').addEventListener('click', getText)
