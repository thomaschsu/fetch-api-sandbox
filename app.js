const getText = function() {
    fetch('sample.txt')
    .then((res) => {
        return res.text()
    })
    .then((data) => {
        console.log(data)
    })
}

document.getElementById('get-text').addEventListener('click', getText)
