document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const gridSize = 20;
    const snakeSize = 20;
    let snake = [{ x: 0, y: 0 }];
    let direction = 'right';
    let food = getRandomPosition();

    function getRandomPosition() {
        const x = Math.floor(Math.random() * gridSize) * snakeSize;
        const y = Math.floor(Math.random() * gridSize) * snakeSize;
        return { x, y };
    }

    function draw() {
        board.innerHTML = '';

        // Draw Snake
        snake.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.className = 'snake';
            snakeElement.style.left = `${segment.x}px`;
            snakeElement.style.top = `${segment.y}px`;
            board.appendChild(snakeElement);
        });

        // Draw Food
        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.left = `${food.x}px`;
        foodElement.style.top = `${food.y}px`;
        board.appendChild(foodElement);
    }

    function update() {
        const head = { ...snake[0] };

        // Update snake position based on direction
        switch (direction) {
            case 'up':
                head.y -= snakeSize;
                break;
            case 'down':
                head.y += snakeSize;
                break;
            case 'left':
                head.x -= snakeSize;
                break;
            case 'right':
                head.x += snakeSize;
                break;
        }

        // Check if snake eats the food
        if (head.x === food.x && head.y === food.y) {
            snake.unshift(getRandomPosition());
            food = getRandomPosition();
        }

        // Remove the tail
        snake.pop();

        // Check if snake collides with itself or the wall
        if (
            head.x < 0 ||
            head.y < 0 ||
            head.x >= gridSize * snakeSize ||
            head.y >= gridSize * snakeSize ||
            isCollision(head, snake)
        ) {
            alert('Game Over!');
            snake = [{ x: 0, y: 0 }];
            direction = 'right';
        }

        // Add the new head
        snake.unshift(head);
    }

    function isCollision(point, array) {
        return array.some(p => p.x === point.x && p.y === point.y);
    }

    function handleKeyPress(e) {
        switch (e.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }

    document.addEventListener('keydown', handleKeyPress);

    function gameLoop() {
        update();
        draw();
    }

    setInterval(gameLoop, 300);
});