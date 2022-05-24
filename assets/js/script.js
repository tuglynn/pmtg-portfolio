const mainProject = document.querySelector('.main-project');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');


mainProject.addEventListener('click', () => {
    mainProject.innerHTML =
        `<h2>an online virtual pet app
     <a href="https://monacoglynn.github.io/gp-mini-pet/">Click to see more</a></h2>`
});
project2.addEventListener('click', () => {
    project2.innerHTML =
        `<h2>weather tracking app that saves your searched cities
    <a href="https://monacoglynn.github.io/weather-tracker/">Click to see more</a></h2>`
})

project3.addEventListener('click', () => {
    project3.innerHTML =
        `<h2>challenge your knowledge with this quiz game
    <a href="https://monacoglynn.github.io/piano-quiz/index.html">Click to see more</a></h2>`
})


//when you click on the picture of the project, a brief description is displayed and a link to the page is displayed as well.