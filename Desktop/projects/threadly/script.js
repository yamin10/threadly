var main = function () {

$('form').submit(function(event){
var $input = $(event.target).find('input');
var comment = $input.val(); //whatever is in input store that in comment variable
if (comment != "") {
	var html = $('<li>').html(comment + "<i class='fa fa-window-close' aria-hidden='true'></i> "); //create html and pass text in comment variable to it
	html.prependTo('#comments');
	$input.val("");
   }

   return false;
});

$(document).on("click",".fa-window-close",function(){
	$(this).parents("li").fadeOut(2000);
})

}

$(document).ready(main);