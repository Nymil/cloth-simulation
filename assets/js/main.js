"use strict";

class Main {
    constructor() {
        this.backgroundColor = '#8C8C8C';
        this.fps = 60;
    }

    draw() {
        drawRect(this.backgroundColor, [0, 0, _$canvas.width, _$canvas.height]);
    }

    update() {

    }

    run() {
        // main loop
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }
}