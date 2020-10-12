input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . # . # .
            . # # # .
            . . # . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . # . # .
            . . # . .
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . # . # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        let y = 0
        led.plot(x, y)
    }
})
input.onGesture(Gesture.Shake, function () {
    counter = 15
    for (let counter = 0; counter <= 15; counter++) {
        basic.showNumber(counter)
    }
    basic.showIcon(IconNames.Surprised)
    basic.clearScreen()
})
let counter = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
