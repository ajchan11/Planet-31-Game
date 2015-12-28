MAP = {
	load: function() {
		//////////////////////////////////////////////
		////////     Map And Terrain  ////////////////
		//////////////////////////////////////////////
		game.load.tilemap( 'islands', 'assets/map/allmap1.json', null, Phaser.Tilemap.TILED_JSON )
		game.load.image( 'terrainTiles', 'assets/map/LPC_Terrain/terrain.png' )
		game.load.image( 'dunTiles', 'assets/map/LPC_Terrain/dungonTiles1.png' )
		game.load.image( 'tiles3Tiles', 'assets/map/LPC_Terrain/tiles3.png' )
		game.load.image( 'thingsTiles', 'assets/map/LPC_Terrain/things1.png' )
		game.load.image( 'player', 'assets/img/captain_32.png' )
	},
/************************************/
	create: function() {
		//===============Map load tilesets====================
		map = game.add.tilemap( 'islands' )
		// map.addTilesetImage( 'terrain', 'terrainTiles' )
		console.log("1")

		map.addTilesetImage( 'terrain', 'terrainTiles' )
		map.addTilesetImage( 'dungonTiles1', 'dunTiles' )
		map.addTilesetImage( 'tiles3', 'tiles3Tiles' )
		map.addTilesetImage( 'things1', 'thingsTiles' )

		console.log("2")
		//Seting collisions for ground
		map.setCollisionBetween( 190, 400, true, 1 )
		waterLayer = map.createLayer( 'water' )
		floorLayer = map.createLayer( 'floor' )
		furnLayer  = map.createLayer( 'furniture' )
		wallLayer  = map.createLayer( 'walls' )
		// doorLayer  = map.createLayer( 'door and chest' )
		// peepLayer  = map.createLayer( 'peeps' )


		waterLayer.resizeWorld()
		floorLayer.resizeWorld()
		furnLayer.resizeWorld()
		wallLayer.resizeWorld()
		// doorLayer.resizeWorld()
		// peepLayer.resizeWorld()

		console.log("3")
		// waterLayer.debug = true
		// floorLayer.debug = true
		//===============================================

	},
/************************************/
	update: function() {

	}
}