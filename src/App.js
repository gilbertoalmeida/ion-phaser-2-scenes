import React from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import { BootScene } from "./BootScene"
import { GameScene } from "./GameScene"

function App() {
  const state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: [BootScene, GameScene]
    }
  }


  const { initialize, game } = state
  return (
    <div className="App">
      <IonPhaser game={game} initialize={initialize} />
    </div>
  );
}

export default App;
