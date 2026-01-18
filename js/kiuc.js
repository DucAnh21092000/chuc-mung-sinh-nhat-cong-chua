const items = document.querySelectorAll('.memory-item');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const music = document.getElementById('bgMusic');

/* Scroll hiện kỷ niệm */
const showItem = () => {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.remove('hidden');
        }
    });
};

window.addEventListener('scroll', showItem);
showItem();

/* Click ảnh hiện lời nhắn */
items.forEach(item => {
    item.querySelector('img').addEventListener('click', () => {
        popupText.innerText = item.dataset.message;
        popup.style.display = 'flex';
    });
});

function closePopup() {
    popup.style.display = 'none';
}

/* Tự chạy nhạc khi vào màn */
window.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    }
}, { once: true });

function goToScreen2() {
    window.location.href = `${location.origin}/chuc-mung-sinh-nhat-cong-chua/chucmung.html`
};