$(function(){
    let userChoice;
    let cpuChoice;
    let choices = document.querySelectorAll('.playerChoice');

    let cptUser = 0;
    let cptCpu = 0;
    let winningGames = 3;

    let audioOn = false; //variable qui permet d'éviter de rajouter la couche audio si on reclique sur 'START'.
//SHOW HIDE DES REGLES
$('#close').click(function(){
    $('#p-group').toggle();
    $('#close').html(($('#close').html()=="Afficher les Règles")? 'RÈGLES' : 'Afficher les Règles');
    });


//SHOW HIDE des MENUS :
    $('#start').click(function(){
        var valPseudo = ($('#pseudo-bar').val()!='')? $('#pseudo-bar').val() : 'Player 1';
        $('#playerName').html(valPseudo);
        $('#menu').hide("slow");
        $('#page-jeu').show("slow");

    //MUSIQUE :
        if(audioOn===false) {
            var song = new Audio();
            song.src = 'Retrowave_Music.mp3';
            song.play();
            song.loop=true;
            audioOn = true;
        }
    })

//AFFRONTEMENT :
    $('#menu-show').click(function(){
        $('#page-jeu').hide("slow");
        $('#menu').show("slow")
    })


    $('.playerChoice').draggable({ revert: "valid", revert: true }); //rend l'élément déplaçable


    $('.playerChoice').on('dragstart', function (event) {
        userChoice = $(this).attr('id');
        $("#field-right, #field-left").html('');
    });  


    $('#field-left').droppable({
        drop: function(event, ui) {
            $(this).css('background', 'linear-gradient(12deg, rgba(50,47,213,0.2) 5%, rgba(41,41,41,0.0) 50%, rgba(206,38,120,0.5) 100%)').html(`<img class="image doubleSize" src="assets/img/${userChoice}.png">`);
    
            fight();
        },
        over: function(event, ui) {
            $(this).css('background', 'linear-gradient(12deg, rgba(50,47,213,0.6) 5%, rgba(41,41,41,0.2) 50%, rgba(206,38,120,0.8) 100%)');
        },
        out: function(event, ui) {
            $(this).css('background', 'linear-gradient(12deg, rgba(50,47,213,0.2) 5%, rgba(41,41,41,0) 50%, rgba(206,38,120,0.5) 100%)');
        },
        
    });





    function getCPUChoice() {
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].id;
        $("#field-right").css('background', 'linear-gradient(12deg, rgba(50,47,213,0.2) 5%, rgba(41,41,41,0.0) 50%, rgba(206,38,120,0.5) 100%)').html(`<img class="image doubleSize" src="assets/img/${cpuChoice}.png" >`);
    }

    function fight() {
        getCPUChoice();
        console.log(`userChoice = ${userChoice}`);
        console.log(`cpuChoice = ${cpuChoice}`);

        if (userChoice == cpuChoice) {
            console.log(`Egalité`);
        }
        else if (
                (userChoice == 'rock' && cpuChoice == 'scissors')
                || (userChoice == 'scissors' && cpuChoice == 'paper')
                || (userChoice == 'paper' && cpuChoice == 'rock')
            ){
                console.log(`Player wins`);
                cptUser++;
                $(`#circle-player-${cptUser}`).css('visibility', 'visible');
                //ICI afficher le POINT!
                // var afficher =  setTimeout(function(){document.getElementById('point').style.display = "block";},3000);
                // setTimeout($('#point').hide(),5000);
                // setTimeout(function(){$('#point').show();}, 3000);
                function openWin() {
                    var myWindow = $('#point');
                    myWindow().show();
                    setTimeout(function(){ myWindow.hide() }, 3000);
                  }

            }
        else {
            console.log(`CPU wins`);
            cptCpu++;
            $(`#circle-cpu-${cptCpu}`).css('visibility', 'visible');
                //ICI afficher le MISS!
            // $('#miss').show();
            // var afficher =  setTimeout(function(){document.getElementById('miss').style.display = "block";},3000);
            // setTimeout($('#miss').hide(),5000);
            // setTimeout(function(){$('#miss').show();}, 3000);
            function openWin() {
                var myWindow = $('#miss');
                myWindow().show();
                setTimeout(function(){ myWindow.hide() }, 3000);
              }
            
        }

        if((cptCpu==winningGames)||(cptUser==winningGames)){
            if(cptCpu==winningGames) { alert('You lose');}
            else { alert ('You win');}
            $("#field-right, #field-left").html('');
        }

        //Reset du choix du joueur. Bon chance!

    }




})