const object = {name: 'aal emraan', age:23, height: '5.8 feet', nationality: 'Bangladeshi'}
const stringified = JSON.stringify(object);
console.log(stringified);
const parsing = JSON.parse(stringified);
console.log(parsing);

function getInfo(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
function LoadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => ClickLoadUsers(data));
}

function LoadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPosts(data))
}

function ClickLoadUsers(data){
    for( x of data){
        console.log(x.name);
    }
}

function getPosts(posts){
    const ul = document.getElementById('posts');
    for(post of posts){
        const li = document.createElement('li');
        li.classList.add('li');
        li.innerHTML = `<h3>${post.id}. ${post.title}</h3>
        <p>${post.body}</p>
        `;
        ul.appendChild(li)
    }
    const stle = document.getElementById('posts');
    stle.style.listStyleType = 'none';
    stle.style.display = 'grid';
    stle.style.gridTemplateColumns = '30% 30% 30%';
    stle.style.justifyContent = 'space-between';
}