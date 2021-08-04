// counter
const timer = document.getElementById('counter');
let currentCount = parseInt(timer.innerText, 10);
let autoIncrement = setInterval(runTimer, 1000);
let play = true;
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');

function runTimer(){
    if (play) {
        plusCount();
    }
}

function plusCount(){
    currentCount += 1;
    timer.innerText = currentCount;
}

function minusCount(){
    currentCount -= 1;
    timer.innerText = currentCount;
}

minusButton.addEventListener('click', minusCount);
plusButton.addEventListener('click', plusCount);
pauseButton.addEventListener('click', pauseOrResume);

function pauseOrResume(){
    if (play === true) {
        play = false;
        pauseButton.innerText = "resume";
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
    } else if (play === false) {
        play = true;
        pauseButton.innerText = "pause";
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
    }
}

// like
const likes = document.querySelector('ul.likes');
let numberOfLikes = {};

heartButton.addEventListener('click', addLike);

function addLike(){
    if (numberOfLikes[currentCount]) {
        numberOfLikes[currentCount] += 1;
    } else {
        numberOfLikes[currentCount] = 1;
    }
    likes.innerHTML = "";
    for (let i = 0; i < Object.keys(numberOfLikes).length; i++) {
        if (numberOfLikes[Object.keys(numberOfLikes)[i]] == 1) {
            likes.innerHTML += `<li>${Object.keys(numberOfLikes)[i]} has been liked ${numberOfLikes[Object.keys(numberOfLikes)[i]]} time</li>`;
        } else {
            likes.innerHTML += `<li>${Object.keys(numberOfLikes)[i]} has been liked ${numberOfLikes[Object.keys(numberOfLikes)[i]]} times</li>`;
        }
    }
}

// comments
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('list');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const p = document.createElement("p");
    const input = document.getElementById('comment-input');
    p.textContent = input.value;
    commentList.append(p);

    e.target.reset();
});
