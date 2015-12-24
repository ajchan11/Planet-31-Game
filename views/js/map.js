function loadMap() {
	game.load.tilemap( 'islands', 'assets/map/allmap1.json', null, Phaser.Tilemap.TILED_JSON )
    game.load.image( 'terrainTiles', 'assets/map/LPC_Terrain/terrain.png' )
    game.load.image( 'thingTiles', 'assets/map/LPC_Terrain/things1.png' )
	game.load.image( 'tiles3Tiles', 'assets/map/LPC_Terrain/tiles3.png' )
	game.load.image( 'dungonTiles', 'assets/map/LPC_Terrain/dungonTiles1.png' )
	game.load.image( 'player', 'assets/img/captain_32.png' )
}

function createMap() {
	//GAME SETUP
	//==================

	//MAP SETUP
	//map is equal to the game sprite/image of 'islands' from the load que
	map = game.add.tilemap( 'islands' )
	//adding to map the terrain tileSet, from the tiles image in the load que
	map.addTilesetImage( 'terrain', 'terrainTiles' )
	map.addTilesetImage( 'things1', 'thingTiles' )
	map.addTilesetImage( 'tiles3', 'tiles3Tiles' )
	map.addTilesetImage( 'dungonTiles1', 'dungonTiles' )

	//Seting collisions for ground
	map.setCollisionBetween( 190, 400, true, 1 )

	//layer is set to the land layer for colliding with the player
	floorLayer = map.createLayer( 'floor' )

	//layer2 is set to the water for collision when player is on land
	waterLayer = map.createLayer( 'water' )

	furnLayer = map.createLayer( 'furniture' )
	wallLayer = map.createLayer( 'walls' )
	doorLayer = map.createLayer( 'door and chest' )
	// peepLayer = map.createLayer( 'peep' )

	//Fit layer and layer2 to fit world
	// layer.resizeWorld()
	// layer2.resizeWorld()
	//==================

	//PLAYER SETUP
	//==================
}

function update() {

}