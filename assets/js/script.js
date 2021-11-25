$(function(){
    let userChoice;
    let cpuChoice;
    let cptUser = 0;
    let cptCpu = 0;
    let winningGames = 3;
    let choices = document.querySelectorAll('.playerChoice');
        let audioOn = false; //variable qui permet d'éviter de rajouter la couche audio si on reclique sur 'START'.
//SHOW HIDE des MENUS
    $('#start').click(function(){
        var valPseudo = ($('#pseudo-bar').val()!='')? $('#pseudo-bar').val() : 'Player 1';
        $('#playerName').html(valPseudo);
        $('#menu').hide("slow");
        $('#page-jeu').show("slow");

//MUSIQUE
    if(audioOn===false) {
        var song = new Audio();
        song.src = 'Retrowave_Music.mp3';
        song.play();
        song.loop=true;
        audioOn = true;
    }


//-----//

    })
    $('#menu-show').click(function(){
        $('#page-jeu').hide("slow");
        $('#menu').show("slow")
    })





    $('.playerChoice').draggable({ revert: "invalid" });


    $('.playerChoice').on('dragstart', function (event) {
        userChoice = $(this).attr('id');
        $("#field-right").html('');
    });  


    $('#field-left').droppable({
        drop: function(event, ui) {
            $(this).css('background', '#fcdc12');
            fight();
        },
        over: function(event, ui) {
            $(this).css('background', 'orange');
        },
        out: function(event, ui) {
            $(this).css('background', 'transparent');
        },
        
    });





    function getCPUChoice() {
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].id;
        $("#field-right").css('background', '#fcdc12').html(`<img class="image" src="assets/img/${cpuChoice}.png">`);
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
            }
        else {
            console.log(`CPU wins`);
            cptCpu++;
            $(`#circle-cpu-${cptCpu}`).css('visibility', 'visible');
        }

        if((cptCpu==winningGames)||(cptUser==winningGames)){
            if(cptCpu==winningGames) { alert('You lose');}
            else { alert ('You win');}

        }

        //Reset du choix du joueur. Bon chance!

    }




})