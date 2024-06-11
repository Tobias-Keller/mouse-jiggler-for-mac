const robot = require("@hurdlegroup/robotjs");

module.exports = class MouseController {
    interval;

    constructor () {
        robot.setMouseDelay(2);
        this.moveMouse = this.moveMouse.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    start() {
        this.interval = setInterval(() => this.moveMouse(), 5000);
    }

    stop() {
        clearInterval(this.interval);
    }

    moveMouse() {
        const position = robot.getMousePos();
        const screenSize = robot.getScreenSize();

        const moveX = Math.random() < 0.5 ? -1 : 1;
        const moveY = Math.random() < 0.5 ? -1 : 1;
        let newX = position.x + moveX;
        let newY = position.y + moveY;

        if (newX < 0) newX = 1;
        if (newX >= screenSize.width) newX = screenSize.width - 2;

        if (newY < 0) newY = 1;
        if (newY >= screenSize.height) newY = screenSize.height - 2;

        robot.moveMouse(newX, newY);
    }
}