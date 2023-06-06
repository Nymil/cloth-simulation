"use strict";

class Connection {
    constructor(startNode, endNode) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.color = '#b4b4b4';
        this.drawThickNess = 4;
    }

    draw() {
        drawLine(this.color, [this.startNode.getPos().x, this.startNode.getPos().y, this.endNode.getPos().x, this.endNode.getPos().y], this.drawThickNess);
    }
}
