import Phaser from "phaser"

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "bootGame" })
  }

  preload() {
    console.log("load image")
    this.load.image("star", "assets/star.png")
  }

  create() {
    console.log("create boot scene")
    this.add.image(10, 10, "star")
    this.add.text(20, 20, "Loading game...", { font: "25px Arial", fill: "yellow" })
    this.scene.start("playGame")
  }
}