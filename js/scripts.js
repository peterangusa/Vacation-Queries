$(document).ready(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault();

   var name = $("input#name").val();
   var date = $("input#date").val();
   var weather = $("[name=weather]:checked").val();
   var location = $("[name=location]:checked").val();
   var city = $("[name=city]:checked").val();
   var active = $("[name=active]:checked").val();
   var cost = $("[name=cost]:checked").val();
   var total1 = 0;
   var total2 = 0;
   var total3 = 0;
debugger;
// question 1
   if (weather === "b") {
     total1 += 10;
   } else if (weather === "a") {
     total2 += 5;
   } else if (weather === "c"){
     total3 += 1;
   }

// question 2
   if (location === "b") {
      total1 += 5;
    } else if (location === "c") {
      total2 += 1;
    } else if (location === "a") {
      total3 += 10;
    }

// question 3
   if (city === "c") {
      total1 += 1;
    } else if (city === "a") {
      total2 += 10;
    } else if (city === "b") {
      total3 += 5;
    }

// question 4
    if (active === "c") {
       total1 += 1;
     } else if (active === "b") {
       total2 += 5;
     } else if (active === "a") {
       total3 += 10;
     }

// question 5
   if (cost === "a") {
      total1 += 10;
    } else if (cost === "c") {
      total2 += 1;
    } else if (cost === "b") {
      total3 += 5;
    }

   if (total1 > total2 && total1 > total3) {
      $("#france").show();
      $("#Sa").hide();
      $("#hawaii").hide();
    } else if (total2 > total1 && total2 > total3) {
      $("#hawaii").show();
      $("#sa").hide();
      $("#france").hide();
    } else {
      $("#sa").show();
      $("#hawaii").hide();
      $("#france").hide();

    }
    $("#result").show();
    $(".name").text(name);
    $(".date").text(date);

 });
});
