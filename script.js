
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "red";
        link.style.textDecoration = "underline";
    }
});


document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "lightyellow";
    });
    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "white";
    });
});
