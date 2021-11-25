$(function(){
    $('#start').click(function(){
        var valPseudo = ($('#pseudo-bar').val()!='')? $('#pseudo-bar').val() : 'Player 1';
        $('#playerName').html(valPseudo);
        $('#menu').hide("slow");
        $('#page-jeu').show("slow");

    })
    $('#menu-show').click(function(){
        $('#page-jeu').hide("slow");
        $('#menu').show("slow")
    })


    
    else if(function(){
        (CPU=='scisors'&& user=='paper')
        ||(CPU=='paper'&& user=='rock')
        ||(CPU=='rock'&& user=='scisors')
        computerScore++;
        changeColor('computer');
    })
    else{
        userScore++;
        changeColor('player');
    }





})