function loadMap() {
	game.load.tilemap( 'islands', 'assets/map/mapish.json', null, Phaser.Tilemap.TILED_JSON )
    game.load.image( 'tiles', 'assets/map/LPC_Terrain/terrain.png' )
    game.load.image( 'player', 'assets/img/captain_32.png' )
}

function createMap() {
	//GAME SETUP
	//==================

	//MAP SETUP
	//map is equal to the game sprite/image of 'islands' from the load que
	map = game.add.tilemap( 'islands' )
	//adding to map the terrain tileSet, from the tiles image in the load que
	map.addTilesetImage( 'terrain', 'tiles' )
	//Seting collisions for ground
	map.setCollisionBetween( 190, 400, true, 1 )

	//layer is set to the land layer for colliding with the player
	layer = map.createLayer( 'land' )

	//layer2 is set to the water for collision when player is on land
	layer2 = map.createLayer( 'water' )
	//Fit layer and layer2 to fit world
	layer.resizeWorld()
	layer2.resizeWorld()
	//==================

	//PLAYER SETUP
	//==================
}

function update() {

}