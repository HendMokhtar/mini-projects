function countWords(){
	if (document.myform.txtarea.value=="") {
		document.mysecondform.noofwords.value="0";
		document.mysecondform.price.value="0.00";
	} 
	else {
		document.mysecondform.noofwords.value=document.myform.txtarea.value.split(' ').length;
		document.mysecondform.price.value=document.mysecondform.noofwords.value*10;
	    
	}


} 