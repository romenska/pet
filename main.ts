input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . . .
        # . . # .
        # . . . .
        # . . # .
        . # . . .
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . # .
        . # . . #
        . . . . #
        . # . . #
        . . . # .
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
    for (let index = 0; index < 5; index++) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.stopAllSounds()
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Happy)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
