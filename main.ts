input.onButtonPressed(Button.A, () => {
    let aantal = Math.randomRange(5, 10);
    for (let index = 0; index < aantal; index++) {
        basic.showNumber(Math.randomRange(0, 8) + 1);
    }
    game.addScore(1);
    basic.pause(150);
    basic.showNumber(Math.randomRange(1, 9));
})
