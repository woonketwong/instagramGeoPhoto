	// var el = document.getElementById('photo');

	// function dragStart(ev) {
 //   ev.dataTransfer.effectAllowed='move';
 //   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));   ev.dataTransfer.setDragImage(ev.target,100,100);
 //   return true;
	// }

function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
   ev.dataTransfer.setDragImage(ev.target, 100, 100);
   return true;
}
function dragEnter(ev) {
   event.preventDefault();
   return true;
}
function dragOver(ev) {
     event.preventDefault();
}
function dragDrop(ev) {
   var data = ev.dataTransfer.getData("Text");
   ev.target.appendChild(document.getElementById(data));
   ev.stopPropagation();
   return false;
}

// function getPosition(element) {
//     var xPosition = 0;
//     var yPosition = 0;
  
//     while(element) {
//         xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//         yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//         element = element.offsetParent;
//     }
//     return { x: xPosition, y: yPosition };
// }



// (function($) {
//     $.fn.drags = function(opt) {

//         opt = $.extend({handle:"",cursor:"move"}, opt);

//         if(opt.handle === "") {
//             var $el = this;
//         } else {
//             var $el = this.find(opt.handle);
//         }

//         return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
//             if(opt.handle === "") {
//                 var $drag = $(this).addClass('draggable');
//             } else {
//                 var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
//             }
//             var z_idx = $drag.css('z-index'),
//                 drg_h = $drag.outerHeight(),
//                 drg_w = $drag.outerWidth(),
//                 pos_y = $drag.offset().top + drg_h - e.pageY,
//                 pos_x = $drag.offset().left + drg_w - e.pageX;
//             $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
//                 $('.draggable').offset({
//                     top:e.pageY + pos_y - drg_h,
//                     left:e.pageX + pos_x - drg_w
//                 }).on("mouseup", function() {
//                     $(this).removeClass('draggable').css('z-index', z_idx);
//                 });
//             });
//             e.preventDefault(); // disable selection
//         }).on("mouseup", function() {
//             if(opt.handle === "") {
//                 $(this).removeClass('draggable');
//             } else {
//                 $(this).removeClass('active-handle').parent().removeClass('draggable');
//             }
//         });

//     }
// })(jQuery);

// $('div').drags();