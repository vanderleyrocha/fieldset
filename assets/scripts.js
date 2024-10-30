
jQuery(document).ready(function(){
	
  /*
    Scroll To Top 
  */
  $('.to-top a').on('click', function(e) {
    e.preventDefault();
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  
});
