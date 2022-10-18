input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let Atlantis = game.createSprite(1, 1)
let Joker = game.createSprite(randint(1, 4), randint(0, 4))
let Choki = game.createSprite(randint(1, 4), randint(0, 4))
let Loki = game.createSprite(randint(1, 4), randint(0, 4))
game.setScore(0)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        Atlantis.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    while (input.buttonIsPressed(Button.A)) {
        Atlantis.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    while (input.buttonIsPressed(Button.B)) {
        Atlantis.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    while (input.logoIsPressed()) {
        Atlantis.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    if (Atlantis.isTouching(Choki)) {
        game.addScore(1)
        Choki.delete()
    }
    if (Atlantis.isTouching(Joker)) {
        game.addScore(1)
        Joker.delete()
    }
    if (Atlantis.isTouching(Loki)) {
        game.addScore(1)
        Loki.delete()
    }
    if (game.score() == 3) {
        basic.clearScreen()
        basic.showString("CONGRATS, VICTORY")
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    Joker.change(LedSpriteProperty.X, randint(1, 4))
    Joker.change(LedSpriteProperty.Y, randint(0, 4))
    Choki.change(LedSpriteProperty.X, randint(1, 4))
    Choki.change(LedSpriteProperty.Y, randint(0, 4))
    Loki.change(LedSpriteProperty.X, randint(1, 4))
    Loki.change(LedSpriteProperty.Y, randint(0, 4))
})
