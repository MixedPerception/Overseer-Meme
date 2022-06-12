//Testing

let mainBody = document.getElementById('wall');
let divt = document.getElementById('wall-t');
let colorD = document.getElementById('toggle-d');
let colorL = document.getElementById('toggle-l');
let faceColor = document.getElementById('face-a');
let quoB = document.getElementById('quote');


colorD.onclick = function change(){
	faceColor.style.borderColor = '#FFFFFF';
	quoB.style.borderColor = '#FFFFFF';
	mainBody.style.backgroundColor = '#333';
	divt.style.color = '#FFFFFF';
	quoB.style.backgroundImage= `url('images/quoteimage_l.jpg')` ;
	colorD.disabled= true ;
	colorL.disabled= false ;
}

colorL.onclick = function change(){
	faceColor.style.borderColor = '#4d4d4d';
	quoB.style.borderColor = '#333';
	mainBody.style.backgroundColor = '#7c7c7c';
	divt.style.color = '#000';
	quoB.style.backgroundImage= `url('images/quoteimage.jpg')` ;
	colorL.disabled= true ;
	colorD.disabled= false ;
}