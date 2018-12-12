class Rectangle {
    constructor(x, y, options = {
        width: 50,
        height: 50,
        MAX_JUMP_HEIGHT: 50,
        JUMP_STEP: 5
    }) {
        this.x = x;
        this.y = y;
        this.options = Object.assign({}, {
            width: 50,
            height: 50,
            MAX_JUMP_HEIGHT: 50,
            JUMP_STEP: 5,
            keyCode: 38
        }, options);


        this._JUMP_HEIGHT = 0;
        this._sign = -1;
        this._isJumping = false;

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onFrame = this.onFrame.bind(this);

        window.addEventListener("keyup", this.onKeyUp);
    }

    getData() {
        return {
            x: this.x,
            y: this.y + this._JUMP_HEIGHT,
            width: this.options.width,
            height: this.options.height
        }
    }
    onKeyUp({
        keyCode
    }) {
        if (keyCode === this.options.keyCode) {
            // Arrow up
            this._isJumping = true;
            window.requestAnimationFrame(this.onFrame);
            window.removeEventListener("keyup", this.onKeyUp);
        }
    }

    onFrame() {
        if (this._isJumping) {
            this._JUMP_HEIGHT += this.options.JUMP_STEP * this._sign;
            if (Math.abs(this._JUMP_HEIGHT) >= this.options.MAX_JUMP_HEIGHT) {
                this._sign = this._sign * -1;
            }

            if (Math.abs(this._JUMP_HEIGHT) === 0) {
                this._sign = this._sign * -1;
                window.addEventListener("keyup", this.onKeyUp);
            } else {
                window.requestAnimationFrame(this.onFrame);
            }

        }
    }
}

export default Rectangle;