const text = "Chào mừng công chúa nhỏ của anh 💖\nHôm nay là một ngày thật đặc biệt...";
const speed = 80;

let index = 0;
const textElement = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");


function createFloating() {
    const el = document.createElement("div"); // tạo thẻ div
    el.classList.add("floating");             // gán class floating
    el.innerText = Math.random() > 0.5 ? "💖" : "🦋";
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 4 + Math.random() * 3 + "s";

    document.body.appendChild(el);            // gắn vào body

    setTimeout(() => el.remove(), 7000);       // tự xóa
}


function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
        index++;
        setTimeout(typeEffect, speed);
    } else {
        nextBtn.style.display = "inline-block";

        // bật nhạc sau khi typing xong
        music.volume = 0.4;
        music.play();

        // tim / bướm bay liên tục
        setInterval(createFloating, 800);
    }
}

typeEffect();

/* Chuyển sang màn 2 có fade + zoom */
function goToScreen2() {
    document.querySelector(".screen").classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "kiuc.html";
    }, 1000);
}
