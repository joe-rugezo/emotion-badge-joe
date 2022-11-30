input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        # # . # .
        . . . # .
        # # . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	
})
