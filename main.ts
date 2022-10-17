input.onButtonPressed(Button.A, function () {
    Atlantis.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Atlantis.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Atlantis.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Atlantis.change(LedSpriteProperty.Y, -1)
})
let Atlantis: game.LedSprite = null
Atlantis = game.createSprite(1, 1)
let Joker = game.createSprite(randint(1, 4), 2)
let Choki = game.createSprite(randint(1, 4), 3)
let Loki = game.createSprite(randint(1, 4), 4)
basic.forever(function () {
    while (Atlantis.isTouching(Choki)) {
        Atlantis.delete()
        Choki.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(100)
        }
        music.playMelody("C D E F G A B C5 ", 120)
        game.gameOver()
    }
    while (Atlantis.isTouching(Joker)) {
        Atlantis.delete()
        Joker.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(100)
        }
        music.playMelody("C D E F G A B C5 ", 120)
        game.gameOver()
    }
    while (Atlantis.isTouching(Loki)) {
        Atlantis.delete()
        Loki.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(100)
        }
        music.playMelody("C D E F G A B C5 ", 120)
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    Joker.change(LedSpriteProperty.X, 1)
    Choki.change(LedSpriteProperty.X, 1)
    Loki.change(LedSpriteProperty.X, 1)
})
