"use strict";

class Field {
    constructor() {
        this.nodeCount = {
            horizontal: 30,
            vertical: 10
        }
        this.offsetToCorner = 30;
        this.distToBottom = 125;
        this.nodes = [];
        this.fill();
    }

    fill() {
        const horDistBetween = (_$canvas.width - 2 * this.offsetToCorner) / this.nodeCount.horizontal;
        const vertDistBetween = (_$canvas.height - 2 * this.distToBottom) / this.nodeCount.vertical;

        for (let yPos = this.offsetToCorner; yPos <= _$canvas.height - this.distToBottom + 0.01; yPos += vertDistBetween) {
            for (let xPos = this.offsetToCorner; xPos <= _$canvas.width - this.offsetToCorner + 0.01; xPos += horDistBetween) {
                const generatedNode = new Node(xPos, yPos);
                this.nodes.push(generatedNode);
            }
        }
    }

    draw() {
        this.nodes.forEach(node => node.draw());
    }
}
