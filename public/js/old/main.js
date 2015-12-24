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

//================
var ruby
var pirate1
var guard1
var walder
var hank
var guard2
var guard3
var joey
var isabel
var andre
var alexis
var stephanie
var tom
var matt
var pguard1
var pguard2
var pguard3
var inmate1
var inmate2
var inmate3
var inmate4
var inmate5
var inmate6
var inmate7
var bigboss
var gboss1
var gboss2
var ervin
var blanks
//================
/**********************************************************************/
function preload() {

	//////////////////////////////////////////////
	////////     Map And Terrain  ////////////////
	//////////////////////////////////////////////
	// game.load.tilemap( 'islands', 'assets/map/allmap1.json', null, Phaser.Tilemap.TILED_JSON )
	// game.load.image( 'terrainTiles', 'assets/map/LPC_Terrain/terrain.png' )
	// game.load.image( 'dunTiles', 'assets/map/LPC_Terrain/dungonTiles1.png' )
	// game.load.image( 'tiles3Tiles', 'assets/map/LPC_Terrain/tiles3.png' )
	// game.load.image( 'thingsTiles', 'assets/map/LPC_Terrain/things1.png' )
	// game.load.image( 'player', 'assets/img/captain_32.png' )


	// //////////////////////////////////////////////
	// ////////         NPC LOAD     ////////////////
	// //////////////////////////////////////////////
	// //Text Box
	// game.load.image('ruby','assets/img/captain_32.png');
	// game.load.image('infobox','assets/img/paper-dialog.png');


	// //Character Sprites
	// game.load.image('npc1','assets/img/npc/npc1.png');
	// game.load.image('npc2','assets/img/npc/npc2.png');
	// game.load.image('npc3','assets/img/npc/npc3.png');
	// game.load.image('npc4','assets/img/npc/npc4.png');
	// game.load.image('npc5','assets/img/npc/npc5.png');
	// game.load.image('npc6','assets/img/npc/npc6.png');
	// game.load.image('npc7','assets/img/npc/npc7.png');
	// game.load.image('npc8','assets/img/npc/npc8.png');
	// game.load.image('npc9','assets/img/npc/npc9.png');
	// game.load.image('npc10','assets/img/npc/npc10.png');
	// game.load.image('npc11','assets/img/npc/npc11.png');
	// game.load.image('npc12','assets/img/npc/npc12.png');
	// game.load.image('npc14','assets/img/npc/npc14.png');
	// game.load.image('npc15','assets/img/npc/npc15.png');
	// game.load.image('npc16','assets/img/npc/npc16.png');
	// game.load.image('npc17','assets/img/npc/npc17.png');
	// game.load.image('npc18','assets/img/npc/npc18.png');
	// game.load.image('npc19','assets/img/npc/npc19.png');
	// game.load.image('npc20','assets/img/npc/npc20.png');
	// game.load.image('npc21','assets/img/npc/npc21.png');
	// game.load.image('npc22','assets/img/npc/npc22.png');
	// game.load.image('npc23','assets/img/npc/npc23.png');
	// game.load.image('npc24','assets/img/npc/npc24.png');
	// game.load.image('npc25','assets/img/npc/npc25.png');

	MAP.load()
	NPC.load()

}
/**********************************************************************/
function create() {
	//Define game physics
	game.physics.startSystem( Phaser.Physics.ARCADE )

	// //===============Map load tilesets====================
	// map = game.add.tilemap( 'islands' )
	// // map.addTilesetImage( 'terrain', 'terrainTiles' )
	// console.log("1")

	// map.addTilesetImage( 'terrain', 'terrainTiles' )
	// map.addTilesetImage( 'dungonTiles1', 'dunTiles' )
	// map.addTilesetImage( 'tiles3', 'tiles3Tiles' )
	// map.addTilesetImage( 'things1', 'thingsTiles' )

	// console.log("2")
	// //Seting collisions for ground
	// map.setCollisionBetween( 190, 400, true, 1 )
	// waterLayer = map.createLayer( 'water' )
	// floorLayer = map.createLayer( 'floor' )
	// furnLayer  = map.createLayer( 'furniture' )
	// wallLayer  = map.createLayer( 'walls' )
	// doorLayer  = map.createLayer( 'door and chest' )
	// // peepLayer  = map.createLayer( 'peeps' )


	// waterLayer.resizeWorld()
	// floorLayer.resizeWorld()
	// furnLayer.resizeWorld()
	// wallLayer.resizeWorld()
	// doorLayer.resizeWorld()
	// // peepLayer.resizeWorld()

	// console.log("3")
	// // waterLayer.debug = true
	// // floorLayer.debug = true
	MAP.create()
	// //===============================================


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


	// //////////////////////////////////////////////
	// ////////         INFO BOX     ////////////////
	// //////////////////////////////////////////////
	// this.infobox = this.add.sprite(this.world.centerX, this.world.centerY, 'infobox');
	// this.physics.arcade.enableBody(this.infobox);
	// this.infobox.anchor.setTo(1.5, 0.5);
	// this.infobox.visible = false;
	// //Some example of the style You can add to the text
	// this.styleInfobox0 = {font: '16px Arial', fill: '#FF0000', fontWeight: 'bold'};
	// this.styleInfobox1 = {font: '16px Arial', fill: '#000000', align: 'left', fontWeight: 'bold', stroke: '#FF0000'};
	// this.styleInfobox2 = {font: '16px Arial', fill: '#000000', align: 'center', fontWeight: 'bold', stroke: '#FF0000'};
	// this.styleInfobox3 = {font: '16px Arial', fill: '#000000', align: 'left', fontWeight: 'bold', stroke: '#FF0000'};

	// this.textInfobox = this.add.text(0,0,'',this.styleInfobox3);
	// this.textInfobox.wordWrapWidth = '300'; //width of container
	// this.textInfobox.wordWrap = true;
	// this.textInfobox.inputEnabled = true;
	// this.infobox.addChild(this.textInfobox);

	// //////////////////////////////////////////////
	// ////////         NPC BOX     /////////////////
	// //////////////////////////////////////////////

	// this.npcbox = this.add.sprite(this.world.centerX, this.world.centerY, 'infobox');
	// this.physics.arcade.enableBody(this.npcbox);
	// this.npcbox.anchor.setTo(0.5, 1.3);
	// this.npcbox.visible = false;

	// //The text for the NPC character info box
	// this.textInfoboxNPC = this.add.text(-140,-180,'',this.styleInfobox1);
	// this.textInfoboxNPC.wordWrapWidth = '300'; //width of container
	// this.textInfoboxNPC.wordWrap = true;
	// this.textInfoboxNPC.inputEnabled = true;
	// this.npcbox.addChild(this.textInfoboxNPC);

	// //The text for the NPC character name
	// this.textInfoboxNPCname = this.add.text(-210,115,'',this.styleInfobox2);
	// this.textInfoboxNPCname.inputEnabled = true;
	// this.npcbox.addChild(this.textInfoboxNPCname);


	// //This array contains the text sections of the dialog
	// this.npcboxText = new Array();
	// //This is the NPC's name
	// this.npcboxname = "";
	// //This variable manage the position in the previous array
	// this.npcboxTextPosition = 0;
	// //To check if is necessary to activate the NPC character's info box
	// // 0 = not active
	// // 1 = active
	// // 2 = transition state
	// this.npcboxActive = 0;


	// this.game.time.events.loop(2000, function () {

	// 	//If the flag is active and the text array is "running".....
	// 	if((this.npcboxActive==1) && (this.npcboxTextPosition <= this.npcboxText.length)){


	// 		//If the text array is finished, then we deactivate all
	// 		//and set the flag in "transition state", else we continue
	// 		//to run the dialog
	// 		if(this.npcboxTextPosition >= this.npcboxText.length){
	// 			this.npcboxActive=2;
	// 			this.npcbox.visible = false;

	// 			this.npcboxTextPosition = 0;

	// 			//We reset the array
	// 			this.npcboxText.length = 0;

	// 			this.textInfoboxNPC.setText("");
	// 		}else{
	// 			this.textInfoboxNPC.setText(this.npcboxText[this.npcboxTextPosition]);
	// 			this.npcboxTextPosition = Math.abs(this.npcboxTextPosition + 1);
	// 		}

	// 	}

	// }
	// , this);


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

		NPC.create()
	// //////////////////////////////////////////////
	// ///// LETS ADD SOME PEOPLE       /////////////
	// //////////////////////////////////////////////

	// this.ruby = this.add.sprite(this.world.centerX+300, this.world.centerY+5600, 'ruby');
	// this.pirate1 = this.add.sprite(3072, 2816, 'npc15');
	// this.guard1 = this.add.sprite(3200, 2752, 'npc1');
	// this.walder = this.add.sprite(1408, 1472, 'npc15');
	// this.hank = this.add.sprite(4416, 256, 'npc16');
	// this.guard2 = this.add.sprite(4480, 384, 'npc2');
	// this.guard3 = this.add.sprite(4864, 384, 'npc2');
	// this.joey = this.add.sprite(320, 3008, 'npc18');
	// this.isabel = this.add.sprite(320, 2944, 'npc11');
	// this.andre = this.add.sprite(128, 2944, 'npc18');
	// this.alexis = this.add.sprite(384, 2816, 'npc10');
	// this.stephanie = this.add.sprite(288, 2400, 'npc7');
	// this.tom = this.add.sprite(96, 2368, 'npc6');
	// this.matt = this.add.sprite(1056, 3296, 'npc1');
	// this.pguard1 = this.add.sprite(352, 5856, 'npc2');
	// this.pguard2 = this.add.sprite(224, 5856, 'npc2');
	// this.pguard3 = this.add.sprite(640, 5952, 'npc2');
	// this.inmate1 = this.add.sprite(320, 6048, 'npc14');
	// this.inmate2 = this.add.sprite(288, 6144, 'npc14');
	// this.inmate3 = this.add.sprite(288, 6272, 'npc14');
	// this.inmate4 = this.add.sprite(384, 6304, 'npc14');
	// this.inmate5 = this.add.sprite(512, 6016, 'npc14');
	// this.inmate6 = this.add.sprite(512, 6144, 'npc14');
	// this.inmate7 = this.add.sprite(608, 6305, 'npc14');
	// this.bigboss = this.add.sprite(6368, 6240, 'npc22');
	// this.gboss1 = this.add.sprite(5216, 6144, 'npc2');
	// this.gboss2 = this.add.sprite(5888, 5888, 'npc2');
	// this.ervin = this.add.sprite(2336, 5440, 'npc8');
	// this.blanks = this.add.sprite(3808, 6240, 'npc16');

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

	// if(Math.abs(this.ruby.x-player.position.x)<50 && Math.abs(this.ruby.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.ruby.x;
	// 		this.npcbox.y=this.ruby.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You went exploring and following the map that Walder gaved you and you finally found this island that was very far. and you see the group of pirate";
	// 		this.npcboxText[1]="(mind) Oh.. ok.. I can do this. (player) We can do this the easy way or the hard way you choose!";
	// 		this.npcboxText[2]="(Pirate) AH AH AH! who do you this you are? I will chose the hard way!";
	// 		this.npcboxText[3]="(player) Ok then!";


	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.walder.x-player.position.x)<50 && Math.abs(this.walder.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.walder.x;
	// 		this.npcbox.y=this.walder.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You explore and find a first island with a house on it.";
	// 		this.npcboxText[1]="(mind) oh, look a house, there must be some one here.";
	// 		this.npcboxText[2]="(player) oh, euh.. I.. I don’t know I lost my memory. Can you help me?";
	// 		this.npcboxText[3]="(Walder) Listen to me, I can’t trust you,you might be with the Pirates!!";
	// 		this.npcboxText[4]="(mind) lets gain his trust!! (Player) Please, I’ll do anything!";
	// 		this.npcboxText[5]="(Walder) Ok,, then go kill the Pirates that live on the man Island and get my wheat back!";
	// 		this.npcboxText[6]="(mind) Options that you have:";
	// 		this.npcboxText[7]="A.yes I’ll do it!";
	// 		this.npcboxText[8]="B.no it is too dangerous!";
	// 		this.npcboxText[9]="C.what is the reward?";


	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.hank.x-player.position.x)<50 && Math.abs(this.hank.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.hank.x;
	// 		this.npcbox.y=this.hank.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You went exploring and following the map you finally found this island that was very far and you see the guard in his house";
	// 		this.npcboxText[1]="A. Trick him";
	// 		this.npcboxText[2]="(player) I need help!";
	// 		this.npcboxText[3]="(Hank) Go away ! or i’ll have you killed!";
	// 		this.npcboxText[4]="(player) come out we need to talk !";
	// 		this.npcboxText[5]="Hank pulls out a gun before you can shot him and kills you";
	// 		this.npcboxText[6]="B. Fight him";
	// 		this.npcboxText[7]="(mind) sneak up on him and shot him";
	// 		this.npcboxText[8]=".x. sneaks up on him and engages in a fight";
	// 		this.npcboxText[9]="(Hank) get out of here or i’ll have you killed!";
	// 		this.npcboxText[10]=".x. kills Hank";
	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.joey.x-player.position.x)<50 && Math.abs(this.joey.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.joey.x;
	// 		this.npcbox.y=this.joey.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="(Joey) HI";
	// 		this.npcboxText[1]="(player) …";

	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.andre.x-player.position.x)<50 && Math.abs(this.andre.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.andre.x;
	// 		this.npcbox.y=this.andre.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="(Andre) nothing is happeneing here";

	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.alexis.x-player.position.x)<50 && Math.abs(this.alexis.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.alexis.x;
	// 		this.npcbox.y=this.alexis.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="(Alexis) I love chocolate!!!!! And cookies!!";

	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.stephanie.x-player.position.x)<50 && Math.abs(this.stephanie.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.stephanie.x;
	// 		this.npcbox.y=this.stephanie.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You started looking for people to have quest and found her";
	// 		this.npcboxText[1]="(stephanie) hey i really need your help !! it’s about my friend";
	// 		this.npcboxText[2]="(player) Hey what about your friend?a";
	// 		this.npcboxText[3]="(stephanie) well actually he as a book that my mother wrote to me and he broke his leg so he can’t give it to me could you go get it for me?";
	// 		this.npcboxText[4]="(mind) Options";
	// 		this.npcboxText[5]="A. Yes sure where is your friend?";
	// 		this.npcboxText[6]="(stephanie) He is on the half moon island.";
	// 		this.npcboxText[7]="B. No i can’t i have other things to do.";
	// 		this.npcboxText[8]="(stephanie) The book is a map to a treasure";
	// 		this.npcboxText[9]="(player) What treasure?";
	// 		this.npcboxText[10]="(stephanie) my mother's ashes";
	// 		this.npcboxText[11]="(player) ok I’ll do it where is your friend?";
	// 		this.npcboxText[12]="(stephanie) He is on the half moon island.";
	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.tom.x-player.position.x)<50 && Math.abs(this.tom.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.tom.x;
	// 		this.npcbox.y=this.tom.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You continued searching and meat this guys";
	// 		this.npcboxText[1]="(Tom) Hey, I heard you were doing quests for people now i really need personal stuff to be cleared so could you help?";
	// 		this.npcboxText[2]="(mind) options that you have";
	// 		this.npcboxText[3]="A. Yes sure what is it?";
	// 		this.npcboxText[4]="(Tom) Can you please make the general’s second personal body guard taste his own blood?";
	// 		this.npcboxText[5]="(player) Yea sure.";
	// 		this.npcboxText[6]="B. No i can’t right now";
	// 		this.npcboxText[7]="(Tom) the reward is high.";
	// 		this.npcboxText[8]="(player) what is the reward?";
	// 		this.npcboxText[9]="(Tom) a diamond boat!";
	// 		this.npcboxText[10]="(player) ok sure what do i have to do?";
	// 		this.npcboxText[9]="(Tom) Can you please make the general’s second personal body guard taste his own blood?";
	// 		this.npcboxText[10]="(player) Yea sure.";
	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.matt.x-player.position.x)<50 && Math.abs(this.matt.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.matt.x;
	// 		this.npcbox.y=this.matt.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You walked along the island found the main city where your 3 quest happen, you see a man next to his house";
	// 		this.npcboxText[1]="(Matt) hey dude my name is matt. I need your help.";
	// 		this.npcboxText[2]="(Player)What do you want?";
	// 		this.npcboxText[3]="(Matt) I need you to go to the farm island and get 7 batches of wheat and kill the general's personal guard";
	// 		this.npcboxText[4]="(Player)WoW! Kill the general’s personal guard! What the reward it better be good.";
	// 		this.npcboxText[5]="(Matt) the reward a boat at least a steel boat.";
	// 		this.npcboxText[6]="(mind) Options that you have";
	// 		this.npcboxText[7]="A.yes I’ll do it.";
	// 		this.npcboxText[8]="(Matt) ok great I’ll mark it on your map";
	// 		this.npcboxText[9]="B.No sorry.";
	// 		this.npcboxText[10]="(Matt) I know who to get you out of here";
	// 		this.npcboxText[9]="(player) yes I’ll do it.";
	// 		this.npcboxText[9]="(Matt) ok great I’ll mark it on your map";
	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.pguard3.x-player.position.x)<50 && Math.abs(this.pguard3.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.pguard3.x;
	// 		this.npcbox.y=this.pguard3.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You wake up one morning and you hear:";
	// 		this.npcboxText[1]="(Guard1) .x. your time is over !";
	// 		this.npcboxText[2]="(mind) 5 years finally !";
	// 		this.npcboxText[3]="When you walk out you realise that nothing changed and that people acted like there was nothing that happened.";
	// 		this.npcboxText[4]="(Guard1) go to the main city to find a job so that you don’t wonder around and end up here again";
	// 		this.npcboxText[5]="(player)Thank you";

	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.ervin.x-player.position.x)<50 && Math.abs(this.ervin.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.ervin.x;
	// 		this.npcbox.y=this.ervin.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You went to the half moon island and meet his friend.";
	// 		this.npcboxText[1]="(mind) go easy on him";
	// 		this.npcboxText[2]="A. (player) hey your friend Hank told me you had a book for him";
	// 		this.npcboxText[3]="(Ervin) hey he did not tell me to give it to you but sure thank you for taking it i can’t really move right now.";
	// 		this.npcboxText[4]="(player) thank you bye";
	// 		this.npcboxText[5]="(Ervin) bye.";
	// 		this.npcboxText[6]="B. (player) hey! do you have stephanie’s book?";
	// 		this.npcboxText[7]="(Ervin) yea but he did not tell me to give it to you.";
	// 		this.npcboxText[8]="(player) give it to me he needs it !";
	// 		this.npcboxText[9]="(Ervin) sure but don’t lose it!";
	// 		this.npcboxText[10]="(player) by";
	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	} else if(Math.abs(this.blanks.x-player.position.x)<50 && Math.abs(this.blanks.y-player.position.y)<50){

	// 	if(this.npcboxActive<=1){


	// 		this.npcbox.x=this.blanks.x;
	// 		this.npcbox.y=this.blanks.y;
	// 		//We choose the frame to use for the info-box....

	// 		this.npcbox.visible = true;

	// 		this.npcboxActive = 1;

	// 		//Here the text we want
	// 		this.npcboxText[0]="You went exploring and following the map you finally found this island that was very far and you see the guard in his house";
	// 		this.npcboxText[1]="(mind) Options that you have";
	// 		this.npcboxText[2]="A. Trick him";
	// 		this.npcboxText[3]="(player) I need help!";
	// 		this.npcboxText[4]="(Blanks) Go away ! or i’ll have you killed!";
	// 		this.npcboxText[5]="(player) come out we need to talk !";
	// 		this.npcboxText[6]="Hank pulls out a gun before you can shot him and kills you";
	// 		this.npcboxText[7]="B. Fight him";
	// 		this.npcboxText[8]="(mind) sneak up on him and shot him";
	// 		this.npcboxText[9]=".x. sneaks up on him and engages in a fight";
	// 		this.npcboxText[10]="(Blanks) get out of here or i’ll have you killed!";
	// 		this.npcboxText[10]=".x. kills Blanks";
	// 		//We bring it to the top, so other sprite don't cover it
	// 		this.npcbox.bringToTop();

	// 		}

	// 	}

	// 	// else if(Math.abs(this.hank.x-player.position.x)<50 && Math.abs(this.hank.y-player.position.y)<50){

	// 	// if(this.npcboxActive<=1){


	// 	// 	this.npcbox.x=this.hank.x;
	// 	// 	this.npcbox.y=this.hank.y;
	// 	// 	//We choose the frame to use for the info-box....

	// 	// 	this.npcbox.visible = true;

	// 	// 	this.npcboxActive = 1;

	// 	// 	//Here the text we want
	// 	// 	this.npcboxText[0]="aa";
	// 	// 	this.npcboxText[1]="aa";
	// 	// 	this.npcboxText[2]="aa";
	// 	// 	this.npcboxText[3]="aa";
	// 	// 	this.npcboxText[4]="aa";
	// 	// 	this.npcboxText[5]="aa";
	// 	// 	this.npcboxText[6]="aa";
	// 	// 	this.npcboxText[7]="aa";
	// 	// 	this.npcboxText[8]="aa";
	// 	// 	this.npcboxText[9]="aa";
	// 	// 	this.npcboxText[10]="aa";
	// 	// 	//We bring it to the top, so other sprite don't cover it
	// 	// 	this.npcbox.bringToTop();

	// 	// 	}

	// 	// }

	// 	else {
	// 			this.npcbox.visible = false;

	// 			this.npcboxTextPosition = 0;
	// 			this.npcboxActive = 0;
	// 			//We reset the array
	// 			this.npcboxText.length = 0;

	// 			this.npcboxname="";

	// 			this.textInfoboxNPC.setText("");
	// 			this.textInfoboxNPCname.setText("");
	// 	}
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