buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
    media.sendCode(media.keys(media._MediaKey.vol_up))
    basic.showLeds(`
        # . . # .
        # # . # .
        # # # # .
        # # . # .
        # . . # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    media.sendCode(media.keys(media._MediaKey.vol_down))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
    if (PLAY == false) {
        PLAY = true
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        PLAY = false
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    media.sendCode(media.keys(media._MediaKey.mute))
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    media.sendCode(media.keys(media._MediaKey.vol_up))
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    media.sendCode(media.keys(media._MediaKey.next))
    media.sendCode(media.keys(media._MediaKey.vol_down))
    basic.showLeds(`
        . # . . #
        . # . # #
        . # # # #
        . # . # #
        . # . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
let PLAY = false
media.startMediaService()
music.play(music.stringPlayable("C5 B G B A F E D ", 227), music.PlaybackMode.InBackground)
basic.showString("MUSIC 2")
basic.showString("S-S")
basic.pause(1000)
PLAY = false
basic.forever(function () {
    if (PLAY == true) {
        pins.analogWritePin(AnalogPin.P0, 1023)
    } else if (PLAY == false) {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
