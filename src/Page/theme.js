document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "setting.html";
});

const themeCircles = document.querySelectorAll(".theme-circle");
themeCircles.forEach((circle) => {
    circle.addEventListener("click", () => {
        const theme = circle.dataset.theme;

        if (theme === "dark-blue") {
            document.body.style.background = "#1A1A40";
            document.body.style.color = "#FFFFFF";
        } else if (theme === "dark-green") {
            document.body.style.background = "#1A4036";
            document.body.style.color = "#FFFFFF";
        } else if (theme === "light-purple") {
            document.body.style.background = "#8A6FC8";
            document.body.style.color = "#FFFFFF";
        } else if (theme === "dark-red") {
            document.body.style.background = "#401A1A";
            document.body.style.color = "#FFFFFF";
        } else if (theme === "classic-white") {
            document.body.style.background = "#FFFFFF";
            document.body.style.color = "#000000";
        }
    });
});

const speedSlider = document.getElementById("speed-control");
const speedPercentage = document.getElementById("speed-percentage");

speedSlider.addEventListener("input", () => {
    const value = speedSlider.value;
    speedPercentage.textContent = `${value}%`;
});
