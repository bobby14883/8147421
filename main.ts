rekabit.setAllRgbPixelsColor(0xff0000)
zoombit.setHeadlight(HeadlightChannel.All, zoombit.digitalStatePicker(DigitalIoState.On))
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    if (zoombit.readUltrasonic() < 30) {
        zoombit.turn(TurnDirection.Left, 128)
    } else {
        zoombit.brake()
    }
})
