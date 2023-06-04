"use strict";

class Node {
    static NEXT_ID = 0;
    constructor(x, y) {
        this.stationary = false;
        this.color = '#e3e3e3'
        this.stationaryColor = '#cb5454'
        this.radius = 5;
        this.pos = {
            x: x,
            y: y
        }
        this.id = Node.NEXT_ID;
        Node.NEXT_ID += 1;
    }

    getPos() {
        return this.pos;
    }

    getId() {
        return this.id;
    }

    draw() {
        const drawColor = this.stationary ? this.stationaryColor : this.color;
        drawCircle(drawColor, [this.pos.x, this.pos.y], this.radius);
    }

    equals(other) {
        return this.id === other.id;
    }
}
