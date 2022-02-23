"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Right"] = "right";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
})(Direction || (Direction = {}));
class Renderer {
    constructor(screenElement, gridWidth, gridHeight, gridSize, scale) {
        this._screen = screenElement;
        this._ctx = this._screen.getContext("2d");
        this._gridWidth = gridWidth;
        this._gridHeight = gridHeight;
        this._gridSize = gridSize;
        this._scale = scale;
        this.pixelcolor = "#000000";
        this._initScreen();
    }
    clearScreen() {
        this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);
    }
    drawStraight_horizontal(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, flip);
        this._drawPixel(0, 1);
        this._drawPixel(1, 1);
        this._drawPixel(3, 1);
        this._drawPixel(0, 2);
        this._drawPixel(2, 2);
        this._drawPixel(3, 2);
        this._resetScreen();
    }
    drawStraight_vertical(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, flip);
        this._drawPixel(1, 0);
        this._drawPixel(1, 2);
        this._drawPixel(1, 3);
        this._drawPixel(2, 0);
        this._drawPixel(2, 1);
        this._drawPixel(2, 3);
        this._resetScreen();
    }
    drawStraight_digest(xgrid, ygrid) {
        this._prepareDraw(xgrid, ygrid);
        this._drawPixel(0, 1);
        this._drawPixel(0, 2);
        this._drawPixel(1, 0);
        this._drawPixel(2, 0);
        this._drawPixel(1, 3);
        this._drawPixel(2, 3);
        this._drawPixel(3, 1);
        this._drawPixel(3, 2);
        this._resetScreen();
    }
    drawCorner(xgrid, ygrid, flipx, flipy) {
        this._prepareDraw(xgrid, ygrid, flipx, flipy);
        this._drawPixel(2, 1);
        this._drawPixel(3, 1);
        this._drawPixel(1, 2);
        this._drawPixel(3, 2);
        this._drawPixel(1, 3);
        this._drawPixel(2, 3);
        this._resetScreen();
    }
    drawCorner_digest(xgrid, ygrid, flipx, flipy) {
        this._prepareDraw(xgrid, ygrid, flipx, flipy);
        this._drawPixel(3, 3);
        this._resetScreen();
    }
    drawHead_horizontal(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, flip);
        this._drawPixel(0, 0);
        this._drawPixel(1, 1);
        this._drawPixel(2, 1);
        this._drawPixel(0, 2);
        this._drawPixel(1, 2);
        this._drawPixel(2, 2);
        this._resetScreen();
    }
    drawHead_horizontalreach(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, flip);
        this._drawPixel(0, 0);
        this._drawPixel(1, 1);
        this._drawPixel(2, 0);
        this._drawPixel(0, 2);
        this._drawPixel(1, 2);
        this._drawPixel(2, 3);
        this._resetScreen();
    }
    drawHead_vertical(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, false, flip);
        this._drawPixel(0, 0);
        this._drawPixel(1, 2);
        this._drawPixel(1, 1);
        this._drawPixel(2, 2);
        this._drawPixel(2, 1);
        this._drawPixel(2, 0);
        this._resetScreen();
    }
    drawHead_verticalreach(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, false, flip);
        this._drawPixel(0, 0);
        this._drawPixel(1, 1);
        this._drawPixel(0, 2);
        this._drawPixel(2, 0);
        this._drawPixel(2, 1);
        this._drawPixel(3, 2);
        this._resetScreen();
    }
    drawTail_horizontal(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, flip, false);
        this._drawPixel(2, 1);
        this._drawPixel(3, 1);
        this._drawPixel(0, 2);
        this._drawPixel(1, 2);
        this._drawPixel(2, 2);
        this._drawPixel(3, 2);
        this._resetScreen();
    }
    drawTail_vertical(xgrid, ygrid, flip) {
        this._prepareDraw(xgrid, ygrid, false, flip);
        this._drawPixel(1, 3);
        this._drawPixel(1, 2);
        this._drawPixel(2, 3);
        this._drawPixel(2, 2);
        this._drawPixel(2, 1);
        this._drawPixel(2, 0);
        this._resetScreen();
    }
    drawFood(xgrid, ygrid) {
        this._prepareDraw(xgrid, ygrid, false, false);
        this._drawPixel(0, 1);
        this._drawPixel(1, 0);
        this._drawPixel(2, 1);
        this._drawPixel(1, 2);
        this._resetScreen();
    }
    drawBonus(xgrid, ygrid) {
        this._prepareDraw(xgrid, ygrid, false, false);
        this._drawPixel(1, 0);
        this._drawPixel(3, 0);
        this._drawPixel(5, 0);
        this._drawPixel(0, 1);
        this._drawPixel(2, 1);
        this._drawPixel(3, 1);
        this._drawPixel(4, 1);
        this._drawPixel(5, 1);
        this._drawPixel(6, 1);
        this._drawPixel(0, 2);
        this._drawPixel(1, 2);
        this._drawPixel(2, 2);
        this._drawPixel(3, 2);
        this._drawPixel(4, 2);
        this._drawPixel(5, 2);
        this._drawPixel(6, 2);
        this._drawPixel(7, 2);
        this._drawPixel(2, 3);
        this._drawPixel(5, 3);
        this._resetScreen();
    }
    _initScreen() {
        this._screen.width = this._gridWidth * this._gridSize * this._scale;
        this._screen.height = this._gridHeight * this._gridSize * this._scale;
        this._ctx.fillStyle = this.pixelcolor;
    }
    _resetScreen() {
        this._ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    _prepareDraw(xgrid, ygrid, flipx = false, flipy = false) {
        const translatex = (flipx ? xgrid + 1 : xgrid) * this._gridSize * this._scale;
        const translatey = (flipy ? ygrid + 1 : ygrid) * this._gridSize * this._scale;
        const scalex = flipx ? -1 : 1;
        const scaley = flipy ? -1 : 1;
        this._ctx.translate(translatex, translatey);
        this._ctx.scale(scalex, scaley);
    }
    _drawPixel(xpixel, ypixel) {
        this._ctx.fillRect(xpixel * this._scale, ypixel * this._scale, this._scale, this._scale);
    }
}
class Game {
    constructor(settings) {
        this._renderer = new Renderer(settings.canvas, settings.gridWidth, settings.gridHeight, settings.gridSize, settings.pixelSize);
        this._currentGame = null;
        this._width = settings.gridWidth;
        this._height = settings.gridHeight;
        this._previousTickTime = 0;
        this._onGameStart = this._noOp;
        this._onGameEnd = this._noOp;
        this._onScore = this._noOp;
        this._onBonusStart = this._noOp;
        this._onBonusEnd = this._noOp;
        this._onBonusTick = this._noOp;
    }
    get running() {
        return this._currentGame && this._currentGame.running;
    }
    new(speed, initialLength) {
        speed = Math.min(Math.max(speed, Game.MIN_SPEED), Game.MAX_SPEED);
        initialLength = Math.min(Math.max(initialLength, Game.MIN_INITIAL), Game.MAX_INITIAL);
        this._currentGame = {
            running: true,
            score: 0,
            speed,
            snake: this._constructInitialSnake(initialLength),
            direction: Direction.Right,
            food: this._constructFoodLocation(),
            bonus: null,
            bonustimer: 0,
            bonusappear: Game.BONUS_APPEARANCE,
            win: false
        };
        this._setScore(0);
        this._onGameStart();
        this._tick();
    }
    setDirection(direction) {
        if (!this._currentGame)
            return;
        const previousDirection = this._currentGame.snake[this._currentGame.snake.length - 1].previous;
        if (direction !== this._oppositeDirectionOf(previousDirection))
            this._currentGame.direction = direction;
    }
    onGameStart(fn) {
        this._onGameStart = fn;
    }
    onGameEnd(fn) {
        this._onGameEnd = fn;
    }
    onScore(fn) {
        this._onScore = fn;
    }
    onBonusStart(fn) {
        this._onBonusStart = fn;
    }
    onBonusEnd(fn) {
        this._onBonusEnd = fn;
    }
    onBonusTick(fn) {
        this._onBonusTick = fn;
    }
    _noOp() { }
    _oppositeDirectionOf(direction) {
        switch (direction) {
            case Direction.Up:
                return Direction.Down;
            case Direction.Down:
                return Direction.Up;
            case Direction.Left:
                return Direction.Right;
            case Direction.Right:
                return Direction.Left;
        }
    }
    _constructInitialSnake(length) {
        const parts = [];
        let x = Math.floor((this._width - length) / 2);
        let y = Math.floor(this._height / 2);
        parts.push({
            xgrid: x,
            ygrid: y,
            previous: null,
            next: Direction.Right,
            digest: false
        });
        for (let i = 1; i < length - 1; i++) {
            parts.push({
                xgrid: x + i,
                ygrid: y,
                previous: Direction.Right,
                next: Direction.Right,
                digest: false
            });
        }
        parts.push({
            xgrid: x + length - 1,
            ygrid: y,
            previous: Direction.Right,
            next: null,
            digest: false
        });
        return parts;
    }
    _constructFoodLocation() {
        let position = this._constructRandomPosition(0, this._width - 1, 0, this._height - 1);
        while (this._isSnakePosition(position.xgrid, position.ygrid)) {
            position = this._constructRandomPosition(0, this._width - 1, 0, this._height - 1);
        }
        return position;
    }
    _constructBonusLocation() {
        let position = this._constructRandomPosition(0, this._width - 2, 0, this._height - 2);
        let tries = 0;
        while (this._isSnakePosition(position.xgrid, position.ygrid) ||
            this._isSnakePosition(position.xgrid + 1, position.ygrid) ||
            this._isFoodPosition(position.xgrid, position.ygrid) ||
            this._isSnakePosition(position.xgrid + 1, position.ygrid)) {
            if (tries === Game.BONUS_MAXTRIES)
                break;
            position = this._constructRandomPosition(0, this._width - 2, 0, this._height - 2);
            tries++;
        }
        if (tries === Game.BONUS_MAXTRIES)
            return null;
        return position;
    }
    _constructRandomPosition(xmin, xmax, ymin, ymax) {
        return {
            xgrid: this._randomBetween(xmin, xmax),
            ygrid: this._randomBetween(ymin, ymax)
        };
    }
    _randomBetween(min = 0, max = 1) {
        if (min === 0 && max === 0)
            return 0;
        return Math.round(Math.random() * (max - min)) + min;
    }
    _tick() {
        if (!this._currentGame)
            return;
        const time = Date.now();
        if (time - this._previousTickTime >
            Game.MAX_TIMESTEP / this._currentGame.speed) {
            this._update();
            this._render();
            this._previousTickTime = time;
        }
        if (this._currentGame.running) {
            window.requestAnimationFrame(this._tick.bind(this));
        }
    }
    _update() {
        if (!this._currentGame)
            return;
        const previousPart = this._currentGame.snake[this._currentGame.snake.length - 1];
        const { xgrid: xnext, ygrid: ynext } = this._movePosition(previousPart.xgrid, previousPart.ygrid, this._currentGame.direction);
        if (this._isSnakePosition(xnext, ynext, true)) {
            this._removeBonus();
            this._currentGame.running = false;
            this._onGameEnd(this._currentGame);
            return;
        }
        const foodDigest = this._isFoodPosition(xnext, ynext);
        const bonusDigest = this._isBonusPosition(xnext, ynext);
        previousPart.next = this._currentGame.direction;
        this._currentGame.snake.push({
            xgrid: xnext,
            ygrid: ynext,
            previous: this._currentGame.direction,
            next: null,
            digest: foodDigest || bonusDigest
        });
        if (bonusDigest) {
            const bonusScore = Game.BONUS_BASE + Game.BONUS_MULTIPLIER * this._currentGame.bonustimer;
            this._setScore((this._currentGame.score += bonusScore));
            this._removeBonus();
        }
        if (this._currentGame.bonus) {
            this._currentGame.bonustimer--;
            this._onBonusTick(this._currentGame.bonustimer);
            if (this._currentGame.bonustimer <= 0)
                this._removeBonus();
        }
        if (foodDigest) {
            this._setScore(this._currentGame.score + 1);
            this._currentGame.speed += Game.SPEED_INCEASE;
            if (!this._currentGame.bonus && this._currentGame.bonusappear > 0)
                this._currentGame.bonusappear--;
            const spacesToGo = this._width * this._height - this._currentGame.snake.length;
            if (spacesToGo === 0) {
                this._removeBonus();
                this._currentGame.running = false;
                this._currentGame.win = true;
                this._onGameEnd(this._currentGame);
                return;
            }
            this._currentGame.food = this._constructFoodLocation();
            if (!this._currentGame.bonus &&
                this._currentGame.bonusappear === 0 &&
                spacesToGo > Game.BONUS_TIME + 2) {
                this._spawnBonus();
            }
        }
        else {
            this._currentGame.snake.shift();
            this._currentGame.snake[0].previous = null;
        }
    }
    _movePosition(xgrid, ygrid, direction, distance = 1) {
        switch (direction) {
            case Direction.Up:
                ygrid -= distance;
                break;
            case Direction.Down:
                ygrid += distance;
                break;
            case Direction.Left:
                xgrid -= distance;
                break;
            case Direction.Right:
                xgrid += distance;
                break;
        }
        return this._wrapPosition(xgrid, ygrid);
    }
    _wrapPosition(xgrid, ygrid) {
        xgrid = xgrid % this._width;
        ygrid = ygrid % this._height;
        if (xgrid < 0)
            xgrid = this._width + xgrid;
        if (ygrid < 0)
            ygrid = this._height + ygrid;
        return { xgrid, ygrid };
    }
    _isSnakePosition(xgrid, ygrid, ignoreTail = false) {
        if (!this._currentGame)
            return false;
        for (let part of this._currentGame.snake) {
            if (ignoreTail && !part.previous)
                continue;
            if (part.xgrid === xgrid && part.ygrid === ygrid)
                return true;
        }
        return false;
    }
    _isFoodPosition(xgrid, ygrid) {
        if (!this._currentGame)
            return false;
        return (this._currentGame.food.xgrid === xgrid &&
            this._currentGame.food.ygrid == ygrid);
    }
    _isBonusPosition(xgrid, ygrid) {
        if (!this._currentGame || !this._currentGame.bonus)
            return false;
        return ((this._currentGame.bonus.xgrid === xgrid ||
            this._currentGame.bonus.xgrid + 1 == xgrid) &&
            this._currentGame.bonus.ygrid == ygrid);
    }
    _setScore(score) {
        if (!this._currentGame)
            return;
        this._currentGame.score = score;
        this._onScore(score);
    }
    _spawnBonus() {
        if (!this._currentGame)
            return;
        const newBonusLocation = this._constructBonusLocation();
        if (newBonusLocation) {
            this._currentGame.bonus = newBonusLocation;
            this._currentGame.bonustimer = Game.BONUS_TIME;
            this._onBonusTick(this._currentGame.bonustimer);
            this._onBonusStart();
        }
    }
    _removeBonus() {
        if (!this._currentGame)
            return;
        this._currentGame.bonus = null;
        this._currentGame.bonustimer = 0;
        this._currentGame.bonusappear = Game.BONUS_APPEARANCE;
        this._onBonusEnd();
    }
    _render() {
        this._renderer.clearScreen();
        if (!this._currentGame)
            return;
        this._renderSnake(this._currentGame.snake);
        this._renderFood(this._currentGame.food.xgrid, this._currentGame.food.ygrid);
        if (this._currentGame.bonus)
            this._renderBonus(this._currentGame.bonus.xgrid, this._currentGame.bonus.ygrid);
    }
    _renderSnake(parts) {
        if (parts.length === 0)
            return;
        for (let part of parts) {
            if (part.previous === null && part.next === null)
                continue;
            else if (part.previous === null)
                this._renderTail(part);
            else if (part.next === null)
                this._renderHead(part);
            else if (part.previous === part.next)
                this._renderStraight(part);
            else
                this._renderCorner(part);
        }
    }
    _renderTail(part) {
        switch (part.next) {
            case Direction.Right:
                this._renderer.drawTail_horizontal(part.xgrid, part.ygrid, false);
                break;
            case Direction.Left:
                this._renderer.drawTail_horizontal(part.xgrid, part.ygrid, true);
                break;
            case Direction.Up:
                this._renderer.drawTail_vertical(part.xgrid, part.ygrid, true);
                break;
            case Direction.Down:
                this._renderer.drawTail_vertical(part.xgrid, part.ygrid, false);
                break;
        }
    }
    _renderHead(part) {
        var _a;
        const reachPosition = this._movePosition(part.xgrid, part.ygrid, (_a = this._currentGame) === null || _a === void 0 ? void 0 : _a.direction);
        const reach = this._isFoodPosition(reachPosition.xgrid, reachPosition.ygrid) ||
            this._isBonusPosition(reachPosition.xgrid, reachPosition.ygrid);
        switch (part.previous) {
            case Direction.Right:
                if (reach)
                    this._renderer.drawHead_horizontalreach(part.xgrid, part.ygrid, false);
                else
                    this._renderer.drawHead_horizontal(part.xgrid, part.ygrid, false);
                break;
            case Direction.Left:
                if (reach)
                    this._renderer.drawHead_horizontalreach(part.xgrid, part.ygrid, true);
                else
                    this._renderer.drawHead_horizontal(part.xgrid, part.ygrid, true);
                break;
            case Direction.Up:
                if (reach)
                    this._renderer.drawHead_verticalreach(part.xgrid, part.ygrid, true);
                else
                    this._renderer.drawHead_vertical(part.xgrid, part.ygrid, true);
                break;
            case Direction.Down:
                if (reach)
                    this._renderer.drawHead_verticalreach(part.xgrid, part.ygrid, false);
                else
                    this._renderer.drawHead_vertical(part.xgrid, part.ygrid, false);
                break;
        }
    }
    _renderStraight(part) {
        switch (part.next) {
            case Direction.Right:
                this._renderer.drawStraight_horizontal(part.xgrid, part.ygrid, false);
                break;
            case Direction.Left:
                this._renderer.drawStraight_horizontal(part.xgrid, part.ygrid, true);
                break;
            case Direction.Up:
                this._renderer.drawStraight_vertical(part.xgrid, part.ygrid, true);
                break;
            case Direction.Down:
                this._renderer.drawStraight_vertical(part.xgrid, part.ygrid, false);
                break;
        }
        if (part.digest)
            this._renderer.drawStraight_digest(part.xgrid, part.ygrid);
    }
    _renderCorner(part) {
        if ((part.previous === Direction.Up && part.next === Direction.Right) ||
            (part.previous === Direction.Left && part.next === Direction.Down)) {
            this._renderer.drawCorner(part.xgrid, part.ygrid, false, false);
            if (part.digest)
                this._renderer.drawCorner_digest(part.xgrid, part.ygrid, false, false);
        }
        else if ((part.previous === Direction.Up && part.next === Direction.Left) ||
            (part.previous === Direction.Right && part.next === Direction.Down)) {
            this._renderer.drawCorner(part.xgrid, part.ygrid, true, false);
            if (part.digest)
                this._renderer.drawCorner_digest(part.xgrid, part.ygrid, true, false);
        }
        else if ((part.previous === Direction.Down && part.next === Direction.Right) ||
            (part.previous === Direction.Left && part.next === Direction.Up)) {
            this._renderer.drawCorner(part.xgrid, part.ygrid, false, true);
            if (part.digest)
                this._renderer.drawCorner_digest(part.xgrid, part.ygrid, false, true);
        }
        else if ((part.previous === Direction.Down && part.next === Direction.Left) ||
            (part.previous === Direction.Right && part.next === Direction.Up)) {
            this._renderer.drawCorner(part.xgrid, part.ygrid, true, true);
            if (part.digest)
                this._renderer.drawCorner_digest(part.xgrid, part.ygrid, true, true);
        }
    }
    _renderFood(xgrid, ygrid) {
        this._renderer.drawFood(xgrid, ygrid);
    }
    _renderBonus(xgrid, ygrid) {
        this._renderer.drawBonus(xgrid, ygrid);
    }
}
Game.MIN_SPEED = 1;
Game.MAX_SPEED = 9;
Game.MIN_INITIAL = 3;
Game.MAX_INITIAL = 6;
Game.MAX_TIMESTEP = 1000;
Game.SPEED_INCEASE = 0.1;
Game.BONUS_APPEARANCE = 5;
Game.BONUS_TIME = 20;
Game.BONUS_MAXTRIES = 20;
Game.BONUS_BASE = 8;
Game.BONUS_MULTIPLIER = 2;
const canvasEl = document.querySelector("#screen");
const scoreEl = document.querySelector("#score");
const overlayEl = document.querySelector("#overlay");
const SNAKE_START_LENGTH = 5;
let speedSetting = 1;
const settings = {
    pixelSize: 6,
    gridSize: 4,
    gridWidth: 23,
    gridHeight: 13,
    canvas: canvasEl
};
const connectIO = () => {
    const mobile_buttons_toggle = document.querySelector("#show_mobile");
    const mobile_buttons_container = document.querySelector("#mobile_io");
    const btn_up = document.querySelector("#btn_up");
    const btn_left = document.querySelector("#btn_left");
    const btn_right = document.querySelector("#btn_right");
    const btn_down = document.querySelector("#btn_down");
    const btn_start = document.querySelector("#start");
    const btn_speedup = document.querySelector("#speed_up");
    const btn_speeddown = document.querySelector("#speed_down");
    mobile_buttons_toggle.addEventListener("click", () => {
        mobile_buttons_container.style.display = "block";
        mobile_buttons_toggle.style.display = "none";
    });
    btn_up.addEventListener("click", () => {
        game.setDirection(Direction.Up);
    });
    btn_left.addEventListener("click", () => {
        game.setDirection(Direction.Left);
    });
    btn_right.addEventListener("click", () => {
        game.setDirection(Direction.Right);
    });
    btn_down.addEventListener("click", () => {
        game.setDirection(Direction.Down);
    });
    btn_start.addEventListener("click", () => {
        if (!game.running)
            game.new(speedSetting, SNAKE_START_LENGTH);
    });
    btn_speedup.addEventListener("click", () => {
        setSpeed(speedSetting + 1);
    });
    btn_speeddown.addEventListener("click", () => {
        setSpeed(speedSetting - 1);
    });
    window.addEventListener("keydown", (e) => {
        // e.preventDefault();
        switch (e.code) {
            case "ArrowUp":
            case "KeyW":
                game.setDirection(Direction.Up);
                break;
            case "ArrowRight":
            case "KeyD":
                game.setDirection(Direction.Right);
                break;
            case "ArrowDown":
            case "KeyS":
                game.setDirection(Direction.Down);
                break;
            case "ArrowLeft":
            case "KeyA":
                game.setDirection(Direction.Left);
                break;
        }
    });
};
const setScore = (score) => {
    scoreEl.innerText = ("" + score).padStart(4, "0");
};
const showBonus = () => {
    const bonusEl = document.querySelector("#bonus");
    bonusEl.style.display = "block";
};
const setBonus = (time) => {
    const bonusEl = document.querySelector("#bonus");
    bonusEl.innerText = ("" + time).padStart(2, "0");
};
const hideBonus = () => {
    const bonusEl = document.querySelector("#bonus");
    bonusEl.style.display = "none";
};
const setSpeed = (speed) => {
    const speed_up = document.querySelector("#speed_up");
    const speed_down = document.querySelector("#speed_down");
    const speed_value = document.querySelector("#speed_value");
    speed = Math.min(Math.max(speed, Game.MIN_SPEED), Game.MAX_SPEED);
    if (speed === Game.MIN_SPEED) {
        speed_down.style.visibility = "hidden";
    }
    else {
        speed_down.style.visibility = "visible";
    }
    if (speed === Game.MAX_SPEED) {
        speed_up.style.visibility = "hidden";
    }
    else {
        speed_up.style.visibility = "visible";
    }
    speedSetting = speed;
    speed_value.innerText = "" + speed;
};
const showOverlay = (data = null) => {
    const displayStatus = document.querySelector("#overlay_status");
    const displayScore = document.querySelector("#overlay_score");
    if (data === null) {
        displayStatus.style.display = "none";
        displayScore.style.display = "none";
    }
    else {
        displayStatus.innerText = data.win ? "You win!" : "Game over";
        displayScore.innerText = `Score: ${data.score}`;
        displayStatus.style.display = "block";
        displayScore.style.display = "block";
    }
    overlayEl.style.display = "flex";
};
const hideOverlay = () => {
    overlayEl.style.display = "none";
};
const game = new Game(settings);
setSpeed(5);
connectIO();
game.onScore(setScore);
game.onGameStart(hideOverlay);
game.onGameEnd(showOverlay);
game.onBonusStart(showBonus);
game.onBonusEnd(hideBonus);
game.onBonusTick(setBonus);
