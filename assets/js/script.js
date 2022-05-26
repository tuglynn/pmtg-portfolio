const mainProject = document.querySelector('.main-project');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');

mainProject.addEventListener('click', () => location.href = 'https://monacoglynn.github.io/gp-mini-pet/')

mainProject.addEventListener('mouseover', () => {
    mainProject.innerHTML =
        `<h2>an online virtual pet app. Click to see more</h2>`
});
mainProject.addEventListener('mouseout', () => {
    mainProject.innerHTML = `<h2>burauza no akachan</h2>`
});

project2.addEventListener('click', () => location.href = 'https://monacoglynn.github.io/weather-tracker/')

project2.addEventListener('mouseover', () => {
    project2.innerHTML =
        `<h2>weather tracking app that saves your searched cities. Click to see more</h2>`
});
project2.addEventListener('mouseout', () => {
    project2.innerHTML = `<h2>weather app</h2>`
});

project3.addEventListener('click', () => location.href = 'https://monacoglynn.github.io/piano-quiz/index.html')

project3.addEventListener('mouseover', () => {
    project3.innerHTML =
        `<h2>challenge your knowledge with this quiz game. Click to see more</h2>`
});

project3.addEventListener('mouseout', () => {
    project3.innerHTML = `<h2>piano quiz</h2>`
});