const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const celebration = document.getElementById("celebration");

// NO button teleport logic (stays fully on screen)
noButton.addEventListener('mouseenter', () => {
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});

// YES button action
yesButton.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    spawnFloating('💖', 30);
    spawnFloating('✨', 25);
    spawnFloating('🎉', 20);
});

// Floating emoji function
function spawnFloating(emoji, count) {
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.textContent = emoji;
        el.style.position = 'fixed';
        el.style.left = Math.random() * window.innerWidth + 'px';
        el.style.top = Math.random() * window.innerHeight + 'px';
        el.style.fontSize = (Math.random() * 30 + 20) + 'px';
        el.style.pointerEvents = 'none';
        el.style.transition = 'all 3s linear';
        document.body.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 3000);
    }
}
