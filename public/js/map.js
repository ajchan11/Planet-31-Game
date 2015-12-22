window.onload = function() {

    game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
   	navalShip = new Ship( { spriteName: "naval_ship", spritePath: 'assets/sprites/naval_ship_sprite1.png', spriteW: 64, spriteH: 64 })
	pirateShip = new Ship( { spriteName: "pirate_ship", spritePath: 'assets/sprites/pirate_ship_sprite1.png', spriteW: 64, spriteH: 64 })
    console.log("loading")
    function preload() {

        game.load.image('background','assets/img/mapgame.png');
        game.load.image('player','assets/img/pirate1.png');
		navalShip.preload()
		pirateShip.preload()
    }

    var player;
	var enemy
    var cursors;
	var enemyMove, move;

    function create() {

        game.add.tileSprite(0, 0, 3200, 3200, 'background');

        game.world.setBounds(0, 0, 3200, 3200);

        game.physics.startSystem(Phaser.Physics.ARCADE);

        // player = game.add.sprite(100, 100, 'naval_ship');
		player = navalShip.create()
		enemy = pirateShip.create()

		player.shoot = function( x, y ) {
			this.position.x = x
			this.position.y = y
		}

        game.physics.arcade.enable(player);
		// player.body.static = true
		game.physics.arcade.enable(enemy);
		// enemy.body.static = true
        cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(player);

		cursors.W = game.input.keyboard.addKey( 87 )
		cursors.A = game.input.keyboard.addKey( 65 )
		cursors.S = game.input.keyboard.addKey( 83 )
		cursors.D = game.input.keyboard.addKey( 68 )
		// ship.create()

		enemy.inputEnabled = true
		enemy.events.onInputDown.add( function() {
			// console.log( enemy )
			player.shoot( enemy.position.x, enemy.position.y )
		}, this )

    }

    function update() {

        player.body.velocity.x = 0;
		player.body.velocity.y = 0;

		enemy.body.velocity.x = 0;
		enemy.body.velocity.y = 0;

		game.physics.arcade.collide( player, enemy )

        if (cursors.up.isDown)
        {
			move = 'up'
            player.body.velocity.y = -300
        }
        else if (cursors.down.isDown)
        {
			move = 'down'
            player.body.velocity.y = 300
			// player.animations.play( move )
        }

        if (cursors.left.isDown)
        {
			move = 'left'
            player.body.velocity.x = -300
        }
        else if (cursors.right.isDown)
        {
			move = 'right'
 			player.body.velocity.x = 300
        }


		//Enemy Controls
		//====================
		if ( cursors.W.isDown ) {
			enemyMove = 'up'
			enemy.body.velocity.y = -300
		}
		else if ( cursors.A.isDown ) {
			enemyMove = 'left'
			enemy.body.velocity.x = -300
		}
		else if ( cursors.S.isDown ) {
			enemyMove = 'down'
			enemy.body.velocity.y = 300
		}
		else if ( cursors.D.isDown ) {
			enemyMove = 'right'
			enemy.body.velocity.x = 300
		}
		//====================

		player.animations.play( move )
		// player.update( move )
		enemy.animations.play( enemyMove )


    }

    function render() {

        game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.spriteCoords(player, 32, 500);
    }
}