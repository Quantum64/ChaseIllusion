import React, { Component } from 'react';
import * as PIXI from 'pixi.js'
import './App.css';

const speed = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.application = new PIXI.Application({ width: window.innerWidth + 1, height: window.innerHeight, transparent: false })
    this.stage = this.application.stage;
    this.stage.interactive = true;
    this.stage.mousemove = event => this.updatePosition(event);
    this.stage.touchmove = event => this.updatePosition(event);
    this.stage.mousedown = event => this.handleClick(event);
    this.stage.tap = event => this.handleClick(event);
    this.mouseX = 0;
    this.mouseY = 0;
    this.mode = -1;
    this.circles = [];
  }

  setupPixiContext(element) {
    this.pixiContext = element;
    if (element && element.children.length === 0) {
      element.appendChild(this.application.view);
      this.loadAssets();
    }
  }

  loadAssets() {
    PIXI.loader
      .add("map", "assets/seamless" + Math.floor(Math.random() * 3) + ".jpg")
      .load(() => this.initialize());
  }

  initialize() {
    this.map = new PIXI.extras.TilingSprite(PIXI.loader.resources["map"].texture, this.application.renderer.width, this.application.renderer.height);
    this.map.tileScale.x = 0.5;
    this.map.tileScale.y = 0.5;
    this.stage.addChild(this.map);

    for (let index = 0; index < 2; index++) {
      const circle = new PIXI.Graphics();
      circle.beginFill(index === 0 ? 0xba0000 : 0x0047ba);
      circle.lineStyle(0);
      circle.drawCircle(100, 100, 10);
      circle.endFill();

      const sprite = new PIXI.Sprite(circle.generateCanvasTexture());
      this.circles.push(sprite);
      this.stage.addChild(sprite);
    }

    this.circles[0].x = (this.application.renderer.width / 2) - (this.circles[0].width / 2)
    this.circles[0].y = (this.application.renderer.height / 2) - (this.circles[0].height / 2)

    this.application.ticker.add(() => this.animate());
  }

  updatePosition(event) {
    this.mouseX = event.data.global.x;
    this.mouseY = event.data.global.y;
  }

  handleClick(event) {
    this.mode *= -1;
  }

  animate() {
    let offset = normalize({
      x: this.mouseX - (this.application.renderer.width / 2),
      y: this.mouseY - (this.application.renderer.height / 2)
    }, speed)
    let position = normalize({
      x: offset.x,
      y: offset.y
    }, 30 + Math.sqrt(Math.pow(this.mouseX - (this.application.renderer.width / 2), 2) + Math.pow(this.mouseY - (this.application.renderer.height / 2), 2)) / 10)

    this.map.tilePosition.x += offset.x * this.mode;
    this.map.tilePosition.y += offset.y * this.mode;
    this.map.tilePosition.x %= this.map.texture.orig.width;
    this.map.tilePosition.y %= this.map.texture.orig.height;
    this.circles[1].x = (this.application.renderer.width / 2) + (position.x) - (this.circles[1].width / 2);
    this.circles[1].y = (this.application.renderer.height / 2) + (position.y) - (this.circles[1].height / 2);
  }

  render() {
    return (
      <div className="App">
        <div ref={(element) => this.setupPixiContext(element)} />;
      </div>
    );
  }
}

export default App;

function normalize(point, len) {
  if ((point.x === 0 && point.y === 0)) {
    return { x: 0, y: 0 };
  }
  var angle = Math.atan2(point.y, point.x);
  var nx = Math.cos(angle) * len;
  var ny = Math.sin(angle) * len;
  return { x: nx, y: ny };
} 
