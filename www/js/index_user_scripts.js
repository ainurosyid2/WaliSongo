/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  #btnBack */
    
    
        /* button  Materi */
    
    
        /* button  Soal */
    
    
        /* button  #btnBack */
    $(document).on("click", "#btnBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Soal */
    
    
        /* button  Materi */
    
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
