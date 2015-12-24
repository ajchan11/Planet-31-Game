var NPC = {
	load: function() {
		//////////////////////////////////////////////
		////////         NPC LOAD     ////////////////
		//////////////////////////////////////////////
		//Text Box
		game.load.image('ruby','assets/img/captain_32.png');
		game.load.image('infobox','assets/img/paper-dialog.png');


		//Character Sprites
		game.load.image('npc1','assets/img/npc/npc1.png');
		game.load.image('npc2','assets/img/npc/npc2.png');
		game.load.image('npc3','assets/img/npc/npc3.png');
		game.load.image('npc4','assets/img/npc/npc4.png');
		game.load.image('npc5','assets/img/npc/npc5.png');
		game.load.image('npc6','assets/img/npc/npc6.png');
		game.load.image('npc7','assets/img/npc/npc7.png');
		game.load.image('npc8','assets/img/npc/npc8.png');
		game.load.image('npc9','assets/img/npc/npc9.png');
		game.load.image('npc10','assets/img/npc/npc10.png');
		game.load.image('npc11','assets/img/npc/npc11.png');
		game.load.image('npc12','assets/img/npc/npc12.png');
		game.load.image('npc14','assets/img/npc/npc14.png');
		game.load.image('npc15','assets/img/npc/npc15.png');
		game.load.image('npc16','assets/img/npc/npc16.png');
		game.load.image('npc17','assets/img/npc/npc17.png');
		game.load.image('npc18','assets/img/npc/npc18.png');
		game.load.image('npc19','assets/img/npc/npc19.png');
		game.load.image('npc20','assets/img/npc/npc20.png');
		game.load.image('npc21','assets/img/npc/npc21.png');
		game.load.image('npc22','assets/img/npc/npc22.png');
		game.load.image('npc23','assets/img/npc/npc23.png');
		game.load.image('npc24','assets/img/npc/npc24.png');
		game.load.image('npc25','assets/img/npc/npc25.png');
	},
/****************************************************************/
	create: function() {
		//////////////////////////////////////////////
		////////         INFO BOX     ////////////////
		//////////////////////////////////////////////
		game.infobox = game.add.sprite(game.world.centerX, game.world.centerY, 'infobox');
		game.physics.arcade.enableBody(game.infobox);
		game.infobox.anchor.setTo(1.5, 0.5);
		game.infobox.visible = false;
		//Some example of the style You can add to the text
		game.styleInfobox0 = {font: '16px Arial', fill: '#FF0000', fontWeight: 'bold'};
		game.styleInfobox1 = {font: '16px Arial', fill: '#000000', align: 'left', fontWeight: 'bold', stroke: '#FF0000'};
		game.styleInfobox2 = {font: '16px Arial', fill: '#000000', align: 'center', fontWeight: 'bold', stroke: '#FF0000'};
		game.styleInfobox3 = {font: '16px Arial', fill: '#000000', align: 'left', fontWeight: 'bold', stroke: '#FF0000'};

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
		game.textInfoboxNPC = game.add.text(-140,-180,'',game.styleInfobox1);
		game.textInfoboxNPC.wordWrapWidth = '300'; //width of container
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
		game.npcboxTextPosition = 0;
		//To check if is necessary to activate the NPC character's info box
		// 0 = not active
		// 1 = active
		// 2 = transition state
		game.npcboxActive = 0;


		game.time.events.loop(2000, function () {

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
		///// LETS ADD SOME PEOPLE       /////////////
		//////////////////////////////////////////////

		game.ruby = game.add.sprite(game.world.centerX+300, game.world.centerY+5600, 'ruby');
		game.pirate1 = game.add.sprite(3072, 2816, 'npc15');
		game.guard1 = game.add.sprite(3200, 2752, 'npc1');
		game.walder = game.add.sprite(1408, 1472, 'npc15');
		game.hank = game.add.sprite(4416, 256, 'npc16');
		game.guard2 = game.add.sprite(4480, 384, 'npc2');
		game.guard3 = game.add.sprite(4864, 384, 'npc2');
		game.joey = game.add.sprite(320, 3008, 'npc18');
		game.isabel = game.add.sprite(320, 2944, 'npc11');
		game.andre = game.add.sprite(128, 2944, 'npc18');
		game.alexis = game.add.sprite(384, 2816, 'npc10');
		game.stephanie = game.add.sprite(288, 2400, 'npc7');
		game.tom = game.add.sprite(96, 2368, 'npc6');
		game.matt = game.add.sprite(1056, 3296, 'npc1');
		game.pguard1 = game.add.sprite(352, 5856, 'npc2');
		game.pguard2 = game.add.sprite(224, 5856, 'npc2');
		game.pguard3 = game.add.sprite(640, 5952, 'npc2');
		game.inmate1 = game.add.sprite(320, 6048, 'npc14');
		game.inmate2 = game.add.sprite(288, 6144, 'npc14');
		game.inmate3 = game.add.sprite(288, 6272, 'npc14');
		game.inmate4 = game.add.sprite(384, 6304, 'npc14');
		game.inmate5 = game.add.sprite(512, 6016, 'npc14');
		game.inmate6 = game.add.sprite(512, 6144, 'npc14');
		game.inmate7 = game.add.sprite(608, 6305, 'npc14');
		game.bigboss = game.add.sprite(6368, 6240, 'npc22');
		game.gboss1 = game.add.sprite(5216, 6144, 'npc2');
		game.gboss2 = game.add.sprite(5888, 5888, 'npc2');
		game.ervin = game.add.sprite(2336, 5440, 'npc8');
		game.blanks = game.add.sprite(3808, 6240, 'npc16');
		},
	/****************************************************************/

	update: function() {

		console.log(game.walder.x)
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

		} else if(Math.abs(game.walder.x-player.position.x)<50 && Math.abs(game.walder.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.walder.x;
			game.npcbox.y=game.walder.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You explore and find a first island with a house on it.";
			game.npcboxText[1]="(mind) oh, look a house, there must be some one here.";
			game.npcboxText[2]="(player) oh, euh.. I.. I don’t know I lost my memory. Can you help me?";
			game.npcboxText[3]="(Walder) Listen to me, I can’t trust you,you might be with the Pirates!!";
			game.npcboxText[4]="(mind) lets gain his trust!! (Player) Please, I’ll do anything!";
			game.npcboxText[5]="(Walder) Ok,, then go kill the Pirates that live on the man Island and get my wheat back!";
			game.npcboxText[6]="(mind) Options that you have:";
			game.npcboxText[7]="A.yes I’ll do it!";
			game.npcboxText[8]="B.no it is too dangerous!";
			game.npcboxText[9]="C.what is the reward?";


			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.hank.x-player.position.x)<50 && Math.abs(game.hank.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.hank.x;
			game.npcbox.y=game.hank.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You went exploring and following the map you finally found this island that was very far and you see the guard in his house";
			game.npcboxText[1]="A. Trick him";
			game.npcboxText[2]="(player) I need help!";
			game.npcboxText[3]="(Hank) Go away ! or i’ll have you killed!";
			game.npcboxText[4]="(player) come out we need to talk !";
			game.npcboxText[5]="Hank pulls out a gun before you can shot him and kills you";
			game.npcboxText[6]="B. Fight him";
			game.npcboxText[7]="(mind) sneak up on him and shot him";
			game.npcboxText[8]=".x. sneaks up on him and engages in a fight";
			game.npcboxText[9]="(Hank) get out of here or i’ll have you killed!";
			game.npcboxText[10]=".x. kills Hank";
			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.joey.x-player.position.x)<50 && Math.abs(game.joey.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.joey.x;
			game.npcbox.y=game.joey.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="(Joey) HI";
			game.npcboxText[1]="(player) …";

			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.andre.x-player.position.x)<50 && Math.abs(game.andre.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.andre.x;
			game.npcbox.y=game.andre.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="(Andre) nothing is happeneing here";

			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.alexis.x-player.position.x)<50 && Math.abs(game.alexis.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.alexis.x;
			game.npcbox.y=game.alexis.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="(Alexis) I love chocolate!!!!! And cookies!!";

			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.stephanie.x-player.position.x)<50 && Math.abs(game.stephanie.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.stephanie.x;
			game.npcbox.y=game.stephanie.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You started looking for people to have quest and found her";
			game.npcboxText[1]="(stephanie) hey i really need your help !! it’s about my friend";
			game.npcboxText[2]="(player) Hey what about your friend?a";
			game.npcboxText[3]="(stephanie) well actually he as a book that my mother wrote to me and he broke his leg so he can’t give it to me could you go get it for me?";
			game.npcboxText[4]="(mind) Options";
			game.npcboxText[5]="A. Yes sure where is your friend?";
			game.npcboxText[6]="(stephanie) He is on the half moon island.";
			game.npcboxText[7]="B. No i can’t i have other things to do.";
			game.npcboxText[8]="(stephanie) The book is a map to a treasure";
			game.npcboxText[9]="(player) What treasure?";
			game.npcboxText[10]="(stephanie) my mother's ashes";
			game.npcboxText[11]="(player) ok I’ll do it where is your friend?";
			game.npcboxText[12]="(stephanie) He is on the half moon island.";
			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.tom.x-player.position.x)<50 && Math.abs(game.tom.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.tom.x;
			game.npcbox.y=game.tom.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You continued searching and meat this guys";
			game.npcboxText[1]="(Tom) Hey, I heard you were doing quests for people now i really need personal stuff to be cleared so could you help?";
			game.npcboxText[2]="(mind) options that you have";
			game.npcboxText[3]="A. Yes sure what is it?";
			game.npcboxText[4]="(Tom) Can you please make the general’s second personal body guard taste his own blood?";
			game.npcboxText[5]="(player) Yea sure.";
			game.npcboxText[6]="B. No i can’t right now";
			game.npcboxText[7]="(Tom) the reward is high.";
			game.npcboxText[8]="(player) what is the reward?";
			game.npcboxText[9]="(Tom) a diamond boat!";
			game.npcboxText[10]="(player) ok sure what do i have to do?";
			game.npcboxText[9]="(Tom) Can you please make the general’s second personal body guard taste his own blood?";
			game.npcboxText[10]="(player) Yea sure.";
			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.matt.x-player.position.x)<50 && Math.abs(game.matt.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.matt.x;
			game.npcbox.y=game.matt.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You walked along the island found the main city where your 3 quest happen, you see a man next to his house";
			game.npcboxText[1]="(Matt) hey dude my name is matt. I need your help.";
			game.npcboxText[2]="(Player)What do you want?";
			game.npcboxText[3]="(Matt) I need you to go to the farm island and get 7 batches of wheat and kill the general's personal guard";
			game.npcboxText[4]="(Player)WoW! Kill the general’s personal guard! What the reward it better be good.";
			game.npcboxText[5]="(Matt) the reward a boat at least a steel boat.";
			game.npcboxText[6]="(mind) Options that you have";
			game.npcboxText[7]="A.yes I’ll do it.";
			game.npcboxText[8]="(Matt) ok great I’ll mark it on your map";
			game.npcboxText[9]="B.No sorry.";
			game.npcboxText[10]="(Matt) I know who to get you out of here";
			game.npcboxText[9]="(player) yes I’ll do it.";
			game.npcboxText[9]="(Matt) ok great I’ll mark it on your map";
			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.pguard3.x-player.position.x)<50 && Math.abs(game.pguard3.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.pguard3.x;
			game.npcbox.y=game.pguard3.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You wake up one morning and you hear:";
			game.npcboxText[1]="(Guard1) .x. your time is over !";
			game.npcboxText[2]="(mind) 5 years finally !";
			game.npcboxText[3]="When you walk out you realise that nothing changed and that people acted like there was nothing that happened.";
			game.npcboxText[4]="(Guard1) go to the main city to find a job so that you don’t wonder around and end up here again";
			game.npcboxText[5]="(player)Thank you";

			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.ervin.x-player.position.x)<50 && Math.abs(game.ervin.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.ervin.x;
			game.npcbox.y=game.ervin.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You went to the half moon island and meet his friend.";
			game.npcboxText[1]="(mind) go easy on him";
			game.npcboxText[2]="A. (player) hey your friend Hank told me you had a book for him";
			game.npcboxText[3]="(Ervin) hey he did not tell me to give it to you but sure thank you for taking it i can’t really move right now.";
			game.npcboxText[4]="(player) thank you bye";
			game.npcboxText[5]="(Ervin) bye.";
			game.npcboxText[6]="B. (player) hey! do you have stephanie’s book?";
			game.npcboxText[7]="(Ervin) yea but he did not tell me to give it to you.";
			game.npcboxText[8]="(player) give it to me he needs it !";
			game.npcboxText[9]="(Ervin) sure but don’t lose it!";
			game.npcboxText[10]="(player) by";
			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		} else if(Math.abs(game.blanks.x-player.position.x)<50 && Math.abs(game.blanks.y-player.position.y)<50){

		if(game.npcboxActive<=1){


			game.npcbox.x=game.blanks.x;
			game.npcbox.y=game.blanks.y;
			//We choose the frame to use for the info-box....

			game.npcbox.visible = true;

			game.npcboxActive = 1;

			//Here the text we want
			game.npcboxText[0]="You went exploring and following the map you finally found this island that was very far and you see the guard in his house";
			game.npcboxText[1]="(mind) Options that you have";
			game.npcboxText[2]="A. Trick him";
			game.npcboxText[3]="(player) I need help!";
			game.npcboxText[4]="(Blanks) Go away ! or i’ll have you killed!";
			game.npcboxText[5]="(player) come out we need to talk !";
			game.npcboxText[6]="Hank pulls out a gun before you can shot him and kills you";
			game.npcboxText[7]="B. Fight him";
			game.npcboxText[8]="(mind) sneak up on him and shot him";
			game.npcboxText[9]=".x. sneaks up on him and engages in a fight";
			game.npcboxText[10]="(Blanks) get out of here or i’ll have you killed!";
			game.npcboxText[10]=".x. kills Blanks";
			//We bring it to the top, so other sprite don't cover it
			game.npcbox.bringToTop();

			}

		}

		// else if(Math.abs(game.hank.x-player.position.x)<50 && Math.abs(game.hank.y-player.position.y)<50){

		// if(game.npcboxActive<=1){


		// 	game.npcbox.x=game.hank.x;
		// 	game.npcbox.y=game.hank.y;
		// 	//We choose the frame to use for the info-box....

		// 	game.npcbox.visible = true;

		// 	game.npcboxActive = 1;

		// 	//Here the text we want
		// 	game.npcboxText[0]="aa";
		// 	game.npcboxText[1]="aa";
		// 	game.npcboxText[2]="aa";
		// 	game.npcboxText[3]="aa";
		// 	game.npcboxText[4]="aa";
		// 	game.npcboxText[5]="aa";
		// 	game.npcboxText[6]="aa";
		// 	game.npcboxText[7]="aa";
		// 	game.npcboxText[8]="aa";
		// 	game.npcboxText[9]="aa";
		// 	game.npcboxText[10]="aa";
		// 	//We bring it to the top, so other sprite don't cover it
		// 	game.npcbox.bringToTop();

		// 	}

		// }

		else {
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
	/****************************************************/
}