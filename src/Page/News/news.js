document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "../setting.html";
});

const newsItems = [
    {
        image: "https://via.placeholder.com/300/FF0000",
        title: "Item 1",
    },
    {
        image: "https://via.placeholder.com/300/00FF00",
        title: "Item 2",
    },
    {
        image: "https://via.placeholder.com/300/0000FF",
        title: "Item 3",
    },
];

let currentIndex = 0;

const newsImage = document.getElementById("news-image");
const newsTitle = document.getElementById("news-title");

function updateNewsContent(index) {
    const item = newsItems[index];
    newsImage.src = item.image;
    newsTitle.textContent = item.title;
}

document.getElementById("prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length; // Loop backward
    updateNewsContent(currentIndex);
});

document.getElementById("next-button").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    updateNewsContent(currentIndex);
});

updateNewsContent(currentIndex);
