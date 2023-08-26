
let secondContainer = document.querySelector(".second-container");
let submitBtn = document.getElementsByClassName('submit');
let ratingNumber = null;
let ratingState = document.getElementById('newRate');

function saveValue(newValue){
	ratingNumber = newValue;
}

function change (){

	if (ratingNumber !== null){
	let container = document.querySelector(".main-container");
	let secondContainer = document.querySelector(".second-container");

	container.style.display = "none";
	secondContainer.style.display = "flex";
	ratingState.textContent = `${ratingNumber}`;
	}
}


