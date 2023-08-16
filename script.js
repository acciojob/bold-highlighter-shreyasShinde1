function highlight() {
    //Write your code here
	var boldWords = document.querySelectorAll("strong");

	boldWords.forEach(function(eachWord){
	eachWord.style.color = "green";
		
	})


}


function return_normal() {
    //Write your code here
	var boldWords = document.querySelectorAll('strong')

	boldWords.forEach(function(eachWord){
		eachWord.style.color ='black'
	})

    
}
