"use strict";

class Node {
    static NEXT_ID = 0;
    constructor(x, y) {
        this.color = '#e3e3e3'
        this.radius = 5;
        this.pos = {
            x: x,
            y: y
        }
        this.id = Node.NEXT_ID;
        Node.NEXT_ID += 1;
    }

    draw() {
        drawCircle(this.color, [this.pos.x, this.pos.y], this.radius);
    }
}
