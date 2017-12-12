// script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    /* -----------------
       jQUERY SELECTORS
       ----------------- */
    
    // Grouping selector
    // $('h2,h3,h4').css('border','solid 1px red');
    
    // ID selector
    // $('div#container').css('border','solid 1px red');
    
    // Class selector
    // $('p.lead').css('border','solid 1px red');
    
    // Pseudo-element selector - selects first element
    // $('li:first').css('border','solid 1px red');
    
    // Pseudo-element selector - selects even P tags
    // $('p:even').css('border','solid 1px red');
    
    // Descendant selector
    // $('div em').css('border','solid 1px red');
    
    // Child selector
    // $('div > p').css('border','solid 1px red');
    
    // jQuery Header selector
    // $(':header').css('border','solid 1px red');
    
    // jQuery Contains selector
    // $('div:contains("Brad")').css('border','solid 1px red');
    
    /* --------------------
       jQUERY EVENT METHODS
       -------------------- */
    
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() {
        
        $(this).text('you hovered in!');
        
    }, function() {
        
        $(this).text('you hovered out!');
        
    });
    
    
    /* -------------------
       jQUERY CAR RACR 2.0
       ------------------- */
    
    // Click the GO button
    $('#go').click(function() {

            // get the width of the cars
        var ballWidth = $('#blackball').width();
        
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - ballWidth;


        // manipulate their times

        //document.getElementById("myButton").onclick=function() {

        //var raceTime1 = $('#answer1').value();
       
        
       
        //var raceTime1=document.getElementById("answer1").value

        //var time1 = document.getElementById('answer1').value;
        //var raceTime1 = $('#answer1').value();
        //alert(time1);
       
        //if (raceTime1 = 0 && raceTime2 = 0 ) {
           // raceTime1 = Math.floor(5000);
            //raceTime2 = Math.floor(5000);
        //}
        //else {
       
       // }
         var raceTime1 = Math.floor(document.getElementById('answera').value);
         var raceTime2 = Math.floor(document.getElementById('answerb').value);


            //var raceTime1==document.getElementById("answer1").value

            //var racetime2==document.getElementById("answer1").value

        
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }
            
        }
        
        
        
        
        
        // set a flag variable to FALSE by default
        var isComplete = false;
        
        // set a flag variable to FIRST by default
        var place = 'first';
        
        // animate car 1
        $('#blackball').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
            
        });
        
        // animate car 2
        $('#greenball').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
            
        });
        
    });
    
    // reset the race
    $('#reset').click(function() {
        $('.ball').css('left','0');
        $('.raceInfo span').text('');
    });
    
    
    /* ---------------
       jQUERY CHAINING
       --------------- */
    
    $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();
    
    
    /* ----------------
       jQUERY HIDE/SHOW
       ---------------- */
    
    // $('h1').hide();
    // $('div.hidden').show();
    
    // $('div.hidden').fadeIn(8000);
    
    $('#box1').click(function() {
       $(this).fadeTo( 1000, 0.25, function() {
            // animation is complete
           
           $(this).slideUp();
       }); 
    });
    
    $('div.hidden').slideDown();
    
    $('button').click(function() {
        $('#box1').slideToggle();
    });
    
    
    /* ----------------
       jQUERY ANIMATE
       ---------------- */
    
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    /* ----------------
       jQUERY CSS
       ---------------- */
    
    $('#circle2').css({
        'background':'#8a8d22',
        'display':'inline-block',
        'color':'white',
        'text-align':'center',
        'line-height':'140px',
        'height':'140px',
        'width':'140px'
    }).addClass('circleShape');
    
});
    

















