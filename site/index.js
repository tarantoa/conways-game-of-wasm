import('./node_modules/game-of-life/game_of_life.js')
    .then((gol) => {
        let pre = document.getElementById('game-canvas');
        let universe = gol.Universe.new();

        const sleepTime = 1000 / 30;

        const renderLoop = () => {
            let start = Date.now();
            pre.textContent = universe.render();
            universe.tick();
            let elapsedTime = Date.now() - start;

            let sleep = Math.max(0, sleepTime - elapsedTime);

            setTimeout(() => {
                window.requestAnimationFrame(renderLoop);
            }, sleep);
        };

        window.requestAnimationFrame(renderLoop);
    });
