const projectCards = document.querySelectorAll(".project-card");

// Set first project card as active
for (let i = 0; i < projectCards.length; i++) {
    if (i === 0) {
        projectCards[0].classList.add("active");
    } else {
        projectCards[i].classList.add("inactive");
    }
}

// Make project cards act like radio buttons
projectCards.forEach(card => {
    card.addEventListener("click", (event) => {
        projectCards.forEach(card => {
            card.classList.remove("active");
            card.classList.add("inactive");
        })
        event.target.classList.add("active")
        event.target.classList.remove("inactive")
    })
})