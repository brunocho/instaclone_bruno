// var weaponsList = ["gun","knife","punch"];
// 
// var soldier ={
// 	name: "bruno",
// 	gender: "male",
// 	country: "Korea",
// 	favorite: "freedom",
// 	weapon: weaponsList[2]
// }
// 
// function add(one,two){
// 	return one+two;
// }
// 
// function subtract(sun,moon) {
// 	return sun-moon;
// }
// 
// var age=prompt("what is your age?")
// 
// if(age<18){
// 	console.log("You can't drink that beer")
// } else if(age>18 && age<40){
// 	console.log("cheers!")
// } else if(age>40 && age<60){
// 	console.log("hey dad")
// } else {
// 	console.log("die")
// }





$(document).ready(function(){

	var $heart = $('.heart');
	var	$addcomment = $('.photo__add-comment');

	$heart.click(function(){
		if($(this).hasClass('fa-heart-o')){
			console.log("+1")
		} else{
			console.log("-1")
		}
		$(this).toggleClass('fa-heart-o fa-heart')
		
	});

	$addcomment.keydown(function(event){
		//Detect if the key is enter
		if(event.keyCode == 13){
			//Save the textarea's values
			var newComment = event.target.value;
			// Select the comment list above textarea
			var commentList = $(this).parent().parent().children('.photo__comments');
			// Empty the value of textarea and show placeholder again
			$(this).val('').blur();
			// Append a <li> to photo__comments.
			commentList.append("<li class='photo__comment'>\
				<span class='photo__comment-author'>BRUNO</span> "
				 + newComment + "</li>");


		}
	})
})











