buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
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
    } else {
        PLAY = false
    }
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    basic.pause(500)
    basic.clearScreen()
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
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    media.sendCode(media.keys(media._MediaKey.stop))
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
let PLAY = false
basic.showString("MUSIC 2")
media.startMediaService()
music.play(music.stringPlayable("C5 B G B A F E D ", 227), music.PlaybackMode.InBackground)
basic.showString("SELECT STOP")
basic.pause(500)
PLAY = false
basic.forever(function () {
    if (PLAY == true) {
    	
    }
})
