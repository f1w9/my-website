const farajBtn = document.getElementById("farajBtn");
const saadBtn = document.getElementById("saadBtn");

const farajBar = document.getElementById("farajBar");
const saadBar = document.getElementById("saadBar");

const farajCountText = document.getElementById("farajCount");
const saadCountText = document.getElementById("saadCount");

const farajBox = document.getElementById("farajEmojis");
const saadBox = document.getElementById("saadEmojis");

let farajCount = 0;
let saadCount = 0;

let lastClickTimeFaraj = 0;
let lastClickTimeSaad = 0;

function updateBars() {
    farajCountText.textContent = ${farajCount} ضغطة;
    saadCountText.textContent = ${saadCount} ضغطة;

    farajBar.style.width = ${Math.min(farajCount * 2, 100)}%;
    saadBar.style.width = ${Math.min(saadCount * 2, 100)}%;
}

function spawnEmoji(box, icons, isFast) {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = icons[Math.floor(Math.random() * icons.length)];

    const randomX = (Math.random() * 40 - 20) + "px";
    emoji.style.setProperty('--random-x', randomX);
    emoji.style.left = "20px";
    emoji.style.top = (Math.random() * 40 + 20) + "px";

    if (isFast) {
        emoji.style.setProperty('--emoji-scale', '1.6');
    } else {
        emoji.style.setProperty('--emoji-scale', '1');
    }

    box.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 800);
}

farajBtn.addEventListener("click", () => {
    farajCount++;
    
    const currentTime = Date.now();
    const isFast = (currentTime - lastClickTimeFaraj) < 250;
    lastClickTimeFaraj = currentTime;

    updateBars();
    spawnEmoji(farajBox, ["💪🏻", "👍🏻"], isFast);
});

saadBtn.addEventListener("click", () => {
    saadCount++;

    const currentTime = Date.now();
    const isFast = (currentTime - lastClickTimeSaad) < 250;
    lastClickTimeSaad = currentTime;

    updateBars();
    spawnEmoji(saadBox, ["👎🏻", "🦶🏻"], isFast);
});

updateBars();


