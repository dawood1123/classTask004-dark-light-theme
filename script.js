
    const toggleButton = document.getElementById('btn');
const body = document.body;

function changetheme() {
    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        btn.textContent = 'NIGHT';
        body.style.backgroundColor = ''
        body.style.color = ''
        document.getElementById("btn").style.backgroundColor='black'
        document.getElementById("btn").style.color='white'
    } else {
        btn.textContent = 'DAY';
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        document.getElementById("btn").style.backgroundColor='white'
        document.getElementById("btn").style.color='Black'
}
};