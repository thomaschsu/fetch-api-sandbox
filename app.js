
document.querySelector('#get-text').addEventListener('click', getText)

document.querySelector('#get-users').addEventListener('click', getUsers)

document.querySelector('#get-posts').addEventListener('click', getPosts)

document.querySelector('#add-post').addEventListener('click', addPost)

function getText() {
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

function getUsers() {
    fetch('users.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let output = '<h2 class="mb-4">Users</h2>'
            data.forEach((user) => {
                output += `
            <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
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
            let output = '<h2 class="mb-4>Posts</h2>'
            data.forEach((post) => {
                output += `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>Name: ${post.body}</p>
            </div>
            `
                document.querySelector('#output').innerHTML = output
            })
        })
}

function addPost(e) {
    e.preventDefault()
    let title = document.querySelector('#title').value
    let body = document.querySelector('#body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'Accept': 'applications/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then((res) => {
        res.json()
    })
    .then((data) => {
        console.log(data)
    })
}