class ImageLoader {
  constructor() {
    this.images = {};
    this.numberOfImages = 0;
    this.numberOfLoadedImages = 0;
    this.init();
  }

  init() {
    this.loadImage("gateTileSheet", "images/gate-tileset.png");
    this.loadImage("garyTile", "images/gary-tile.png");
    this.loadImage("playerSpriteSheet", "images/player.png");

    this.numberOfImages = Object.keys(this.images).length;
  }

  loadImage(identifier, source) {
    var that = this;
    let image = new Image();
    image.src = source;
    image.onload = () => that.numberOfLoadedImages++;
    this.images[identifier] = image;
  }

  hasAllImagesLoaded() {
    return this.numberOfLoadedImages == this.numberOfImages ? true : false;
  }
}
