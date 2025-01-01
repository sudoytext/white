document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html";
});

const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const id = e.target.id;

        navButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        if (id === "news-button") {
            alert("News Section Coming Soon!");
        } else if (id === "shop-button") {
            alert("Shop Section Coming Soon!");
        } else if (id === "theme-button") {
            alert("Theme Section Coming Soon!");
        }
    });
});

const scaleSlider = document.getElementById("scale-slider");
const scaleValue = document.getElementById("scale-value");

scaleSlider.addEventListener("input", () => {
    const scale = scaleSlider.value;
    scaleValue.textContent = `${scale}%`;

    document.body.style.transform = `scale(${scale / 100})`;
    document.body.style.transformOrigin = "top left";
});
