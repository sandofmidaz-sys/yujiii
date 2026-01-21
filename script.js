const noButton = document.getElementById("noButton");

noButton.addEventListener('mouseenter', () => {
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    // Maximum positions inside the viewport
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    // Random position
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});
