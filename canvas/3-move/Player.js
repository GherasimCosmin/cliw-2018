class Player {
    constructor(x, y, keys = {
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        LEFT: 37
    }) {
        this.x = x;
        this.y = y;

        this.KEYS = keys;

        document.addEventListener("keydown", this.onKeyDown.bind(this));
    }

    getData() {
        return {
            x: this.x,
            y: this.y
        }
    }

    onKeyDown(e) {
        switch (e.keyCode) {
            case this.KEYS.UP:
                this.y -= 5;
                break;
            case this.KEYS.RIGHT:
                this.x += 5;
                break;
            case this.KEYS.DOWN:
                this.y += 5;
                break;
            case this.KEYS.LEFT:
                this.x -= 5;
                break;
            default:
                break;
        }
    }
}

export default Player;