let BONECO: game.LedSprite = null
let OBSTACULO: game.LedSprite = null
let OBSTACULO_2: game.LedSprite = null
let OBSTACULO_3: game.LedSprite = null
let OBSTACULO_4: game.LedSprite = null
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    BONECO = game.createSprite(2, 2)
    OBSTACULO = game.createSprite(5, 1)
    OBSTACULO_2 = game.createSprite(5, 3)
    OBSTACULO_3 = game.createSprite(5, 4)
    OBSTACULO_4 = game.createSprite(5, 0)
})
input.onButtonPressed(Button.A, function () {
    BONECO.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    BONECO.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (OBSTACULO.isTouchingEdge()) {
        OBSTACULO.change(LedSpriteProperty.X, -1)
    }
    if (OBSTACULO_2.isTouchingEdge()) {
        OBSTACULO_2.change(LedSpriteProperty.X, -1)
    }
    if (OBSTACULO_3.isTouchingEdge()) {
        OBSTACULO_3.change(LedSpriteProperty.X, -1)
    }
    if (OBSTACULO_4.isTouchingEdge()) {
        OBSTACULO_4.change(LedSpriteProperty.X, -1)
    }
    OBSTACULO.change(LedSpriteProperty.X, 1)
    OBSTACULO_2.change(LedSpriteProperty.X, 1)
    OBSTACULO_3.change(LedSpriteProperty.X, 1)
    OBSTACULO_4.change(LedSpriteProperty.X, 1)
    if (BONECO.isDeleted()) {
        game.gameOver()
    }
    if (BONECO.isTouching(OBSTACULO)) {
        BONECO.delete()
    }
    if (BONECO.isTouching(OBSTACULO_2)) {
        BONECO.delete()
    }
    if (BONECO.isTouching(OBSTACULO_3)) {
        BONECO.delete()
    }
    if (BONECO.isTouching(OBSTACULO_4)) {
        BONECO.delete()
    }
})
