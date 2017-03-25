class GunController {
  constructor(spriteName, playerSprite) {
    this.fatherSprite = playerSprite;
    this.sprite = Dotf.game.add.sprite(this.fatherSprite.body.x, this.fatherSprite.body.y, spriteName);
    Dotf.game.physics.arcade.enable(this.sprite);
    this.sprite.body.fixedRotation = true;
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(3);
  }
  update() {
    this.sprite.body.x = this.fatherSprite.body.x + 10;
    this.sprite.body.y = this.fatherSprite.body.y + 55;
  }
}
