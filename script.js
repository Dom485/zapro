document.querySelector('.button').addEventListener('click', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}); 