$(window).ready(function(){
    //remove ads start
    setTimeout(deleteit(),3000);
    console.log(`ads removed`);
    //ads removed
});

function deleteit(){
    $('pngrndiv').html('');
    $('pngrndiv').css('display','none !important');
    console.log(`maap`);
}