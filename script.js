/*global $*/
/*global getElementByName*/
$(document).ready(function() {
    var name = getElementByName('name').val;
    var email = getElementByName('email').val;
    
    
    $('li').mouseenter(function(){
        $('li').fadeOut(slow, 0.5);
    }).mouseleave(function(){
        $('li').fadeIn(slow, 1);
    });
    
    
    $('.btn').click(function(){
        alert("HI" + name + "thank you for signing up! We will send an email to" + email  + "shortly");
        });
});