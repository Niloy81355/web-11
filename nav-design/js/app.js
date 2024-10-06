// document.querySelector('.btn').addEventListener('click',()=>{
//     let menu = document.querySelector('.nav-ul');
//     menu.classList.toggle('sow-ul')
// });

$(document).ready(function(){
    $('.btn').click(function(){
        $('.nav-ul').slideToggle();
    });
    $('.aim').waypoint(function(){
        $('.aim').addClass('animate__animated animate__backOutLeft');
    });
});





// $(document).ready(function(){
//     $('.btn').click(function(){
//         $('.nav-ul').toggle();
//     });
// });


