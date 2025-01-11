// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Dynamically generate project cards
const projects = [
    { title: 'Project 1', description: 'This is a description of project 1.' },
    { title: 'Project 2', description: 'This is a description of project 2.' },
    { title: 'Project 3', description: 'This is a description of project 3.' },
];

const projectContainer = document.getElementById('project-cards');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectContainer.appendChild(card);
});
