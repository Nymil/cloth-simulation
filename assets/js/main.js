"use strict";

class Main {
    constructor() {
        this.backgroundColor = '#8C8C8C';
        this.fps = 60;
        this.field = new Field();
    }

    draw() {
        drawRect(this.backgroundColor, [0, 0, _$canvas.width, _$canvas.height]);
        this.field.draw();
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