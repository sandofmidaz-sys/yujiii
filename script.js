const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const celebration = document.getElementById("celebration");

// NO button teleport logic (bulletproof)
noButton.addEventListener('mouseenter', () => {
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    const margin = 10; // margin from window edges

    // calculate max X/Y positions inside viewport minus button size
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    const x = margin + Math.random() * maxX;
    const y = margin + Math.random() * maxY;

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
        el.style.fontSize = (Math.random() * 30 + 20) + 'px'; // bigger emojis
        el.style.pointerEvents = 'none';
        el.style.transition = 'all 3s linear';
        document.body.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 3000);
    }
}
