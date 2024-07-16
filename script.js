document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let gameInterval;

    function randomPosition() {
        const maxX = gameContainer.clientWidth - ball.clientWidth;
        const maxY = gameContainer.clientHeight - ball.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        ball.style.left = `${randomX}px`;
        ball.style.top = `${randomY}px`;
    }

    function startGame() {
        clearInterval(gameInterval);
        gameInterval = setInterval(() => {
            randomPosition();
        }, 1000); // Change the position every second
    }

    ball.addEventListener('click', function() {
        score++;
        scoreDisplay.textContent = `Pontuação: ${score}`;
        randomPosition();
    });

    randomPosition();
    startGame(); // Start the game initially
});
