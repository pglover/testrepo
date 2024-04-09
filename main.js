import Phaser from "phaser";
import LevelOne from "./scenes/LevelOne";
import LevelTwo from "./scenes/LevelTwo";
import Preload from "./scenes/Preload";

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 1920,
  height: 1080,
  backgroundColor: "#2F2F2F",
  scale: {
    mode: Phaser.Scale.FIT,
  },
  scene: [Preload, LevelOne, LevelTwo],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 800,
      },
    },
  },
};

new Phaser.Game(config);
