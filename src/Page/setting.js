
document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html";
});
document.getElementById("news-button").addEventListener("click", () => {
    window.location.href = "src/Page/News/news.html";
});
const scaleSlider = document.getElementById("scale-slider");
const scaleValue = document.getElementById("scale-value");

scaleSlider.addEventListener("input", () => {
    const scale = scaleSlider.value;
    scaleValue.textContent = `${scale}%`;

    document.body.style.transform = `scale(${scale / 100})`;
    document.body.style.transformOrigin = "top left";
});

const themeSelector = document.getElementById("theme-selector");
themeSelector.addEventListener("change", (e) => {
    const theme = e.target.value;

    if (theme === "light") {
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "#000000";
    } else if (theme === "dark") {
        document.body.style.background = "#000000";
        document.body.style.color = "#FFFFFF";
    } else {
        document.body.style.background = "radial-gradient(circle, #2A2A40, #1F1F2E)";
        document.body.style.color = "#FFFFFF";
    }
});
