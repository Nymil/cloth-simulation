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
        this.id = Node.NEXT_ID;
        Node.NEXT_ID += 1;

        this.gravitationalForce = {
            x: 0,
            y: 3
        }
        this.connectionForce = {
            x: 0,
            y: 0
        }
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

    setConnectionForce(fx, fy) {
        this.connectionForce.x = fx;
        this.connectionForce.y = fy;
    }

    toggleStatic() {
        this.static = !this.static;
    }

    moveAccordingToForces() {
        if (this.static) return
        this.pos.x += this.gravitationalForce.x + this.connectionForce.x;
        this.pos.y += this.gravitationalForce.y + this.connectionForce.y;
    }

    isAtPos(pos) {
        const distSquared = (this.pos.x - pos.x)**2 + (this.pos.y - pos.y)**2;
        return distSquared <= this.radius ** 2;
    }

    equals(other) {
        return this.id === other.id;
    }
}
