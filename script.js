const duckBtn = document.getElementById("duckBtn");
const catBtn = document.getElementById("catBtn");

function explode(type, button) {

    const rect = button.getBoundingClientRect();

    const icons =
        type === "duck"
        ? ["🦆","🐥","🦆","🐥","🦆"]
        : ["🐱","🐈","😺","🐱","🐈"];

    for(let i=0;i<35;i++){

        const emoji=document.createElement("div");

        emoji.className="emoji";

        emoji.textContent=icons[Math.floor(Math.random()*icons.length)];

        emoji.style.left=(rect.left+rect.width/2+(Math.random()-0.5)*220)+"px";

        emoji.style.top=(rect.top+rect.height/2+(Math.random()-0.5)*120)+"px";

        emoji.style.fontSize=(20+Math.random()*35)+"px";

        emoji.style.animationDuration=(1+Math.random()*2)+"s";

        document.body.appendChild(emoji);

        setTimeout(()=>{
            emoji.remove();
        },3000);

    }

}

duckBtn.addEventListener("click",()=>{

    explode("duck",duckBtn);

});

catBtn.addEventListener("click",()=>{

    explode("cat",catBtn);

});