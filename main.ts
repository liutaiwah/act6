radio.onReceivedNumber(function (receivedNumber) {
    serial_number = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (voter.indexOf(serial_number) == -1) {
        voter.push(serial_number)
        if (receivedNumber == 1) {
            YES += 1
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    voter = []
    YES = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(YES)
})
let serial_number = 0
let YES = 0
let voter: number[] = []
radio.setGroup(25)
radio.setTransmitSerialNumber(true)
voter = []
YES = 0
