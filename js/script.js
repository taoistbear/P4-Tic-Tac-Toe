//******************************************************************************
//Tic-Tac-Toe P4-Treehouse Full Stack Tech Degree
//******************************************************************************
!function() {
  'use strict';
  //******************************************************************************
  // *** - DONE - *** on-load show start up screen, use tictactoe-01-start.png mockup and start.txt html snippet
  //******************************************************************************
  //CREATE A DIV TO HOLD THE START SCREEN
  var $startScreen = $('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header><div>');
  //APPEND START SCREE TO BEGING OF BODY
  $('body').prepend($startScreen);
  //HIDE THE GAME BOARD
  $('.board').hide();

  //******************************************************************************
  // *** - DONE - *** start button removes the start screen and begin the game with game board, use titctactoe-02-inprogress.png mockup and board.txt html snippet
  //******************************************************************************
  //CREATE CLICK HOLDER TO HIDE START SCREEN AND SHOW BOARD
  $('#start a').on('click', function() {
    $('#start').hide();
    $('.board').show();
    //SET PLAYER 1 AS ACTIVE PLAYER TO START
    $('#player1').addClass('active');
  })

  //******************************************************************************
  //add game play for the following rules
  //  *play alternates between X and O
  //  *current player indicated (hint add class .active)
  //  *on hover the player symbol should appear on the square
  //  *can only click on empty squares add class .box-filled-1 (for ) .box-filled-2 (for x)
  //  *game ends when 3 in a row (horizontal, diagnoal, virticle) or draw
  //******************************************************************************
  //START OF GAME PLAY FUNCTION
  $('.box').click(function() {
    //SET THE PLAYER SELECTION ON CLICK WITH PREVIOUSLY DEFINED TOGGLE
    if ($(this).hasClass('box-filled-1') || $(this).hasClass('box-filled-2')) {
        alert('Please Select Another Square');
        return;
    } else if ($('#player1').hasClass('active')) {
      $(this).addClass('box-filled-1');
    } else {
      $(this).addClass('box-filled-2');
    }
    //TOGGLE 'ACTIVE' CLASS TO DETERMINE WHO IS PLAYING
    $('.players').toggleClass('active');
  })
  //SET UP HOVER LISTENER TO CHANGE BACKGROUND TO SHOW PLAYER SYMBOL
  $('.box').mouseover(function() {
    var $hoverBox = $(this);
  })
  //******************************************************************************
  //game end: board dissapears with winner or draw screen use tictactoe-03-winner1.png and tictactoe-04-winner4.png mockups along with win.txt snippet for guidance
  //******************************************************************************

  //******************************************************************************
  //when player pushes new game the board resets
  //******************************************************************************

  //******************************************************************************
  //use a module pattern to wrapped JS in IIF
  //******************************************************************************

  //******************************************************************************
  //*** EXTRA CREDIT
  //*** *** ALLOW PLAYERS TO ENTER THEIR NAME AND WIN PAGE SHOULD SHOW NAME
  //******************************************************************************
}();
