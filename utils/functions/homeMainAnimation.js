import anime from "animejs/lib/anime.es.js"

export default function homeMainAnimation(cubeRef) {
  // const cube = document.querySelector(".cube")
  const cube = cubeRef
  const { height } = getComputedStyle(cube)
  const cubeSideLength =
    Number.parseInt(height.slice(0, height.length - 2)) || 150
  const easingUpDown = "spring(0.7, 70, 7, 0)"

  const cubesMoving = anime
    .timeline({
      easing: "easeInOutSine",
      loop: true,
      autoplay: true,
    })
    //cubes up
    .add({
      targets: ".two",
      translateX: cubeSideLength * 0.7,
      translateY: cubeSideLength * -0.12,
      duration: 1,
    })
    .add(
      {
        targets: ".one",
        translateY: cubeSideLength * -0.5,
        duration: 1,
      },
      "-=5"
    )
    .add(
      {
        targets: ".four",
        translateX: cubeSideLength * 2.11,
        translateY: cubeSideLength * -0.12,
        duration: 1,
      },
      "-=5"
    )
    .add(
      {
        targets: ".five",
        translateX: cubeSideLength * 2.82,
        translateY: cubeSideLength * -0.5,
        duration: 1,
      },
      "-=5"
    )
    .add(
      {
        targets: ".three",
        translateX: cubeSideLength * 1.41,
        translateY: cubeSideLength * -0.5,
        duration: 1,
      },
      "-=5"
    )
    //cubes down
    .add({
      targets: ".two",
      translateY: cubeSideLength * 0.39,
      easing: easingUpDown,
      // duration: 10000
    })
    .add(
      {
        targets: ".one",
        translateY: 0,
        easing: easingUpDown,
        // duration: 400
      },
      "-=1350"
    )
    .add(
      {
        targets: ".four",
        translateY: cubeSideLength * 0.39,
        easing: easingUpDown,
        // duration: 200
      },
      "-=1300"
    )
    .add(
      {
        targets: ".five",
        translateY: 0,
        easing: easingUpDown,
        // duration: 200
      },
      "-=1350"
    )
    .add(
      {
        targets: ".three",
        translateY: 0,
        easing: easingUpDown,
        // duration: 300
      },
      "-=1400"
    )
    //change cube 4 and 5
    .add(
      {
        targets: ".four",
        translateY: -cubeSideLength,
        easing: easingUpDown,
        // duration: 500
      },
      "-=1000"
    )
    .add(
      {
        targets: ".five",
        translateX: cubeSideLength * 2.11,
        translateY: cubeSideLength * 0.39,
        duration: 600,
      },
      "-=1200"
    )
    .add(
      {
        targets: ".four",
        translateX: cubeSideLength * 2.82,
        duration: 600,
      },
      "-=590"
    )
    .add({
      targets: ".five",
      zIndex: {
        value: [1, 5],
        round: true,
      },
      duration: 2,
    })
    .add({
      targets: ".four",
      translateX: cubeSideLength * 2.82,
      translateY: cubeSideLength * 0,
      easing: easingUpDown,
      // duration: 900
    })
    //change cube 2 and 1
    .add(
      {
        targets: ".two",
        translateY: -cubeSideLength,
        easing: easingUpDown,
        // duration: 500
      },
      "-=1000"
    )
    .add(
      {
        targets: ".one",
        translateX: cubeSideLength * 0.7,
        translateY: cubeSideLength * 0.39,
        duration: 500,
      },
      "-=1000"
    )
    .add(
      {
        targets: ".two",
        translateX: 0,
        duration: 600,
      },
      "-=600"
    )
    .add({
      targets: ".one",
      zIndex: {
        value: [1, 5],
        round: true,
      },
      duration: 5,
    })
    .add({
      targets: ".two",
      translateY: 0,
      easing: easingUpDown,
      // duration: 500
    })
    //change cube 3 and 5
    .add(
      {
        targets: ".three",
        translateY: -cubeSideLength,
        easing: easingUpDown,
        // duration: 500
      },
      "-=900"
    )
    .add(
      {
        targets: ".five",
        zIndex: {
          value: [5, 3],
          round: true,
        },
        duration: 2,
      },
      "-=1000"
    )
    .add(
      {
        targets: ".three",
        zIndex: {
          value: [0, 6],
          round: true,
        },
        duration: 2,
      },
      "-=900"
    )
    .add(
      {
        targets: ".five",
        translateX: cubeSideLength * 1.41,
        translateY: 0,
        duration: 600,
      },
      "-=900"
    )
    .add(
      {
        targets: ".three",
        translateX: cubeSideLength * 2.11,
        translateY: cubeSideLength * -0.5,
        duration: 500,
      },
      "-=200"
    )
    .add({
      targets: ".three",
      translateY: cubeSideLength * 0.39,
      easing: easingUpDown,
      // duration: 600
    })
    //cubes up
    .add(
      {
        targets: ".four",
        translateY: cubeSideLength * -0.5,
        easing: easingUpDown,
        // duration: 1000
      },
      "-=1000"
    )
    .add(
      {
        targets: ".five",
        translateY: cubeSideLength * -0.5,
        easing: easingUpDown,
        // duration: 1000
      },
      "-=1300"
    )
    .add(
      {
        targets: ".one",
        translateY: cubeSideLength * -0.12,
        easing: easingUpDown,
        // duration: 1000
      },
      "-=1200"
    )
    .add(
      {
        targets: ".two",
        translateY: cubeSideLength * -0.5,
        easing: easingUpDown,
        // duration: 1000
      },
      "-=1350"
    )
    .add(
      {
        targets: ".three",
        translateY: cubeSideLength * -0.12,
        easing: easingUpDown,
        // duration: 1000
      },
      "-=1400"
    )
  return cubesMoving
}
// cubesMoving.play()
