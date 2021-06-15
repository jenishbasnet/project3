function validateForm() {
		var firstname = document.forms["messageForm"]["firstname"].value;
		var lastname = document.forms["messageForm"]["lastname"].value;
		var email = document.forms["messageForm"]["email"].value;
		var message = document.forms["messageForm"]["message"].value;
		
		if (firstname =="" ||lastname =="" ||email =="" ||message =="") {   //if all the details are empty alert message
			alert("Please fill all the empty space in the form");
		}else{
			
			alert("Thank you "+firstname+" "+lastname+" for your feed back");
			alert("Your details: "+
				"firstname: "+firstname+" "+
				"Lastname: "+lastname+" "+                                    // if all the details are filled alert message
				"Address: "+address+" "+
				"Comment: "+ comment);
		}
	}// Form validation
setInterval(
function backgroundColor() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('background').style.backgroundColor = "#"+randomColor;  //Changing background color of image
},1000);

function openContact() {
  document.getElementById("contactPop").style.display = "block";        //opens the pop up
}

function closeContact() {                                              
  document.getElementById("contactPop").style.display = "none";         //Closes the pop up
}