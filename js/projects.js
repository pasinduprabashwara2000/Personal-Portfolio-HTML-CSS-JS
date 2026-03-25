const GITHUB_SVG = `
  <svg class="icon github" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>`;

const projects = [
    {
        title: "Library Management System",
        description: "A CLI-based system for managing library books and members.",
        github: "https://github.com/pasinduprabashwara2000/Library-Management-System-JAVA-CLI.git",
        tags: [{ label: "Java CLI", cls: "badge-a" }]
    },
    {
        title: "Electricity Management System",
        description: "Desktop app for managing electricity billing and usage.",
        github: "https://github.com/pasinduprabashwara2000/Electricity-Management-System-MVC-JAVA-Swing.git",
        tags: [
            { label: "Java Swing", cls: "badge-a" },
            { label: "MySQL", cls: "badge-b" },
            { label: "MVC", cls: "badge-c" }
        ]
    },
    {
        title: "Student Management System",
        description: "A student records and grade management application.",
        github: "https://github.com/pasinduprabashwara2000/Student-Attendance-Management-System-Layered-JavaFx.git",
        tags: [
            { label: "Java Fx", cls: "badge-a" },
            { label: "MySQL", cls: "badge-b" },
            { label: "Layered", cls: "badge-c" }
        ]
    },
    {
        title: "Research Project Tracker",
        description: "Track and manage research projects and milestones.",
        github: "https://github.com/pasinduprabashwara2000/Research-Project-Tracker-Spring-Boot.git",
        tags: [
            { label: "Spring Boot", cls: "badge-a" },
            { label: "Hibernate", cls: "badge-b" },
            { label: "Layered", cls: "badge-c" }
        ]
    },
    {
        title: "Enterprise Level Shop Management System",
        description: "The ultra-lightweight JavaScript SDK for interacting with the Nhost stack.",
        github: "https://github.com/pasinduprabashwara2000/Enterprise-Level-Shop-Management-System-MVC-JavaFx.git",
        tags: [
            { label: "Java Fx", cls: "badge-a" },
            { label: "MySQL", cls: "badge-b" },
            { label: "MVC", cls: "badge-c" }
        ]
    },
    {
        title: "Enterprise Level Shop Management System",
        description: "The ultra-lightweight JavaScript SDK for interacting with the Nhost stack.",
        github: "https://github.com/pasinduprabashwara2000/Enterprise-Level-Shop-Management-System-Layered-Fx.git",
        tags: [
            { label: "Java Fx", cls: "badge-a" },
            { label: "MySQL", cls: "badge-b" },
            { label: "Layered", cls: "badge-c" }
        ]
    }
];

function createCard({ title, description, github, tags }) {
    return `
    <div class="nhost-card">
      <div class="card-glow"></div>
      <div class="card-grid"></div>
      <div class="card-body">
        <div class="repo-title">${title}<span class="blinking-cursor"></span></div>
        <p class="repo-description">${description}</p>
        <div class="tag-wrapper">
          ${tags.map(t => `<span class="badge ${t.cls}">${t.label}</span>`).join("")}
        </div>
        <div class="action-buttons">
          <a href="${github}" target="_blank">
             <button class="btn-icon" aria-label="View on GitHub">${GITHUB_SVG}</button>
          </a>
        </div>
      </div>
    </div>`;
}

function renderProjects() {
    const section = document.querySelector(".projects-section");

    for (let i = 0; i < projects.length; i += 3) {
        const row = document.createElement("div");
        row.className = "projects-section-raw";
        row.innerHTML = projects.slice(i, i + 3).map(createCard).join("");
        section.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", renderProjects);