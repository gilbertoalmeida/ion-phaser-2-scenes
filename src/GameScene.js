import Phaser from "phaser"

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "playGame" })
  }

  create() {
    console.log("create game scene")
    this.add.image(0, 0, "star")
    this.add.text(20, 20, "Playing game...", { font: "25px Arial", fill: "yellow" })
  }
}