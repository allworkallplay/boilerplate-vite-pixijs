import * as PIXI from 'pixi.js';

export default class App {

    constructor () {
        this.dom = {};

        // pixi
        this.pixi = null;
        this.stage = null;
        this.scene = null;
    }

    init () {
        this.dom.app = document.getElementById('app');

        this.setupScene();

        this.initComplete();
    }

    initComplete () {
        this.pixi.ticker.add(this.pixiUpdate.bind(this));
    }

    setupScene () {
        this.pixi = new PIXI.Application({
            // width: document.body.width,
            // height: document.body.height,
            antialias: true,
            transparent: false,
            resolution: 1,
            backgroundColor: "#151515",
            resizeTo: window,
            sharedTicker: true,
            //interactive: true,
        });
        this.dom.app.appendChild(this.pixi.view);

        this.stage = this.pixi.stage;

        this.scene = new PIXI.Container();
        this.pixi.stage.addChild(this.scene);
        // this.scene.eventMode = 'static';
        // this.scene.hitArea = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
    }

    pixiUpdate () {
        this.pixi.renderer.render(this.stage);
    }

    onResize () {
        this.pixi.renderer.resize(window.innerWidth, window.innerHeight);
    }
}