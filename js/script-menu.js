function responsive() {
	var x = document.getElementById("menu-navegacion");
	if( x.className === "nav") {
		x.className += " responsive";
	} 
	else {
		x.className = "nav";
	}
}


window.onscroll = function (){
	myfunction();
};

function myfunction() {
	var headerBottom = document.getElementById("sticky");
	var position = window.pageYOffset;
	
	if (position >= 245 ) {
		headerBottom.className +=" sticky";
  	} 
  	else {
    	headerBottom.className ="header-bottom";
  	}
}
	