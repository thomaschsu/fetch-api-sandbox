
document.querySelector('#get-text').addEventListener('click', getText)

document.querySelector('#get-users').addEventListener('click', getUsers)

document.querySelector('#get-posts').addEventListener('click', getPosts)

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
        let output = '<h2>Users</h2>'
        data.forEach((user) => {
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `
            document.querySelector('#output').innerHTML = output
        })
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
}