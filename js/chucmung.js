const audio = document.getElementById("voice");
const playBtn = document.getElementById("playBtn");
const subtitle = document.getElementById("subtitle");

const subtitles = [
    { start: 0, end: 4, text: "Hôm nay là sinh nhật em 🎂" },
    { start: 4, end: 9, text: "Anh chỉ muốn nói rằng..." },
    { start: 9, end: 15, text: "Cảm ơn em vì đã đến bên đời anh 💖" },
    { start: 15, end: 22, text: "Chúc em luôn cười thật tươi và hạnh phúc" },
    { start: 22, end: 28, text: "Và mong rằng người bên em sau này... vẫn là anh" }
];

playBtn.onclick = () => {
    audio.play();
};

let lastText = "";

audio.addEventListener("timeupdate", () => {
    const time = audio.currentTime;
    const current = subtitles.find(
        s => time >= s.start && time <= s.end
    );

    if (current && current.text !== lastText) {
        subtitle.style.opacity = 0;

        setTimeout(() => {
            subtitle.innerText = current.text;
            subtitle.style.opacity = 1;
            lastText = current.text;
        }, 300);
    }
});
