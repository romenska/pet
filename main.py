def on_button_pressed_a():
    music.stop_all_sounds()
    music.play(music.create_sound_expression(WaveShape.NOISE,
            54,
            54,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_string("Hello!")
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.stop_all_sounds()
    music.play(music.create_sound_expression(WaveShape.NOISE,
            54,
            54,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    music.stop_all_sounds()
    for index in range(5):
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                200,
                1,
                255,
                0,
                100,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HAPPY)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    music.stop_all_sounds()
    music.play(music.builtin_playable_sound_effect(soundExpression.hello),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_icon(IconNames.ASLEEP)
    basic.show_icon(IconNames.HAPPY)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

basic.show_leds("""
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)