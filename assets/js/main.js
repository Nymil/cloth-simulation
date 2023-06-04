"use strict";

class Main {
    constructor() {
        this.backgroundColor = '#8C8C8C';
        this.fps = 60;
        this.field = new Field();
        this.simulationStarted = false;
        this.addEventListeners()
    }

    draw() {
        drawRect(this.backgroundColor, [0, 0, _$canvas.width, _$canvas.height]);
        this.field.draw();
    }

    update() {

    }

    handleMouseClick(e) {
        e.preventDefault();
        const clickedPos = this.getMousePos(e);
        this.field.statifyClick(clickedPos);
    }

    getMousePos(e) {
        const rect = _$canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left - 2, // minus two so the position is the tip of the mouse
            y: e.clientY - rect.top - 2
        };
    }

    run() {
        // main loop
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }

    addEventListeners() {
        document.addEventListener('mousedown', (e) => this.handleMouseClick(e));
    }
}