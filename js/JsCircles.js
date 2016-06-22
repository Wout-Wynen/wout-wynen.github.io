
var tick = 0;
var top123 = Math.floor((Math.random() *  window.innerHeight - 80) + 1);
var left123 = Math.floor((Math.random() * window.innerWidth - 50) + 1);
var cirkels = 0;
var ziekte = Math.floor((Math.random() * 4) + 1);
var easy = 2000;
var medium = 1000;
var fast = 500;
var i = 0;
var checker = [0];
var progessbar =  document.getElementById("progress");
var width = 0;
var j = 0;


var cijfer = prompt("Hoeveel virussen wil je verslaan ?");
cijfer = parseInt(cijfer);
while(isNaN(cijfer)){
  alert("Dit is geen cijfer!");
  var cijfer = prompt("Hoeveel virussen wil je verslaan ?");
}
var hoofddiv = document.getElementById("hoofdDiv");
var image = "0";

function makeCircle(cijfer) {

  if (i < cijfer){

       if (ziekte === 4){
           $('#hoofdDiv').append($('<div>', { id: 'circle'+i, 'text' : 'aids'}))
             document.getElementById("circle"+i).style.background = "Pink";
               document.getElementById("circle"+i).style.color = "blue";
       }
       else if (ziekte === 1){
           $('#hoofdDiv').append($('<div>', { id: 'circle'+i, 'text' : 'hepatitis'}))
             document.getElementById("circle"+i).style.background = "Brown";
               document.getElementById("circle"+i).style.color = "black";
       }
       else if (ziekte === 2){
           $('#hoofdDiv').append($('<div>', { id: 'circle'+i, 'text' : 'chlamydia'}))
             document.getElementById("circle"+i).style.background = "purple";
               document.getElementById("circle"+i).style.color = "green";
       }
       else if (ziekte === 3){
           $('#hoofdDiv').append($('<div>', { id: 'circle'+i, 'text' : 'syfillis'}))
             document.getElementById("circle"+i).style.background = "yellow";
               document.getElementById("circle"+i).style.color = "black";
       }

  document.getElementById("circle"+i).style.padding = "5px 20px";
  document.getElementById("circle"+i).style.width = "20px";
  document.getElementById("circle"+i).style.height = "50px";
  document.getElementById("circle"+i).style.position= "absolute";
  document.getElementById("circle"+i).style.top = top123 + "px";
  document.getElementById("circle"+i).style.left = left123 + "px";
  document.getElementById("circle"+i).style.borderRadius = "100%";
  document.getElementById("circle"+i).style.fontSize = "10px";
  document.getElementById("circle"+i).style.lineHeight = "30px";

  top123 = Math.floor((Math.random() * window.innerHeight - 80) + 1);
  while(top123 <= 150){
      top123 = Math.floor((Math.random() * window.innerHeight - 80) + 1);
    }
  left123 = Math.floor((Math.random() * window.innerWidth - 60) + 1);
  ziekte = Math.floor((Math.random() * 4) + 1);

  $( "#circle" + i).click( function() {
    var $this = $(this);
    if($this.data('clicked')) {

    }
    else {
       $this.data('clicked', true);
      document.getElementById(this.style.background = "Red");
      var newTween = TweenMax.set(this, {
    textShadow:"5px 0px 10px white, 0px 5px 10px white, -5px 0px 10px white, 0px -5px 10px white"
      });
      var tween = TweenLite.to(this, 2, {rotation:360000000});
      tween.duration(600);
      var tween2 = TweenLite.to(this, 2, {autoAlpha:0});
      tween2.duration(5);
      cirkels--;
    }


});

};
};
//slider to test the speed and ammount of the circles

$(document).ready(function(){




      $("#slider").click(function(){
        cirkels = cijfer;
        document.getElementById("welkomstTekst").style.visibility = 'hidden';
        document.getElementById("link").style.visibility = 'hidden';



        var e = document.getElementById("lvls");
        var snelheid = e.options[e.selectedIndex].value;
        console.log(snelheid);
        if (snelheid >= 1000){

          var playTime = cijfer * easy;
        }
        else if (snelheid >= 500){

          var playTime = cijfer * medium;
        }
        else if (snelheid >= 200){

          var playTime = cijfer * fast;
        }


        $("#slider").slideUp();
          tick++;
          if(tick === cijfer){
            window.clearInterval(makeCircle(cijfer));
          }


//timer for 'makeCircle' function
          var timer = setInterval(function(){

            makeCircle(cijfer);
            i++;
},snelheid);


        var timer2  = setInterval(function(){


            var time = playTime - 1000;
            console.log(playTime);
          if(playTime <= 1000){
          document.getElementById("resultaat").innerHTML = "U hebt verloren!";
          var tween4 = TweenMax.to("#resultaat", 0.2, {
          textShadow:"2px 2px 15px rgba(145, 233, 0, 1)",
              color:"#91ff00"
        });
        tween4.duration(5);

        clearInterval(timer2);
      }
      else if (cirkels === 0){
          document.getElementById("resultaat").innerHTML = "U hebt gewonnen!";
            var tween3 = TweenMax.to("#resultaat", 0.2, {
              textShadow:"2px 2px 15px rgba(145, 233, 0, 1)",
              color:"#91ff00"
    })
    tween3.duration(5);
    clearInterval(timer2);
        }


      else {
        document.getElementById("Counter").innerHTML = "Nog " + cirkels + " cirkels te gaan!";
        playTime = playTime - 1000;
        var seconds  = Math.floor(playTime/1000);
        document.getElementById("resultaat").innerHTML = seconds + " seconden";
      }








        //test(100);
      },1000);
      });
      });
