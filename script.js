const farajBtn = document.getElementById("farajBtn");
const saadBtn = document.getElementById("saadBtn");

const farajBar = document.getElementById("farajBar");
const saadBar = document.getElementById("saadBar");

const farajCountText = document.getElementById("farajCount");
const saadCountText = document.getElementById("saadCount");

let farajCount = 0;
let saadCount = 0;

function updateBars(){

    const total = farajCount + saadCount;

    if(total===0){
        farajBar.style.width="0%";
        saadBar.style.width="0%";
        return;
    }

    farajBar.style.width=(farajCount/total*100)+"%";
    saadBar.style.width=(saadCount/total*100)+"%";

    farajCountText.textContent=farajCount+" ضغطة";
    saadCountText.textContent=saadCount+" ضغطة";

}

function explode(button,icons){

    const rect=button.getBoundingClientRect();

    for(let i=0;i<18;i++){

        const emoji=document.createElement("div");

        emoji.className="emoji";

        emoji.textContent=icons[Math.floor(Math.random()*icons.length)];

        emoji.style.left=(rect.right+20+Math.random()*120)+"px";

        emoji.style.top=(rect.top+Math.random()*rect.height)+"px";

        emoji.style.fontSize=(34+Math.random()*18)+"px";

        document.body.appendChild(emoji);

        setTimeout(()=>{
            emoji.remove();
        },1500);

    }

}

farajBtn.addEventListener("click",()=>{

    farajCount++;

    updateBars();

    explode(farajBtn,["💪🏻","👍🏻"]);

});

saadBtn.addEventListener("click",()=>{

    saadCount++;

    updateBars();

    explode(saadBtn,["👎🏻","🦶🏻"]);

});

updateBars();
