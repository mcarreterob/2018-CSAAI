var piezas_p1 = ["p1_0.png","p1_1.png","p1_2.png","p1_3.png","p1_4.png","p1_5.png","p1_6.png","p1_7.png"]; //puzzle1
var piezas_p2 = ["p2_0.png","p2_1.png","p2_2.png","p2_3.png","p2_4.png","p2_5.png","p2_6.png","p2_7.png"]; //puzzle2
var piezas_p3 = ["p3_0.png","p3_1.png","p3_2.png","p3_3.png","p3_4.png","p3_5.png","p3_6.png","p3_7.png"]; //puzzle3
var piezas_p4 = ["p4_0.png","p4_1.png","p4_2.png","p4_3.png","p4_4.png","p4_5.png","p4_6.png","p4_7.png"]; //puzzle4
var piezas_p5 = ["p5_0.png","p5_1.png","p5_2.png","p5_3.png","p5_4.png","p5_5.png","p5_6.png","p5_7.png"]; //puzzle5
var piezas_p6 = ["p6_0.png","p6_1.png","p6_2.png","p6_3.png","p6_4.png","p6_5.png","p6_6.png","p6_7.png"]; //puzzle6
var piezas_p7 = ["p7_0.png","p7_1.png","p7_2.png","p7_3.png","p7_4.png","p7_5.png","p7_6.png","p7_7.png"]; //puzzle7
var piezas_p8 = ["p8_0.png","p8_1.png","p8_2.png","p8_3.png","p8_4.png","p8_5.png","p8_6.png","p8_7.png"]; //puzzle8
var piezas_p9 = ["p9_0.png","p9_1.png","p9_2.png","p9_3.png","p9_4.png","p9_5.png","p9_6.png","p9_7.png"]; //puzzle9
var piezas_p10 = ["p10_0.png","p10_1.png","p10_2.png","p10_3.png","p10_4.png","p10_5.png","p10_6.png","p10_7.png"]; //puzzle10

var puzzles = ["puzzle1.jpg", "puzzle2.jpg", "puzzle3.jpg", "puzzle4.jpg", "puzzle5.jpg",
               "puzzle6.jpg", "puzzle7.jpg", "puzzle8.jpg", "puzzle9.jpg", "puzzle10.jpg"];

var orden_piezas = [0, 1, 2, 3, 4, 5, 6, 7]; //piezas del puzle a desordenar
var orden_puzzles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //puzzles elegibles a desordenar
//"Ordeno" el array 'orden_piezas' de manera aleatoria
var piezas_random = orden_piezas.sort(() => Math.random() > 0.5 ? 1 : -1);
//"Ordeno" el array 'orden_puzzles' de manera aleatoria
var orden_puzzles_random_number = orden_puzzles.sort(() => Math.random() > 0.5 ? 1 : -1);
var orden_puzzles_random = [];
var i ;

var seconds = 0;
var minutes = 0;
var hours = 0;
var countingInterval;
var highscore = [];
var clock = [];

function start_counting(){
  clock = hours + ":" + minutes + ":" + seconds;
  seconds += 1;
  if (seconds == 60) {
    minutes += 1;
    seconds = 0;
    if (minutes == 60){
      hours += 1;
      minutes = 0;
    }
  }
  document.getElementById("counter").innerHTML = clock;
}

for (i=0; i<10; i++){
  orden_puzzles_random[i] = "puzzle" + orden_puzzles_random_number[i] + ".jpg";
}
//Coloco 3 imagenes de puzzle random en la galeria
document.getElementById("gallery1").src = orden_puzzles_random[0];
document.getElementById("gallery2").src = orden_puzzles_random[1];
document.getElementById("gallery3").src = orden_puzzles_random[2];

//Cambio periodico de las imagenes de la galeria
function gallery_timing(){
  if (seconds > 15 && seconds <= 30){
    document.getElementById("gallery1").src = orden_puzzles_random[3];
    document.getElementById("gallery2").src = orden_puzzles_random[4];
    document.getElementById("gallery3").src = orden_puzzles_random[5];
  }else if (seconds >= 31 && seconds <=45){
    document.getElementById("gallery1").src = orden_puzzles_random[6];
    document.getElementById("gallery2").src = orden_puzzles_random[7];
    document.getElementById("gallery3").src = orden_puzzles_random[8];
  }else if (seconds >= 46){
    document.getElementById("gallery1").src = orden_puzzles_random[9];
    document.getElementById("gallery2").src = orden_puzzles_random[1];
    document.getElementById("gallery3").src = orden_puzzles_random[2];
  }else{
    document.getElementById("gallery1").src = orden_puzzles_random[0];
  }
}
//Coloco la imagen seleccionada en el tablero del puzzle
function colocar_puzzle1(){
  document.getElementById("tablero").style.background = null;
  var blanco = document.getElementById("8").style.background = "url(blanco.jpg)";
  //Introduzco las imagenes en la tabla (hasta el momento vacia) de manera desordenada
  if (seconds > 15 && seconds <= 30){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[3] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[3];
  }else if (seconds >= 31 && seconds <=45){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[6] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[6];
  }else if (seconds >= 46){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[9] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[9];
  }else{
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[0] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[0];
  }
  setInterval(gallery_timing, 1000);
  clearInterval(countingInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  countingInterval = setInterval(start_counting, 1000);
}
function colocar_puzzle2(){
  document.getElementById("tablero").style.background = null;
  var blanco = document.getElementById("8").style.background = "url(blanco.jpg)";
  //Introduzco las imagenes en la tabla (hasta el momento vacia) de manera desordenada
  if (seconds > 15 && seconds <= 30){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[4] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[4];
  }else if (seconds >= 31 && seconds <=45){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[7] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[7];
  }else{
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[1] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[1];
  }
  setInterval(gallery_timing, 1000);
  clearInterval(countingInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  countingInterval = setInterval(start_counting, 1000);
}
function colocar_puzzle3(){
  document.getElementById("tablero").style.background = null;
  var blanco = document.getElementById("8").style.background = "url(blanco.jpg)";
  //Introduzco las imagenes en la tabla (hasta el momento vacia) de manera desordenada
  if (seconds > 15 && seconds <= 30){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[5] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[5];
  }else if (seconds >= 31 && seconds <=45){
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[8] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[8];
  }else{
    for (i=0; i<8; i++){
      document.getElementById(i).style.background = "url(p" + orden_puzzles_random_number[2] + "_" + piezas_random[i] + ".png)";
    }
    document.getElementById("reference").src = orden_puzzles_random[2];
  }
  setInterval(gallery_timing, 1000);
  clearInterval(countingInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  countingInterval = setInterval(start_counting, 1000);
}

//Empieza el movimiento de piezas. Hay una funcion por cada pieza dependiendo de la casilla del puzzle en la que se encuentre
function mover_pieza_0(){
  if (document.getElementById("1").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("0").style.background;
    var hueco = document.getElementById("1").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("0").style.background = movimiento[1];
    document.getElementById("1").style.background = movimiento[0];
  }else if(document.getElementById("3").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("0").style.background;
    var hueco = document.getElementById("3").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("0").style.background = movimiento[1];
    document.getElementById("3").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_1(){
  if (document.getElementById("0").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("1").style.background;
    var hueco = document.getElementById("0").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("1").style.background = movimiento[1];
    document.getElementById("0").style.background = movimiento[0];
  }else if(document.getElementById("2").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("1").style.background;
    var hueco = document.getElementById("2").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("1").style.background = movimiento[1];
    document.getElementById("2").style.background = movimiento[0];
  }else if(document.getElementById("4").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("1").style.background;
    var hueco = document.getElementById("4").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("1").style.background = movimiento[1];
    document.getElementById("4").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_2(){
  if (document.getElementById("1").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("2").style.background;
    var hueco = document.getElementById("1").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("2").style.background = movimiento[1];
    document.getElementById("1").style.background = movimiento[0];
  }else if(document.getElementById("5").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("2").style.background;
    var hueco = document.getElementById("5").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("2").style.background = movimiento[1];
    document.getElementById("5").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_3(){
  if (document.getElementById("0").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("3").style.background;
    var hueco = document.getElementById("0").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("0").style.background = movimiento[0];
    document.getElementById("3").style.background = movimiento[1];
  }else if(document.getElementById("4").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("3").style.background;
    var hueco = document.getElementById("4").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("3").style.background = movimiento[1];
    document.getElementById("4").style.background = movimiento[0];
  }else if(document.getElementById("6").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("3").style.background;
    var hueco = document.getElementById("6").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("3").style.background = movimiento[1];
    document.getElementById("6").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_4(){
  if (document.getElementById("1").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("4").style.background;
    var hueco = document.getElementById("1").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("4").style.background = movimiento[1];
    document.getElementById("1").style.background = movimiento[0];
  }else if(document.getElementById("3").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("4").style.background;
    var hueco = document.getElementById("3").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("4").style.background = movimiento[1];
    document.getElementById("3").style.background = movimiento[0];
  }else if(document.getElementById("5").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("4").style.background;
    var hueco = document.getElementById("5").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("4").style.background = movimiento[1];
    document.getElementById("5").style.background = movimiento[0];
  }else if(document.getElementById("7").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("4").style.background;
    var hueco = document.getElementById("7").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("4").style.background = movimiento[1];
    document.getElementById("7").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_5(){
  if (document.getElementById("8").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("5").style.background;
    var hueco = document.getElementById("8").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("5").style.background = movimiento[1];
    document.getElementById("8").style.background = movimiento[0];
  }else if(document.getElementById("4").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("5").style.background;
    var hueco = document.getElementById("4").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("5").style.background = movimiento[1];
    document.getElementById("4").style.background = movimiento[0];
  }else if(document.getElementById("2").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("5").style.background;
    var hueco = document.getElementById("2").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("5").style.background = movimiento[1];
    document.getElementById("2").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_6(){
  if (document.getElementById("3").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("6").style.background;
    var hueco = document.getElementById("3").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("6").style.background = movimiento[1];
    document.getElementById("3").style.background = movimiento[0];
  }else if(document.getElementById("7").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("6").style.background;
    var hueco = document.getElementById("7").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("6").style.background = movimiento[1];
    document.getElementById("7").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_7(){
  if (document.getElementById("8").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("7").style.background;
    var hueco = document.getElementById("8").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("7").style.background = movimiento[1];
    document.getElementById("8").style.background = movimiento[0];
  }else if(document.getElementById("6").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("7").style.background;
    var hueco = document.getElementById("6").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("7").style.background = movimiento[1];
    document.getElementById("6").style.background = movimiento[0];
  }else if(document.getElementById("4").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("7").style.background;
    var hueco = document.getElementById("4").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("7").style.background = movimiento[1];
    document.getElementById("4").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}

function mover_pieza_8(){
  if (document.getElementById("7").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("8").style.background;
    var hueco = document.getElementById("7").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("8").style.background = movimiento[1];
    document.getElementById("7").style.background = movimiento[0];
  }else if(document.getElementById("5").style.background == 'url("blanco.jpg")'){
    var pieza_a_mover = document.getElementById("8").style.background;
    var hueco = document.getElementById("5").style.background;
    var movimiento = [pieza_a_mover, hueco];
    document.getElementById("8").style.background = movimiento[1];
    document.getElementById("5").style.background = movimiento[0];
  }else{
    null;
  }
  ganar();
}
function ganar(){
  for (i=0; i<10; i++){
    if (document.getElementById(0).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 0 + '.png")'){
      if (document.getElementById(1).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 1 + '.png")'){
        if (document.getElementById(2).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 2 + '.png")'){
          if (document.getElementById(3).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 3 + '.png")'){
            if (document.getElementById(4).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 4 + '.png")'){
              if (document.getElementById(5).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 5 + '.png")'){
                if (document.getElementById(6).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 6 + '.png")'){
                  if (document.getElementById(7).style.background == 'url("p' + orden_puzzles_random_number[i] + "_" + 7 + '.png")'){
                    for (i=0; i<9; i++){
                      document.getElementById(i).style.background = null;
                    }
                    document.getElementById("tablero").style.background = 'url("rajoy.gif")';
                    document.getElementById("tablero").style.backgroundSize = "603px 462px";
                    clearInterval(countingInterval);
  		              nickname = prompt("New Highscore! Write your name");
            		    if (nickname != "" && nickname != null) {
            		      player = nickname;
             		    }else{
            			    player = "no name (write yours the next time)";
            		    };
            		    highscore.push(nickname, clock);
                    console.log(highscore);
                    var user_position = highscore.indexOf(nickname);
                    if (user_position != -1){
                      if (clock.split(":")[1] == highscore[user_position+1].split(":")[1]){
                        if (clock.split(":")[2] < highscore[user_position+1].split(":")[2]){
                          alert("Congratulations, you beat your highscore!");
                        }else{
                          return ;
                        }
                      }else if (clock.split(":")[1] < highscore[user_position+1].split(":")[1]){
                        alert("Congratulations, you beat your highscore!");
                      }else{
                        return ;
                      }
                    }else{
                    return ;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
