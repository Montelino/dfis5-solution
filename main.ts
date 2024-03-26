let Variable = 0
input.onButtonPressed(Button.AB, function () {
    Variable = randint(0, 2)
    if (Variable == 0) {
        basic.showIcon(IconNames.Square)
    } else if (Variable == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
