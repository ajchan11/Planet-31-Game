function Map( sprite ) {
	this.sprite = sprite
}

Map.prototype.preload = function() {
	game.load.image( this.sprite.name, this.sprite.path )
}