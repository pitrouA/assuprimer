
// function exo1(){
//   array_joursSemaine = ["lundi", "mardi", "mercredi","jeudi", "vendredi", "samedi", "dimanche"];
//   $(".console").append("<h1>exo1</h1>");
//   $(".console").append("<p>jour 3 : "+array_joursSemaine[2]+"</p>");
// }
//
// function exo2(){
//   arr_listOfNumber = [];
//   for(var i=1;i<=9;i++){
//       arr_listOfNumber[i-1] = i;
//   }
//   n_item = arr_listOfNumber[2];
//   arr_listOfNumber[2] = 50;
//   $(".console").append("<h1>exo2</h1>");
//   $(".console").append("<p>n_item : "+n_item+"<br>arr_listOfNumbers : "+arr_listOfNumber+"</p>");
// }
//
// function exo3(){
//   arr_listOfNumber = [];
//   for(var i=1;i<=9;i++){
//       arr_listOfNumber[i-1] = i;
//   }
//   arr_listOfNumber.push(31);
//   arr_listOfNumber.unshift(0);
//   $(".console").append("<h1>exo3</h1>");
//   $(".console").append("<p>arr_listOfNumbers : "+arr_listOfNumber+"</p>");
// }
//
// function exo4(s_entree){
//   $(".console").append("<h1>exo4</h1>");
//
//   console.log("entree : "+s_entree);
//
//   switch(s_entree){
//     case "lundi":$(".console").append("<p>lundi</p>");break;
//     case "mardi":$(".console").append("<p>mardi</p>");break;
//     case "mercredi":$(".console").append("<p>mercredi</p>");break;
//     default:$(".console").append("<p>reste semaine</p>");
//   }
// }

var assert = require('chai').assert;
assert.equal(Math.max(1, 5, 9), 9);

function exo5(){
  s_entree = prompt("entrer valeur")
  counter = 0;

  for(let i=0;i<s_entree.length;i++){
    if(s_entree[i] % 2 == 0){
      counter += parseFloat(s_entree[i]);
    }
  }

  return counter;
}

function exo6(){
  s_entree = prompt("entrer valeur")
  counter = 0;

  for(let i=1;i<=s_entree;i++){
    counter += i;
  }

  return counter;
}

$(document).ready(function(){
  // $("#testForm").submit(function(e) {
  //   console.log("gfddgfsdgf");
  //   e.preventDefault();
  //   //exo5($("#testForm").children("#reponse").val());
  //   //exo4($("#testForm").children("#reponse").val());
  // });
  $("#exo5Button").click(function(e) {
    //exo5($("#testForm").children("#reponse").val());
    //exo4($("#testForm").children("#reponse").val());
    $("#exo5").empty();
    $("#exo5").append(exo5());
  });

  $("#exo6Button").click(function(e) {
    //exo5($("#testForm").children("#reponse").val());
    //exo4($("#testForm").children("#reponse").val());
    $("#exo6").empty();
    $("#exo6").append(exo6());
  });
  // exo1();
  // exo2();
  // exo3();
  //exo4();
})
