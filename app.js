const getText = function() {
    fetch('sample.txt')
    .then((data) => {
        console.log(data.text())
    })
}

document.getElementById('get-text').addEventListener('click', getText)
