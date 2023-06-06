"use strict";

class Node {
    static NEXT_ID = 0;
    constructor(x, y) {
        this.static = false;
        this.color = '#e3e3e3'
        this.stationaryColor = '#cb5454'
        this.radius = 7;
        this.pos = {
            x: x,
            y: y
        }
        this.prevPos = {
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
        const drawColor = this.static ? this.stationaryColor : this.color;
        drawCircle(drawColor, [this.pos.x, this.pos.y], this.radius);
    }

    toggleStatic() {
        this.static = !this.static;
    }

    isAtPos(pos) {
        const distSquared = (this.pos.x - pos.x)**2 + (this.pos.y - pos.y)**2;
        return distSquared <= this.radius ** 2;
    }
}
