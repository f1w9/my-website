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

function updateBars(){
    const total = farajCount + saadCount;

    if(total === 0){
        farajBar.style.width = "0%";
        saadBar.style.width = "0%";
    } else {
        farajBar.style.width = (farajCount / total * 100) + "%";
        saadBar.style.width = (saadCount / total * 100) + "%";
    }

    farajCountText.textContent = ${farajCount} ضغطة;
    saadCountText.textContent = ${saadCount} ضغطة;
}

function spawnEmoji(box, icons){
    for(let i = 0; i < 10; i++){

        const emoji = document.createElement("div");
        emoji.className = "emoji";

        emoji.textContent = icons[Math.floor(Math.random() * icons.length)];

        // داخل نفس المكان بجانب الزر
        emoji.style.position = "absolute";
        emoji.style.left = (10 + Math.random() * 60) + "px";
        emoji.style.top = (Math.random() * 30) + "px";

        box.appendChild(emoji);

        setTimeout(() => emoji.remove(), 1200);
    }
}

function popButton(btn){
    btn.classList.remove("pop");
    void btn.offsetWidth; // restart animation
    btn.classList.add("pop");
}

/* فراج */
farajBtn.addEventListener("click", () => {
    farajCount++;
    updateBars();
    spawnEmoji(farajBox, ["💪🏻", "👍🏻"]);
    popButton(farajBtn);
});

/* سعد */
saadBtn.addEventListener("click", () => {
    saadCount++;
    updateBars();
    spawnEmoji(saadBox, ["👎🏻", "🦶🏻"]);
    popButton(saadBtn);
});

updateBars();
