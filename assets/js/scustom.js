$(window).ready(function () {
  //first remove ads start
  let w = 5;
  const ie = setInterval(swag, 1000);
  function swag() {
    w === 0 ? (console.log(`ads removed`), clearInterval(ie)) : deleteit(w);
    w--;
  }
  //first ads removed
});

function deleteit(w) {
  $("pngrndiv").html("");
  $("pngrndiv").css("display", "none !important");
  console.log(`maap ke: ${w}`);
}

// function deletelagi() {
//   $("pngrndiv").html("");
//   $("pngrndiv").css("display", "none !important");
//   console.log(`duwasesi`);
// }

