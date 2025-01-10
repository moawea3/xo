// Dynamically generate project cards
const projects = [
    { title: "Project 1", description: "This is the first project." },
    { title: "Project 2", description: "This is the second project." },
    { title: "Project 3", description: "This is the third project." }
  ];
  
  const projectContainer = document.getElementById('project-container');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
  
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
  
    projectContainer.appendChild(projectCard);
  });
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
  });
  