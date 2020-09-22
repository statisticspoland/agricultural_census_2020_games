$(function(){
if ((location.href).includes('segregacja/')){

							//wszystkie przedmioty do segregacji
							var answers_all = [{
									"text":		"Skórka od banana",
									"order":	"0",
									"correct": "bio_correct",
									"image": "../assets/img/smieci/banan.png"
								},{
									"text":		"Butelka po wodzie",
									"order":	"1",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/butelka.png"
								},{
									"text":		"Butelka po napoju gazowanym",
									"order":	"2",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/cola.png"
								},{
									"text":		"Rozbity porcelanowy czajnik",
									"order":	"3",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/czajnik-porcelanowy.png"
								},{
									"text":		"Słoik po dżemie",
									"order":	"4",
									"correct": "szklo_correct",
									"image": "../assets/img/smieci/dzem.png"
								},{
									"text":		"Stara gazeta",
									"order":	"5",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/gazeta.png"
								},{
									"text":		"Herbaciane fusy",
									"order":	"6",
									"correct": "bio_correct",
									"image": "../assets/img/smieci/herbata.png"
								},{
									"text":		"Stare jabłko",
									"order":	"7",
									"correct": "bio_correct",
									"image": "../assets/img/smieci/jablko.png"
								},{
									"text":		"Stary katalog",
									"order":	"8",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/katalog.png"
								},{
									"text":		"Rozbity kieliszek",
									"order":	"9",
									"correct": "szklo_correct",
									"image": "../assets/img/smieci/kieliszek.png"
								},{
									"text":		"Resztki po kiełbasie",
									"order":	"10",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/kielbasa.png"
								},{
									"text":		"Puszka po konserwie",
									"order":	"11",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/konserwa.png"
								},{
									"text":		"Stara książka",
									"order":	"12",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/ksiazka.png"
								},{
									"text":		"Stare książki",
									"order":	"13",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/ksiazki.png"
								},{
									"text":		"Kości po kurczaku",
									"order":	"14",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/kurczak.png"
								},{
									"text":		"Zwiędła roślina",
									"order":	"15",
									"correct": "bio_correct",
									"image": "../assets/img/smieci/kwiat.png"
								},{
									"text":		"Patyk po lizaku",
									"order":	"16",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/lizak.png"
								},{
									"text":		"Kości po mięsie",
									"order":	"17",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/mieso.png"
								},{
									"text":		"Karton po mleku",
									"order":	"18",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/mleko.png"
								},{
									"text":		"Zapisany notes",
									"order":	"19",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/notes.png"
								},{
									"text":		"Ogryzek",
									"order":	"20",
									"correct": "bio_correct",
									"image": "../assets/img/smieci/ogryzek.png"
								},{
									"text":		"Zapisana kartka papieru",
									"order":	"21",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/papier.png"
								},{
									"text":		"Papierek po cukierku",
									"order":	"22",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/papierek.png"
								},{
									"text":		"Papierowa torba",
									"order":	"23",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/papierowa-torba.png"
								},{
									"text":		"Zepsuty papierowy samolot",
									"order":	"24",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/papierowy-samolot.png"
								},{
									"text":		"Opakowanie po perfumach",
									"order":	"25",
									"correct": "szklo_correct",
									"image": "../assets/img/smieci/perfumy.png"
								},{
									"text":		"Plastikowa torba",
									"order":	"26",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/plastic.png"
								},{
									"text":		"Zepsuty porcelanowy talerz",
									"order":	"27",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/porcelana.png"
								},{
									"text":		"Puszka po napoju",
									"order":	"28",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/puszeczka.png"
								},{
									"text":		"Puszka po rybie",
									"order":	"29",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/puszka.png"
								},{
									"text":		"Rachunek",
									"order":	"30",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/rachunek.png"
								},{
									"text":		"Kości po mięsie",
									"order":	"31",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/schab.png"
								},{
									"text":		"Słoik po maśle orzechowym",
									"order":	"32",
									"correct": "szklo_correct",
									"image": "../assets/img/smieci/sloik.png"
								},{
									"text":		"Słoik po ogórkach",
									"order":	"33",
									"correct": "szklo_correct",
									"image": "../assets/img/smieci/sloj.png"
								},{
									"text":		"Karton po soku",
									"order":	"34",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/soczek.png"
								},{
									"text":		"Plastikowy kubek po napoju",
									"order":	"35",
									"correct": "plastik_correct",
									"image": "../assets/img/smieci/sok.png"
								},{
									"text":		"Szklana butelka po szampanie",
									"order":	"36",
									"correct": "szklo_correct",
									"image": "../assets/img/smieci/szklana-butelka.png"
								},{
									"text":		"Zużyty papier toaletowy",
									"order":	"37",
									"correct": "czarny_correct",
									"image": "../assets/img/smieci/toaletowy-papier.png"
								},{
									"text":		"Skoszona trawa",
									"order":	"38",
									"correct": "bio_correct",
									"image": "../assets/img/smieci/trawa.png"
								},{
									"text":		"Stara ulotka",
									"order":	"39",
									"correct": "papier_correct",
									"image": "../assets/img/smieci/ulotka.png"
								}
							];

						const generate = () => {
									let arrayContainer = [];
									const genNum = Math.floor(Math.random() * 40);
									arrayContainer.push(genNum);
									for (let counter = 0; counter < 13; counter++) {
											let newGen = Math.floor(Math.random() * 40);
											while (arrayContainer.lastIndexOf(newGen) !== -1) {
													newGen = Math.floor(Math.random() * 40);
											}
											arrayContainer.push(newGen);
									}

									return arrayContainer
							}


						var randoms = generate();
						var answers=[]
						for (i=0;i<randoms.length;i++){
								answers.push(answers_all[randoms[i]])
						}

						//kategorie
							var subcontainers = [{
									"text":		"Plastik",
									"id":		"plastik",
									"image": "../assets/img/kosze/zolty.png"
								}, {
									"text":		"Szkło",
									"id":		"szklo",
									"image": "../assets/img/kosze/zielony.png"
								}, {
									"text":		"Papier",
									"id":		"papier",
									"image": "../assets/img/kosze/niebieski.png"
								}, {
									"text":		"Bio",
									"id":		"bio",
									"image": "../assets/img/kosze/brazowy.png"
								}, {
									"text":		"Zwykłe",
									"id":		"czarny",
									"image": "../assets/img/kosze/czarny.png"
								}];



							//co do ktorej kategorii

							var plastik_correct = new Array();
							var szklo_correct = new Array();
							var papier_correct = new Array();
							var bio_correct = new Array();
							var czarny_correct = new Array();

							for (i=0;i<answers.length;i++){
									if (answers[i].correct=='plastik_correct'){
										plastik_correct.push('answer'+(answers[i].order).toString());
									}else if(answers[i].correct=='szklo_correct'){
										szklo_correct.push('answer'+(answers[i].order).toString());
									}else if(answers[i].correct=='bio_correct'){
										bio_correct.push('answer'+(answers[i].order).toString());
									}else if(answers[i].correct=='czarny_correct'){
										czarny_correct.push('answer'+(answers[i].order).toString());
									}else{
										papier_correct.push('answer'+(answers[i].order).toString());
									}
							}



							reset_game(); //rozpoczecie gry


							function reset_game() {

								$('#game_container #draggable_container').html('').removeClass();
								$('#game_container #droppable_container').html('');

								for (var j=0; j<5; j++) {
									$('<div><img src=' + subcontainers[j].image + ' class="kosze" width="190" height="215"></div>').attr('class', 'subcontainer').attr('id', subcontainers[j].id).appendTo('#game_container #droppable_container').sortable({
										containment: "#game_container",
										cursor: "move",
										revert: 250,
										connectWith: "#game_container .subcontainer",
										receive: function(event, ui) {
											if (ui.item.parents('#game_container .subcontainer')) {
												ui.item.removeClass('dragthis').addClass('dropped');
												if ($("#game_container #draggable_container").is(":empty")) {
													$("#game_container .qanswer").promise().done(function() {
														score_game();
													});
													var div = document.getElementById('draggable_container');
													div.innerHTML += '<div id="score_text"></div>';
												}
											} else {
												ui.item.removeClass('dropped').addClass('dragthis');
											}
										}
									}).disableSelection();
								}

								answers.sort(function(){ return (Math.round(Math.random())-0.5); });

								for (var i=0; i<answers.length; i++) {
									$('<div><img src=' + answers[i].image + ' width="70" height="70" title="'+answers[i].text+'"></div>').attr('id', 'answer' + answers[i].order).attr('class', 'dragthis qanswer').appendTo('#game_container #draggable_container');
								}


								$(document).ready(function() {
									var $body = $('body');
									var detectMouse = function(e){
											if (e.type === 'mousedown') {
													//detekcja myszki
													$("#game_container #draggable_container").sortable({
														connectWith: '#game_container .subcontainer',
														containment: '#game_container',
														cursor: 'move',
														items: 'div',
														revert: 250
													}).disableSelection();
											}
											else if (e.type === 'touchstart') {
													//detekcja touchpad
													$(".dragthis").draggable();
													$(".subcontainer" ).droppable({
														drop: function( event, ui ) {
																if (ui.draggable.parents('#game_container .subcontainer')) {
																	$(this).prepend(ui.draggable);
																	ui.draggable.removeClass('dragthis').addClass('dropped');
																	ui.draggable.css("left", "0px");
																	ui.draggable.css("top", "0px");
																	if ($("#game_container #draggable_container").is(":empty")) {
																		var div = document.getElementById('draggable_container');
																		div.innerHTML += '<div id="score_text"></div>';
																		$("#game_container .qanswer").promise().done(function() {
																			score_game();
																		});
																	}
																} else {
																	ui.draggable.removeClass('dropped').addClass('dragthis');
																}
														}
												});
											}
											$body.off('mousedown touchstart', detectMouse);
									}
									$body.on('mousedown touchstart', detectMouse);
								});

							}




							function score_game() {
								$("#game_container .subcontainer").each(function(index){
									$(this).sortable("option","disabled",true);
								});

								$correctcounter = 0;
								$("#game_container .dropped").each(function(index){
									$thisid = $(this).attr('id');
									$parentid = $(this).parent().attr('id');
									$(this).css('cursor','default');
									if (
										($.inArray($thisid, plastik_correct) > -1 && $parentid == 'plastik') ||
										($.inArray($thisid, szklo_correct) > -1 && $parentid == 'szklo') ||
										($.inArray($thisid, papier_correct) > -1 && $parentid == 'papier') ||
										($.inArray($thisid, bio_correct) > -1 && $parentid == 'bio') ||
										($.inArray($thisid, czarny_correct) > -1 && $parentid == 'czarny')
									) {
										$(this).addClass('correct', 800).removeClass('dropped', 800);
										$correctcounter++;
									} else {
										$(this).addClass('incorrect', 800).removeClass('dropped', 800);
									}
								});


								$('.qanswer').show();
								$('#draggable_container').css("font-family","FiraSansBold").css("color","#001d77").css('background-image', 'none');


								/*if($correctcounter>2){
									$("#game_container #draggable_container").css('background-image','url("assets/css/images/super_tlo2.jpg")');
								}else{
									$("#game_container #draggable_container").css('background-image','url("assets/css/images/zle_tlo2.jpg")');
								}*/

								$('#game_container #draggable_container #score_text').html('Dobrze posegregowałeś <span class="score">' + $correctcounter + '</span> z 14 produktów!');

								var maxHeight = 0;
								$('.subcontainer').each(function(){
									 maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
								});
								$(".subcontainer").css('height',maxHeight).css('position','relative');
								$(".kosze").css('position','absolute').css('bottom','0');
							}
}

})
