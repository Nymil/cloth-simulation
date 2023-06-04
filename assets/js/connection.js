"use strict";

class Connection {
    constructor(startNode, endNode) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.color = '#989696';
        this.thickNess = 4;
    }

    draw() {
        drawLine(this.color, [this.startNode.getPos().x, this.startNode.getPos().y, this.endNode.getPos().x, this.endNode.getPos().y], this.thickNess);
    }

    getNodes() {
        return [this.startNode, this.endNode];
    }

}
