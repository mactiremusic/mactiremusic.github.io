$(document).ready(function(){
  $(".hamburger-container").click(function(){
    $(".navbar").slideToggle();
  })
  
  $(".album-link").mouseenter(function(){
    $(this).animate({ backgroundColor: 'white' }, { duration: 200, queue: false});
    $(this).animate({ color: 'black' }, { duration: 200, queue: false});
  });
  $(".album-link").mouseleave(function(){
    $(this).animate({ backgroundColor: 'transparent' }, { duration: 200, queue: false});
    $(this).animate({ color: 'white' }, { duration: 200, queue: false});
  });
  
  
  
  $("i").mouseenter(function(){
    $(this).animate({ color: 'black' }, { duration: 200, queue: false});
  })
  $("i").mouseleave(function(){
    $(this).animate({ color: 'white' }, { duration: 200, queue: false});
  })
});