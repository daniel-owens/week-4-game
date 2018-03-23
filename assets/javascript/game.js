

$( document ).ready(function() {

	var Random=Math.floor(Math.random()*100+20)

	$('#random-number').text(Random);

    // chooses a random number between 1 and 12
	  var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    // variables
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#wins').text(wins);
	  $('#losses').text(losses);

	function reset() {
      Random = Math.floor(Math.random()*100+20);
      console.log(Random)
      $('#random-number').text(Random);
      num1 = Math.floor(Math.random()*12+1);
      num2 = Math.floor(Math.random()*12+1);
      num3 = Math.floor(Math.random()*12+1);
      num4 = Math.floor(Math.random()*12+1);
      userTotal= 0;
      $('#total').text(userTotal);
      } 

      function winner(){
	  $("#wins-losses").html("Oh. My. God. You won!");
        wins++; 
        $('#wins').text(wins);
        reset();
      }

      function loser(){
		$("#wins-losses").html("Haha! Sucker!");
        losses++;
        $('#losses').text(losses);
        reset();
	    }

       $('#blue').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#total').text(userTotal); 
          
           if (userTotal === Random){
             winner();
           }
           else if ( userTotal > Random){
             loser();
           }   
  })  
  
  	   $('#red').on ('click', function(){
  	    userTotal = userTotal + num2;
  	    console.log("New userTotal= " + userTotal);
  	    $('#total').text(userTotal); 
  	        
  	        if (userTotal === Random){
  	          winner();
  	        }
  	        else if ( userTotal > Random){
  	          loser();
  	        } 
  })  
  
  	   $('#green').on ('click', function(){
  	    userTotal = userTotal + num3;
  	    console.log("New userTotal= " + userTotal);
  	    $('#total').text(userTotal);
  	
            if (userTotal === Random){
                winner();
  	        }
  	        else if ( userTotal > Random){
  	          loser();
  	        } 
  })  
  
  	   $('#yellow').on ('click', function(){
  	    userTotal = userTotal + num4;
  	    console.log("New userTotal= " + userTotal);
  	    $('#total').text(userTotal); 
  	      
  	        if (userTotal === Random){
  	          winner();
  	        }
  	        else if ( userTotal > Random){
  	          loser();
  	        }
  });   

});