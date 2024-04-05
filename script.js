const images = [
    "./images/bear_bread.jpeg",
    "./images/bread_cat.jpeg",
    "./images/cat_bread.jpeg",
    "./images/doge_bread.jpeg",
    "./images/fat_bear_bread.jpeg",
    "./images/miffy_bread.jpeg",
    "./images/rilakkuma_bread.jpeg",
];

function generateRandomImage() {
    const random_number = Math.floor(Math.random() * images.length);
    const random_image = images[random_number];
    document.getElementById("randomImage").src = random_image;
}
