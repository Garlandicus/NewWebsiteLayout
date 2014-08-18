/**
	Global Vars/Constants
	*/

/**
	Functions
	*/
function expand(a){
	for (x = 0; x < 6; x++)
	{
		if(a.parentNode.children[x].className.indexOf("placeholder") > -1)
			a.parentNode.children[x].className=a.parentNode.children[x].className.replace("placeholder", "hidden").trim();
	}
	if(a.nextElementSibling.className.indexOf("hidden") > -1)
		a.nextElementSibling.className=a.nextElementSibling.className.replace("hidden", "placeholder").trim();
	else
		a.nextElementSibling.className+=" hidden";

}