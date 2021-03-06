bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Square)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteNumber(num)
    num += 1
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = parseFloat(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    if (cmd == 6) {
        basic.showArrow(ArrowNames.North)
    } else if (cmd == 7) {
        basic.showArrow(ArrowNames.West)
    } else if (cmd == 8) {
        basic.showArrow(ArrowNames.East)
    } else if (cmd == 9) {
        basic.showArrow(ArrowNames.South)
    } else if (cmd == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showNumber(cmd)
    }
})
let cmd = 0
let num = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Yes)
