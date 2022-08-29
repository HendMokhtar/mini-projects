function addItem(title,salary,num) {
	var h=document.getElementById(title).innerText;
	var salary=document.getElementById(salary).innerText;

	// var deleteMe=document.createElement("p");
	// deleteMe.innerHTML="x";
    var item=document.createElement("div");
	var titleText=document.createTextNode(h+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+salary);
	item.appendChild(titleText);
	// document.getElementById("selected-items").appendChild(deleteMe);
	document.getElementById("selected-items").appendChild(item);

	// deleteMe.onClick = function(){
	// alert('hi');
	// };	

    salaryArray.push(num);
	var total=0;
	for (var i = 0; i < salaryArray.length; i++) {
		total+=salaryArray[i];
	}
	document.getElementById('demo').innerHTML="Total"+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "+total+"EGP";
}
var salaryArray=[];



