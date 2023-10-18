const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const projectCards = document.querySelectorAll(".project-card");
const projectCardsTitle = document.querySelectorAll(".project-card h3");
const projectTitle = document.querySelector(".project-title");
const projectDescription = document.querySelector(".project-description");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("visible")
})

// Set first project card as active and others as inactive. Update project info and title.
for (let i = 0; i < projectCards.length; i++) {
    if (i === 0) {
        projectCards[0].classList.add("active");
        projectTitle.textContent = "Pokedex";
        projectDescription.textContent = "Pokedex is an application where you can search pokemon from a single generation. First choose a generation you wish to search pokemon from. Then search them with either pokemon type, id or name. Matching search results get displayed immediately."
    } else {
        projectCards[i].classList.add("inactive");
    }
}

// Make project cards act like radio buttons
projectCards.forEach(card => {
    card.addEventListener("click", (event) => {
        projectCards.forEach(otherCard => {
            otherCard.classList.remove("active");
            otherCard.classList.add("inactive");
        })
        event.currentTarget.classList.add("active");
        event.currentTarget.classList.remove("inactive");
        updateProjectInfo(event);
    })
})

function updateProjectInfo(event) {
    if (event.target.id === "pokedex" || event.target.parentElement.id === "pokedex") {
        projectTitle.textContent = "Pokedex";
        projectDescription.textContent = "Pokedex is an application where you can search pokemon from a single generation. First choose a generation you wish to search pokemon from. Then search them with either pokemon type, id or name. Matching search results get displayed immediately."
    } else if (event.target.id === "speedgame" ||  event.target.parentElement.id === "speedgame") {
        projectTitle.textContent = "Speedgame";
        projectDescription.textContent = "In speed game you have to click buttons as they light up. The game gets 5 milliseconds faster with each succesful click. If you click wrong button the game ends and your score will be displayed on the screen. The fourth time you miss a light the game ends and your score will be displayed on the screen."
    } else {
        projectTitle.textContent = "Project title";
        projectDescription.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae placeat porro nulla! Perspiciatis cum tempora minima est non, deserunt odio vitae, neque laboriosam facilis nostrum exercitationem vel labore provident dolor."
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    }))
}
)

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));