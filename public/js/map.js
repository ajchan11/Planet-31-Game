window.onload = function() {

    game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
   	navalShip = new Ship( { spriteName: "naval_ship", spritePath: 'assets/sprites/naval_ship_sprite1.png', spriteW: 64, spriteH: 64 })
	pirateShip = new Ship( { spriteName: "pirate_ship", spritePath: 'assets/sprites/pirate_ship_sprite1.png', spriteW: 64, spriteH: 64 })
    console.log("loading")
    function preload() {

        game.load.tilemap('map', 'assets/map/map3.json', null,  Phaser.Tilemap.TILED_JSON);
		
		game.load.image('tiles','assets/map/map3.png');
		
        game.load.image('player','assets/img/pirate1.png');
		
		navalShip.preload()
		pirateShip.preload()
		
    }
	var content = [
	" ",
	"photon storm presents",
	"a phaser production",
	" ",
	"Kern of Duty",
	" ",
	"directed by rich davey",
	"rendering by mat groves",
	"    ",
	"03:45, November 4th, 2014",
	"somewhere in the north pacific",
	"mission control bravo ...",
	];
	
	var text;
	var index = 0;
	var line = '';
	var map;
	var layer;
    var player;
	var enemy
    var cursors;
	var enemyMove, move;
	
    function create() {
		
		map = game.add.tilemap('map');
		
		map.addTilesetImage('terrain', 'tiles');

		// var waterLayer = map.createLayer('water');
		var layerLand = map.createLayer('land');
		
		// layer.resizeWorld();
		
        // game.add.tileSprite(0, 0, 6400, 6400, 'background');
		
		
		// text.anchor.set(0.5);
		
		nextLine();

        game.world.setBounds(0, 0, 6400, 6400);

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
		text.x = Math.floor(player.x + player.width / 1);
		text.y = Math.floor(player.y + player.height / 1);	

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
	function updateLine() {

    if (line.length < content[index].length)
    {
        line = content[index].substr(0, line.length + 1);
        // text.text = line;
        text.setText(line);
    }
    else
    {
        //  Wait 2 seconds then start a new line
        game.time.events.add(Phaser.Timer.SECOND * 1, nextLine, this);
    }

	}
	
	function nextLine() {
	
		index++;
	
		if (index < content.length)
		{
			line = '';
			game.time.events.repeat(80, content[index].length + 1, updateLine, this);
		}
	
	}
}