
jQuery(document).ready(function($){
    // NOTE : the z-indexing used in this example's css and script will not have the
    // desired effect in IE below version 8; you'd have to use a jquery $().hover()
    var itemCount = $('#menu-carousel').children().length
        // set up the options to be used for jqDock...
      , dockOptions =
        { align: 'top' // horizontal menu, with expansion DOWN from a fixed TOP edge
        , size: 60 //increase 'at rest' size to 60px
          //I'm using setLabel to append my jigsaw pieces. I could use onReady but
          //the setLabel is slightly more convenient because of the parameters
          //passed to it...
           items: 4,
            responsiveBaseWidth: '#owl-example'
        , setLabel: function(t, i, el){  //NB : el is div.jqDockLabel
            //the last piece has an extra class...
            //the jigsaw image is appended directly onto the anchor...
            $('<img class="jigsaw" src="' + t + '" alt="" />')
              .css({zIndex:itemCount - i})
              .appendTo($(el).parent().css({zIndex:2 * (itemCount - i)}));
            //I'm not using labels here but if was I'd simply return t...
            return false;
          }
        };
    // ...and apply...
    $('#menu-carousel').jqDock(dockOptions);
  });
