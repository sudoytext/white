// Back button functionality
document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Handle button clicks for navigation
const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const id = e.target.id;

        // Add active class to the clicked button
        navButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Handle button-specific actions
        if (id === "news-button") {
            alert("News Section Coming Soon!");
        } else if (id === "shop-button") {
            alert("Shop Section Coming Soon!");
        } else if (id === "theme-button") {
            alert("Theme Section Coming Soon!");
        }
    });
});

// Slider for UI scaling
const scaleSlider = document.getElementById("scale-slider");
const scaleValue = document.getElementById("scale-value");

scaleSlider.addEventListener("input", () => {
    const scale = scaleSlider.value;
    scaleValue.textContent = `${scale}%`;

    // Dynamically scale the page
    document.body.style.transform = `scale(${scale / 100})`;
    document.body.style.transformOrigin = "top left";
});
