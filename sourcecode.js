let looser = 0
let winner = 0
let wallHit = false
let distanceClose = 0
let level1_3: Image[] = []
let distanceY = 0
let level1_2: Image[] = []
let distanceX = 0
let level1_1: Image[] = []
let targetY = 0
let soundLevel: number[] = []
let targetX = 0
let value = 0
let y = 0
let sensitivity = 0
let x = 0
let tick = 0
let level = 0
let levelTargetsY: number[] = []
let completed = false
let levelTargetsX: number[] = []
let restart = false
let soundToggle = false
let difficulty = 0
let inputBPressed = false
let inputAPressed = false
let index = 0
input.onButtonPressed(Button.A, () => {
    inputAPressed = true
})
input.onButtonPressed(Button.B, () => {
    inputBPressed = true
})
index = 0
difficulty = 1
soundToggle = true
restart = true
levelTargetsX = [9]
levelTargetsY = [2]
levelTargetsX.push(16)
levelTargetsY.push(2)
levelTargetsX.push(25)
levelTargetsY.push(2)
levelTargetsX.push(31)
levelTargetsY.push(2)
levelTargetsX.push(40)
levelTargetsY.push(2)
levelTargetsX.push(46)
levelTargetsY.push(2)
levelTargetsX.push(50)
levelTargetsY.push(2)
levelTargetsX.push(54)
levelTargetsY.push(2)
levelTargetsX.push(62)
levelTargetsY.push(2)
soundLevel = [165]
soundLevel.push(165)
soundLevel.push(185)
soundLevel.push(165)
soundLevel.push(196)
soundLevel.push(165)
soundLevel.push(220)
soundLevel.push(208)
level1_1 = [images.createImage(`
    . . . . .
    . . # # #
    . . # . .
    . . # . .
    . . # . .
    `)]
level1_2 = [images.createImage(`
    . . # # #
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)]
level1_3 = [images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    . . . . .
    `)]
level1_1.push(images.createImage(`
    . . . . .
    . # # # #
    . # . . .
    . # . . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    . # # # #
    . # . . .
    . # . . .
    . # . . .
    . # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . # . . .
    . # . . .
    . # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . #
    . . . . .
    . . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . #
    . . . . .
    . . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . #
    . . . . .
    . . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . . . . .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . . . . .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . . . . .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    . . . . .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    . . . . .
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    . . . . .
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    . . . . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . . . . .
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . . . . .
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    . . . . #
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . #
    . . . . #
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . #
    . . . . #
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . . . # .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . . . # .
    . . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . . . # .
    . . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    . . # . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    . . # . .
    . . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    . . # . .
    . . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    . # . . #
    . . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . # . . #
    . . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . # . . #
    . . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . .
    # . . # .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . .
    # . . # .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . .
    # . . # .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . # . .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . # . .
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . # . . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . # . . .
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . # . . .
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . #
    # . . . .
    # . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . #
    # . . . .
    # . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . #
    # . . . .
    # . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . . . . .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . . . . .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . . . . .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    . . . . .
    . . # . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    . . . . .
    . . # . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    . . . . .
    . . # . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    . . . . #
    . # . # #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . . . . #
    . # . # #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . . . . #
    . # . # #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . .
    . . . # .
    # . # # #
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . .
    . . . # .
    # . # # #
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . .
    . . . # .
    # . # # #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . #
    . . # . .
    . # # # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . #
    . . # . .
    . # # # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . #
    . . # . .
    . # # # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . # . . .
    # # # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . # . . .
    # # # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . # . . .
    # # # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    # . . . .
    # # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    # . . . .
    # # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    # . . . .
    # # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    . . . . .
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . . . . .
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . . . . .
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . .
    . . . . #
    . . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . .
    . . . . #
    . . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . .
    . . . . #
    . . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . . # .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . . # .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . # .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . #
    . . # . #
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . #
    . . # . #
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . #
    . . # . #
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . # . # .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . # . # .
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . # . # .
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    # . # . .
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    # . # . .
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    # . # . .
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    . # . . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . # . . .
    . . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . # . . .
    . . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    # . . . .
    . . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . #
    # . . . .
    . . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . #
    # . . . .
    . . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . . . . .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . . . . .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . . . . .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    . . . . #
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    . . . . #
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    . . . . #
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    . # . # #
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . . . # #
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . . . # #
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . .
    # . # # #
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . .
    . . # # #
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . .
    . . # # #
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . # # # #
    . . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . # # # #
    . . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . # # # #
    . . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    # # # # .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    # # # # .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    # # # # .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    # # # . .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    # # # . .
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    # # # . .
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    # # . . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    # # . . .
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    # # . . .
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    # . . . .
    # . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    # . . . .
    # . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    # . . . .
    # . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . . . #
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . . . #
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . . #
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . #
    . . . # .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . #
    . . . # .
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . #
    . . . # .
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . # .
    . . # . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . . # . .
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . # . .
    . # . . .
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    . # . . .
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    . # . . .
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . # . . .
    # . . . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    # . . . .
    . . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    # . . . .
    . . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    . . . . #
    . . . . #
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . #
    . . . . #
    . . . . #
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . #
    . . . . #
    . . . . #
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . . # .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . # .
    . . . # .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . # .
    . . . # .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . # . .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . # . . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . # . . .
    . # . . .
    . # . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . # . . .
    . # . . .
    . # . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    # . . . #
    # . . . #
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    # . . . #
    # . . . #
    # . . . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . . # .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . . # .
    . . . # .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . # .
    . . . # .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    . . # . .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # #
    . . . . .
    . . # . .
    . . # . .
    # # # # #
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . . . . .
    . # . . .
    . # . . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . . . . .
    . # . . .
    . # . . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . . . . .
    . # . . .
    . # . . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . . . . .
    # . . . .
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . . . . .
    # . . . .
    # . . . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . . . . .
    # . . . .
    # . . . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . . . . .
    . . . # .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . . . . .
    . . . # .
    . . . . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . # .
    . . . . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . . . . .
    . . # . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . . . . .
    . . # . .
    . . . . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . # . .
    . . . . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . . . # .
    . # . . .
    . . . # .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . . . # .
    . # . . .
    . . . # .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . . . # .
    . # . . .
    . . . # .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . . # . .
    # . . . .
    . . # . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . . # . .
    # . . . .
    . . # . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . . # . .
    # . . . .
    . . # . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    . # . . .
    . . . . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    . # . . .
    . . . . .
    . # . . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    . # . . .
    . . . . .
    . # . . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # # .
    # . . . .
    . . . . .
    # . . . .
    `))
level1_2.push(images.createImage(`
    # # # # .
    # . . . .
    . . . . .
    # . . . .
    # # # # .
    `))
level1_3.push(images.createImage(`
    # . . . .
    . . . . .
    # . . . .
    # # # # .
    . . . . .
    `))
level1_1.push(images.createImage(`
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    `))
level1_2.push(images.createImage(`
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    `))
level1_3.push(images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    `))
basic.forever(() => {
    if (inputAPressed) {
        inputAPressed = false
        basic.clearScreen()
        basic.showString("S")
        basic.pause(200)
        if (soundToggle) {
            soundToggle = false
            basic.showNumber(0)
        } else {
            soundToggle = true
            basic.showNumber(1)
        }
        basic.pause(200)
    }
    if (inputBPressed) {
        inputBPressed = false
        restart = true
        difficulty += 1
        if (5 < difficulty) {
            difficulty = 1
        }
        basic.clearScreen()
        basic.showString("D")
        if (soundToggle) {
            if (1 == difficulty) {
                music.playTone(131, music.beat(BeatFraction.Whole))
            }
            if (2 == difficulty) {
                music.playTone(165, music.beat(BeatFraction.Whole))
            }
            if (3 == difficulty) {
                music.playTone(196, music.beat(BeatFraction.Whole))
            }
            if (4 == difficulty) {
                music.playTone(247, music.beat(BeatFraction.Whole))
            }
            if (5 == difficulty) {
                music.playTone(294, music.beat(BeatFraction.Whole))
            }
        }
        basic.pause(200)
        basic.showNumber(difficulty)
        basic.pause(200)
    }
    if (restart) {
        restart = false
        completed = false
        level = 0
        basic.clearScreen()
        basic.showString("L")
        if (soundToggle) {
            for (let index2 = 0; index2 <= level; index2++) {
                if (index2 < soundLevel.length) {
                    value = soundLevel[index2]
                    music.playTone(value, music.beat(BeatFraction.Half))
                    basic.pause(100)
                }
            }
        }
        basic.pause(100)
        basic.showNumber(level + 1)
        basic.pause(200)
        targetX = levelTargetsX[level]
        targetY = levelTargetsY[level]
        x = 2
        y = 2
        sensitivity = 325 - difficulty * 50
    }
    pins.analogWritePin(AnalogPin.P8, 0)
    pins.analogWritePin(AnalogPin.P12, 64 * difficulty)
    tick += 1
    if (sensitivity < input.acceleration(Dimension.X)) {
        x += 1
    }
    if (input.acceleration(Dimension.X) < -1 * sensitivity) {
        x += -1
    }
    if (sensitivity < input.acceleration(Dimension.Y)) {
        y += 1
    }
    if (input.acceleration(Dimension.Y) < -1 * sensitivity) {
        y += -1
    }
    if (y == 1) {
        level1_1[x].showImage(0)
    }
    if (y == 2) {
        level1_2[x].showImage(0)
    }
    if (y == 3) {
        level1_3[x].showImage(0)
    }
    distanceX = targetX - x
    distanceY = targetY - y
    distanceClose = 10 - Math.abs(distanceX)
    if (distanceClose < 0) {
        distanceClose = 0
    }
    pins.analogWritePin(AnalogPin.P16, 64 * distanceClose)
    if (Math.abs(distanceX) <= 1 && Math.abs(distanceY) <= 1) {
        level += 1
        if (9 <= level) {
            completed = true
            basic.clearScreen()
            winner = Math.random(5)
            if (winner == 0) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
                }
                basic.showString("YES!")
            }
            if (winner == 1) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
                }
                basic.showString("FREEDOM!")
            }
            if (winner == 2) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
                }
                basic.showString("HA!")
            }
            if (winner == 3) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
                }
                basic.showString("MADE IT MOM!")
            }
            if (winner == 4) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
                }
                basic.showString("...GG EZ...")
            }
            basic.pause(200)
            restart = true
        } else {
            basic.clearScreen()
            basic.showString("L")
            if (soundToggle) {
                for (let index3 = 0; index3 <= level; index3++) {
                    if (index3 < soundLevel.length) {
                        value = soundLevel[index3]
                        music.playTone(value, music.beat(BeatFraction.Half))
                        basic.pause(100)
                    }
                }
            }
            basic.pause(100)
            basic.showNumber(level + 1)
            basic.pause(200)
            targetX = levelTargetsX[level]
            targetY = levelTargetsY[level]
            sensitivity += -1 * difficulty
        }
    } else {
        wallHit = led.point(2, 2)
        if (true == wallHit) {
            restart = true
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, 512)
            looser = Math.random(5)
            if (looser == 0) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
                }
                basic.showString("NO!")
            }
            if (looser == 1) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
                }
                basic.showString("DOH!")
            }
            if (looser == 2) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
                }
                basic.showString("DIE!")
            }
            if (looser == 3) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
                }
                basic.showString("SHIT!")
            }
            if (looser == 4) {
                if (soundToggle) {
                    music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
                }
                basic.showString("CRAP!")
            }
            basic.pause(200)
        }
    }
    led.plot(2, 2)
    basic.pause(sensitivity)
})
