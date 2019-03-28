$(document).ready(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault();

   var name = document.getElementById('name').value
   var date = document.getElementById('date').value

   var total1 = 0;
   var total2 = 0;
   var total3 = 0;
// question 1
   function one(weather) {
     if (document.getElementById('weather1').checked) {
       total1+=10;
       return total1;
     }
     else if (document.getElementById('weather2').checked) {
       total2+=5;
       return total2;
     }
     else {
        total3+=3;
        return total3;
     }
 }

 function two(location) {
   if (document.getElementById('location1').checked) {
     total1+=10;
     return total1;
   }
   else if (document.getElementById('location2').checked) {
     total2+=5;
     return total2;
   }
   else {
      total3+=3;
      return total3;
   }
 }
 function three(city) {
   if (document.getElementById('city1').checked) {
     total1+=10;
     return total1;
   }
   else if (document.getElementById('city2').checked) {
     total2+=5;
     return total2;
   }
   else {
      total3+=3;
      return total3;
   }
 }
 function four(self) {
   if (document.getElementById('self1').checked) {
     total1+=10;
     return total1;
   }
   else if (document.getElementById('self2').checked) {
     total2+=5;
     return total2;
   }
   else {
      total3+=3;
      return total3;
   }
 }
 function five(money) {
   if (document.getElementById('money1').checked) {
     total1+=10;
     return total1;
   }
   else if (document.getElementById('money2').checked) {
     total2+=5;
     return total2;
   }
   else {
      total3+=3;
      return total3;
   }
 }
var one=one()
var two=two()
var three=three()
var four=four()
var five=five()
var answer=[one,two,three,four,five]
alert (answer)




// question 2
  /* function location () {
     if (location === "b") {
      total1 += 5;
      return total1;
    } else if (location === "c") {
      total2 += 1;
      return total2;
    } else if (location === "a") {
      total3 += 10;
      return total3;
    }
  }

// question 3
   function city() {
     if (city === "c") {
      total1 += 1;
      return total1;
    } else if (city === "a") {
      total2 += 10;
      return total2;
    } else if (city === "b") {
      total3 += 5;
      return total3;
    }
  }

// question 4
    function self() {
      if (active === "c") {
       total1 += 1;
       return total1;
     } else if (active === "b") {
       total2 += 5;
       return total2;
     } else if (active === "a") {
       total3 += 10;
       return total3;
     }
   }

// question 5
   function cost() {
     if (cost === "a") {
      total1 += 10;
      return total1;
    } else if (cost === "c") {
      total2 += 1;
      return total2;
    } else if (cost === "b") {
      total3 += 5;
      return total3;
    }
  }*/



  /*  if (total1 > total2 && total1 > total3) {
      $("#France").show();
      $("#South_Africa").hide();
      $("#Hawaii").hide();
    } else if (total2 > total1 && total2 > total3) {
      $("#Hawaii").show();
      $("#South_Africa").hide();
      $("#France").hide();
    } else {
      $("#South_Africa").show();
      $("#Hawaii").hide();
      $("#France").hide();

    }
    $("#result").show();
    $(".name").text(name);
    $(".date").text(date);*/

 });
});
