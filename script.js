const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    intro.style.display = "none";

    main.style.display = "block";

    music.play();
});

// COUPLE BIO

const coupleToggle =
document.getElementById("coupleToggle");

const coupleContent =
document.getElementById("coupleContent");

coupleToggle.addEventListener("click", () => {

if(coupleContent.style.display === "grid"){

    coupleContent.style.display = "none";
    coupleToggle.textContent =
    "Reveal Their Story";

}else{

    coupleContent.style.display = "grid";
    coupleToggle.textContent =
    "Hide Their Story";

}

});

// COUNTDOWN

const targetDate =
new Date("June 26, 2026 09:00:00");

setInterval(() => {

    const now = new Date();

    const diff =
    targetDate - now;

    // wedding day reached

    if(diff <= 0){

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days =
    Math.floor(diff/(1000*60*60*24));

    const hours =
    Math.floor(diff%(1000*60*60*24)/(1000*60*60));

    const minutes =
    Math.floor(diff%(1000*60*60)/(1000*60));

    const seconds =
    Math.floor(diff%(1000*60)/1000);

    document.getElementById("days").innerHTML =
String(days).padStart(2,"0");

document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");

},1000);



// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("active");
        }

    });

});

// WEDDING GIFT BOX

const giftToggle =
document.getElementById("giftToggle");

const giftContent =
document.getElementById("giftContent");

giftToggle.addEventListener("click",()=>{

    giftContent.classList.toggle("show");

    giftToggle.innerText =
    giftContent.classList.contains("show")
    ? "Hide Gift Options"
    : "Show Gift Options";
});


// QR MODAL

const modal =
document.getElementById("qrisModal");

const openQR =
document.getElementById("openQR");

const closeQR =
document.getElementById("closeQR");

openQR.addEventListener("click",()=>{

    modal.style.display = "flex";
});

closeQR.addEventListener("click",()=>{

    modal.style.display = "none";
});

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        modal.style.display = "none";
    }
});

// WISH BOX

const wishBtn =
document.getElementById("wishBtn");

const wishesList =
document.getElementById("wishesList");

wishBtn.addEventListener("click", () => {

    const name =
    document.getElementById("wishName").value;

    const message =
    document.getElementById("wishMessage").value;

    if(!name || !message) return;

    const card =
    document.createElement("div");

    card.classList.add("wish-card");

    card.innerHTML = `
        <p class="wish-text">
            ${message}
        </p>

        <span class="wish-author">
            - ${name}
        </span>
    `;

    wishesList.prepend(card);

    document.getElementById("wishName").value = "";
    document.getElementById("wishMessage").value = "";
});
