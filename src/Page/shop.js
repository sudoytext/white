document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "index.html"; // Navigate back to the main page
});

const plans = document.querySelectorAll(".plan-card");
const leftButton = document.querySelector(".slider-button.left");
const rightButton = document.querySelector(".slider-button.right");
let currentPlanIndex = 0;

function updatePlanVisibility() {
    plans.forEach((plan, index) => {
        plan.classList.toggle("hidden", index !== currentPlanIndex);
    });
}

leftButton.addEventListener("click", () => {
    currentPlanIndex = (currentPlanIndex - 1 + plans.length) % plans.length;
    updatePlanVisibility();
});

rightButton.addEventListener("click", () => {
    currentPlanIndex = (currentPlanIndex + 1) % plans.length;
    updatePlanVisibility();
});

updatePlanVisibility();
