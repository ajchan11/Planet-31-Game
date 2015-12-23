function Map( sprite ) {
	this.sprite = sprite
}

Map.prototype.preload = function() {
	game.load.image( this.sprite.name, this.sprite.path )
	// game.load.tilemap('map', 'assets/map/map3.json', null,  Phaser.Tilemap.TILED_JSON);
	// game.load.image('tiles','assets/map/map3.png');
}