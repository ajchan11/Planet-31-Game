var game
var map
var player
var playerShip
var cursors
var move
var land
var islands
var floorLayer, waterLayer, furnLayer, wallLayer, doorLayer, peepLayer
var layers =  [ floorLayer, waterLayer, furnLayer, wallLayer, doorLayer, peepLayer ]
var windowHeight, windowWidth

//======TEST global varibales if needed==========
// var ruby
// var pirate1
// var guard1
// var walder
// var hank
// var guard2
// var guard3
// var joey
// var isabel
// var andre
// var alexis
// var stephanie
// var tom
// var matt
// var pguard1
// var pguard2
// var pguard3
// var inmate1
// var inmate2
// var inmate3
// var inmate4
// var inmate5
// var inmate6
// var inmate7
// var bigboss
// var gboss1
// var gboss2
// var ervin
// var blanks
//================
/**********************************************************************/
function preload() {
	MAP.load()
	NPC.load()
}
/**********************************************************************/
function create() {
	//Define game physics
	game.physics.startSystem( Phaser.Physics.ARCADE )

	//CREATES MAP AND LAYERS
	MAP.create()


	//========Player Physics/Creation===============
	player = game.add.sprite( 1408, 1472, 'player' )
	game.physics.enable( player )

    // game.physics.arcade.gravity.y = 250;

    // player.body.bounce.y = 0.2;
    // player.body.linearDamping = 1;
    player.body.collideWorldBounds = true;

    game.camera.follow( player )

	cursors = game.input.keyboard.createCursorKeys()
	//================================================


	game.world.setBounds(0, 0, 6400, 6400);

	game.physics.startSystem(Phaser.Physics.ARCADE);

	// player = game.add.sprite(100, 100, 'naval_ship');
	// player = navalShip.create()
	// enemy = pirateShip.create()

	player.shoot = function( x, y ) {
		this.position.x = x
		this.position.y = y
	}

	game.physics.arcade.enable(player);
	// player.body.static = true
	// game.physics.arcade.enable(enemy);
	// enemy.body.static = true
	cursors = game.input.keyboard.createCursorKeys();

	game.camera.follow(player);

	cursors.W = game.input.keyboard.addKey( 87 )
	cursors.A = game.input.keyboard.addKey( 65 )
	cursors.S = game.input.keyboard.addKey( 83 )
	cursors.D = game.input.keyboard.addKey( 68 )
	// ship.create()

	// enemy.inputEnabled = true
	// enemy.events.onInputDown.add( function() {
	// 	// console.log( enemy )
	// 	player.shoot( enemy.position.x, enemy.position.y )
	// }, this )


	var button1 = this.input.keyboard.addKey(Phaser.KeyCode.ONE);
	var button2 = this.input.keyboard.addKey(Phaser.KeyCode.TWO);
	var button3 = this.input.keyboard.addKey(Phaser.KeyCode.THREE);

	button1.onDown.add(function(key)
		{
			console.log("boom")
		}, this);

	//CREATES NPCs AND TEXT BOXES
	NPC.create()
}
/**********************************************************************/
function update() {

	// game.physics.arcade.collide( player, floorLayer )

	player.body.velocity.x = 0;
	player.body.velocity.y = 0;

	if ( cursors.up.isDown ) {
		player.body.velocity.y = -300
	} else if ( cursors.down.isDown ) {
		player.body.velocity.y = 300
	} else if ( cursors.left.isDown ) {
		player.body.velocity.x = -300
	} else if ( cursors.right.isDown ) {
		player.body.velocity.x = 300
	}

	NPC.update()

}
/**********************************************************************/
function render() {
	game.debug.cameraInfo(game.camera, 32, 32);
	game.debug.spriteCoords(player, 32, 500);

}
/**********************************************************************/
window.onload = function() {
	windowHeight = window.innerHeight
	windowWidth = window.innerWidth
	game = new Phaser.Game(windowWidth - 100, windowHeight - 100, Phaser.Auto, 'Test-Planet', { preload: preload, create: create, update: update, render: render } )
}
/**********************************************************************/