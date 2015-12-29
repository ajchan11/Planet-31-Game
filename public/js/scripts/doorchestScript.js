var doorAndChest = {
    load: function(){

		game.load.image('woodLeft','assets/img/woodLeft.png');
		game.load.image('woodRight','assets/img/woodRight.png');
		game.load.image('steelLeft','assets/img/steelLeft.png');
		game.load.image('steelRight','assets/img/steelRight.png');
		game.load.image('chest','assets/img/chest1.png');
        
    },
    
create: function() {
        console.log("getting here")
        hitNext = game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
        button1 = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
        button2 = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
        button3 = game.input.keyboard.addKey(Phaser.KeyCode.THREE);
        
        game.matt = game.add.sprite(1056, 3296, 'npc1');
        
        hitNext.onDown.add(function(key)
            {
                console.log("poopie")
            }, game);
        
		//////////////////////////////////////////////
		////////         INFO BOX     ////////////////
		//////////////////////////////////////////////
		game.infobox = game.add.sprite(game.world.centerX, game.world.centerY, 'infobox');
		game.physics.arcade.enableBody(game.infobox);
		game.infobox.anchor.setTo(1.5, 0.5);
		game.infobox.visible = false;
		//Some example of the style You can add to the text
		game.styleInfobox0 = {font: '16px Arial', fill: '#FF0000', fontWeight: 'bold'};
		game.styleInfobox1 = {font: '16px Arial', fill: '#000000', align: 'left', stroke: '#FF0000'};
		game.styleInfobox2 = {font: '16px Arial', fill: '#000000', align: 'center', stroke: '#FF0000'};
		game.styleInfobox3 = {font: '16px Arial', fill: '#000000', align: 'left', stroke: '#FF0000'};

		game.textInfobox = game.add.text(0,0,'',game.styleInfobox3);
		game.textInfobox.wordWrapWidth = '300'; //width of container
		game.textInfobox.wordWrap = true;
		game.textInfobox.inputEnabled = true;
		game.infobox.addChild(game.textInfobox);

		//////////////////////////////////////////////
		////////         NPC BOX     /////////////////
		//////////////////////////////////////////////

		game.npcbox = game.add.sprite(game.world.centerX, game.world.centerY, 'infobox');
		game.physics.arcade.enableBody(game.npcbox);
		game.npcbox.anchor.setTo(0.5, 1.3);
		game.npcbox.visible = false;

		//The text for the NPC character info box
		game.textInfoboxNPC = game.add.text(-120,-180,'',game.styleInfobox1);
		game.textInfoboxNPC.wordWrapWidth = '250'; //width of container
		game.textInfoboxNPC.wordWrap = true;
		game.textInfoboxNPC.inputEnabled = true;
		game.npcbox.addChild(game.textInfoboxNPC);

		//The text for the NPC character name
		game.textInfoboxNPCname = game.add.text(-210,115,'',game.styleInfobox2);
		game.textInfoboxNPCname.inputEnabled = true;
		game.npcbox.addChild(game.textInfoboxNPCname);


		//This array contains the text sections of the dialog
		game.npcboxText = new Array();
		//This is the NPC's name
		game.npcboxname = "";
		//This variable manage the position in the previous array
		game.npcboxTextPosition = 1;
		//To check if is necessary to activate the NPC character's info box
		// 0 = not active
		// 1 = active
		// 2 = transition state
		game.npcboxActive = 0;

        hitNext.onDown.add(function(){

			//If the flag is active and the text array is "running".....
			if((game.npcboxActive==1) && (game.npcboxTextPosition <= game.npcboxText.length)){


				//If the text array is finished, then we deactivate all
				//and set the flag in "transition state", else we continue
				//to run the dialog
				if(game.npcboxTextPosition >= game.npcboxText.length){
					game.npcboxActive=2;
					game.npcbox.visible = false;

					game.npcboxTextPosition = 0;

					//We reset the array
					game.npcboxText.length = 0;

					game.textInfoboxNPC.setText("");
				}else{
					game.textInfoboxNPC.setText(game.npcboxText[game.npcboxTextPosition]);
					game.npcboxTextPosition = Math.abs(game.npcboxTextPosition + 1);
				}

			}

		}
		, this);

		//////////////////////////////////////////////
		///// LETS ADD SOME SHIT       /////////////
		//////////////////////////////////////////////

		game.chest1 = game.add.sprite(384 ,96, 'chest');
        game.chest2 = game.add.sprite(4576, 160, 'chest');
        game.chest3 = game.add.sprite(4576, 192, 'chest');
        game.chest4 = game.add.sprite(4576, 256, 'chest');
        game.chest5 = game.add.sprite(4576, 288, 'chest');
        game.chest6 = game.add.sprite(4640, 160, 'chest');
        game.chest7 = game.add.sprite(4640, 192, 'chest');
        game.chest8 = game.add.sprite(4640, 256, 'chest');
        game.chest9 = game.add.sprite(4640, 288, 'chest');
        game.chest10 = game.add.sprite(3808, 3808, 'chest');
        game.chest11 = game.add.sprite(640, 5856, 'chest');
        game.chest12 = game.add.sprite(128, 2752, 'chest');
        game.chest13 = game.add.sprite(480, 2784, 'chest');
        game.chest14 = game.add.sprite(480, 2624, 'chest');
        game.chest15 = game.add.sprite(416, 2368, 'chest');
        game.chest16 = game.add.sprite(1568, 1536, 'chest');
        game.chest17 = game.add.sprite(3168, 2976, 'chest');
        game.chest18 = game.add.sprite(3168, 3008, 'chest');
        game.chest19 = game.add.sprite(3168, 3040, 'chest');

        game.woodDoor1 = game.add.sprite(96 ,2464, 'woodLeft');
        game.woodDoor2 = game.add.sprite(288, 2528, 'woodLeft');
        game.woodDoor3 = game.add.sprite(96, 2656, 'woodLeft');
        game.woodDoor4 = game.add.sprite(352, 2688, 'woodLeft');
        game.woodDoor5 = game.add.sprite(96, 3008, 'woodLeft');
        game.woodDoor6 = game.add.sprite(992, 3232, 'woodLeft');
        game.woodDoor7 = game.add.sprite(288, 5696, 'woodLeft');
        game.woodDoor8 = game.add.sprite(320, 5696, 'woodLeft');
        game.woodDoor9 = game.add.sprite(288, 5824, 'woodLeft');
        game.woodDoor10 = game.add.sprite(3168, 2784, 'woodLeft');
        game.woodDoor11 = game.add.sprite(2304, 5344, 'woodLeft');
        game.woodDoor12 = game.add.sprite(3936, 6240, 'woodLeft');
        game.woodDoor13 = game.add.sprite(5024, 4608, 'woodLeft');
        game.woodDoor14 = game.add.sprite(5024, 4640, 'woodLeft');
        game.woodDoor15 = game.add.sprite(5376, 4480, 'woodLeft');
        game.woodDoor16 = game.add.sprite(5472, 4480, 'woodLeft');
        game.woodDoor17 = game.add.sprite(5568, 4384, 'woodLeft');
        game.woodDoor18 = game.add.sprite(5760, 4352, 'woodLeft');
        game.woodDoor19 = game.add.sprite(5920, 4352, 'woodLeft');
        game.woodDoor20 = game.add.sprite(6112, 4320, 'woodLeft');
        game.woodDoor21 = game.add.sprite(6304, 4320, 'woodLeft');
        game.woodDoor22 = game.add.sprite(6336, 4832, 'woodLeft');
        game.woodDoor23 = game.add.sprite(352, 2880, 'woodLeft');
        game.woodDoor24 = game.add.sprite(1568, 1472, 'woodLeft'); 
        game.woodDoor25 = game.add.sprite(96, 2848, 'woodLeft');               
        game.woodDoor26 = game.add.sprite(320, 5824, 'woodLeft');                                                     
        game.woodDoor27 = game.add.sprite(4416, 320, 'woodLeft');                               
        game.woodDoor28 = game.add.sprite(4448, 320, 'woodLeft');                               



        
        game.steelDoor1 = game.add.sprite(256 ,6208, 'steelLeft');
        game.steelDoor2 = game.add.sprite(288, 6176, 'steelLeft');
        game.steelDoor3 = game.add.sprite(288, 6240, 'steelLeft');
        game.steelDoor4 = game.add.sprite(288, 5984, 'steelLeft');
        game.steelDoor5 = game.add.sprite(384, 5984, 'steelLeft');
        game.steelDoor6 = game.add.sprite(480, 5984, 'steelLeft');
        game.steelDoor7 = game.add.sprite(480, 6176, 'steelLeft');
        game.steelDoor8 = game.add.sprite(384, 6240, 'steelLeft');
        game.steelDoor9 = game.add.sprite(480, 6240, 'steelLeft');
        game.steelDoor10 = game.add.sprite(576, 6240, 'steelLeft');
        game.steelDoor11 = game.add.sprite(608, 5920, 'steelLeft');
        game.steelDoor12 = game.add.sprite(896, 3392, 'steelLeft');
        game.steelDoor13 = game.add.sprite(3168, 2912, 'steelLeft');
        game.steelDoor14 = game.add.sprite(4544, 224, 'steelLeft');
        game.steelDoor15 = game.add.sprite(1408, 1408, 'steelLeft');
        game.steelDoor16 = game.add.sprite(384, 6176, 'steelLeft');                               
        
               
		},
	/****************************************************************/

    update: function() {

		if(Math.abs(game.ruby.x-player.position.x)<50 && Math.abs(game.ruby.y-player.position.y)<50){

		  if(game.npcboxActive<=1){


			game.npcbox.x=game.ruby.x;
			game.npcbox.y=game.ruby.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You went exploring and following the map that Walder gaved you and you finally found this island that was very far. and you see the group of pirate";
			game.npcboxText[1]="(mind) Oh.. ok.. I can do game. (player) We can do this the easy way or the hard way you choose!";
			game.npcboxText[2]="(Pirate) AH AH AH! who do you this you are? I will chose the hard way!";
			game.npcboxText[3]="(player) Ok then!";


			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else {
				game.npcbox.visible = false;

				game.npcboxTextPosition = 0;
				game.npcboxActive = 0;
				//We reset the array
				game.npcboxText.length = 0;

				game.npcboxname="";

				game.textInfoboxNPC.setText("");
				game.textInfoboxNPCname.setText("");
		}
	}
    
}