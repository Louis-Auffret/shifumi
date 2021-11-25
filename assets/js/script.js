$(function(){
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


    

    // else if({
    //     (CPU=='scisors'&& user=='paper')
    //     ||(CPU=='paper'&& user=='rock')
    //     ||(CPU=='rock'&& user=='scisors')
    //     computerScore++;
    //     changeColor('computer');
    // })
    // else{
    //     userScore++;
    //     changeColor('player');
    // }





})