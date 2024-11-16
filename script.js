const gifs = [
    "images/begging1.gif",
    "images/begging2.gif",
    "images/begging3.gif",
    "images/begging4.gif",
    "images/begging5.gif",
    "images/begging6.gif",
    "images/begging7.gif",
    "images/begging8.gif",
    "images/begging9.gif",
    "images/begging10.gif"
];
let gifIndex = 0;

const welcomeSection = document.querySelector('.welcome-section');
const convinceSection = document.querySelector('.convince-section');
const convinceGif = document.getElementById('convince-gif');
const convinceMessage = document.querySelector('.convince-message');


document.getElementById('yes-btn').addEventListener('click', () => {
    alert("Yay! This is my phone number- +971 5x-xxx-xxxx, please send a message! 💖");
});


document.getElementById('no-btn').addEventListener('click', () => {
    showConvinceSection();
});


document.getElementById('final-yes-btn').addEventListener('click', () => {
    alert("At last you said Yes! This is my phone number- +971 5x-xxx-xxxx, please send a message! 💕");
});


document.getElementById('convince-no-btn').addEventListener('click', () => {
    updateConvinceSection();
});


function showConvinceSection() {
    welcomeSection.classList.add('hidden');
    convinceSection.classList.remove('hidden');

    
    convinceGif.src = gifs[gifIndex];
    convinceMessage.textContent = "Are you sure? Look how much I love you! 🥺";

    
    gifIndex = (gifIndex + 1) % gifs.length;
}


function updateConvinceSection() {
    
    convinceGif.src = gifs[gifIndex];
    convinceMessage.textContent = "Please reconsider... You mean everything to me! 🥹";

    
    gifIndex = (gifIndex + 1) % gifs.length;
}

